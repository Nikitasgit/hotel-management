"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, FC } from "react";
type Props = {
  roomTypeFilter: string;
  searchQuery: string;
  setRoomTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

//Get props from where it is used in order to reuse the component in different parts of the application.

const Search: FC<Props> = ({
  roomTypeFilter,
  searchQuery,
  setRoomTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  //set the selection and update the state in the parent component.
  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleFilterClick = () => {
    // set the route
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };
  return (
    <section className="bg-tertiary-light px-4 py-6 ">
      <div className="container mx-auto flex gap-4 flex-wrap justify-between items-center">
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-mediul mb-2 text-black">
            Room Type
          </label>
          <div className="relative">
            <select
              value={roomTypeFilter}
              onChange={handleRoomTypeChange}
              className="w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focu:outline-none"
            >
              <option value="All">All</option>
              <option value="Basic">Basic</option>
              <option value="Luxury">Luxury</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        </div>
        <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-mediul mb-2 text-black">
            Search
          </label>
          <input
            type="search"
            placeholder="Search..."
            className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          ></input>
        </div>
        <button
          className="btn-primary"
          type="button"
          onClick={handleFilterClick}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
