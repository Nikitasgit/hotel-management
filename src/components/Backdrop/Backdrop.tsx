import { FC } from "react";

type Props = {
  isOpen: boolean;
};
const Backdrop: FC<Props> = ({ isOpen }) =>
  isOpen ? (
    <div className="fixed z-[60] top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.8)] " />
  ) : (
    <></>
  );

export default Backdrop;
