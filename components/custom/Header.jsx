import React from "react";
import Image from "next/image";
import {ModeToggle} from "./ModeToggle";
const Header = () => {
  return (
    <div>
      <Image src={"/vercel.svg"} width={25} height={25} alt={"logo"}/>
      <ModeToggle />
    </div>
  );
};

export default Header;
