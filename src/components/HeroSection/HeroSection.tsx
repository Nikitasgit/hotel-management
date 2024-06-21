import Image from "next/image";
import React from "react";
import CountUpNumber from "../CountUpNumber/CountUpNumber";
import ClientComponent from "./ClientComponent";
import { heading1, section2 } from "./ServerComponent";

function HeroSection() {
  return <ClientComponent section2={section2} heading1={heading1} />;
}

export default HeroSection;
