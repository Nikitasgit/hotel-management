import hotelRoom from "../../schemaTypes/hotelRoom";
type coverImage = {
  url: string;
};

export type Image = {
  _key: string;
  url: string;
};

type Amenity = {
  _key: string;
  amenity: string;
  icon: string;
};

type Slug = {
  _type: string;
  current: string;
};
export type Room = {
  _id: string;
  coverImage: coverImage;
  description: string;
  dimension: string;
  discount: number;
  images: Image[];
  isBooked: boolean;
  isFeatured: boolean;
  name: string;
  numberOfBeds: number;
  offeredAmenities: Amenity[];
  price: number;
  slug: Slug;
  specialNote: string;
  type: string;
};

export type CreateBookingDto = {
  user: string;
  hotelRoom: string;
  checkinDate: string;
  checkoutDate: string;
  adults: number;
  numberOfDays: number;
  children: number;
  totalPrice: number;
  discount: number;
};
