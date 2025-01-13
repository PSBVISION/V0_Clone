import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {ModeToggle} from "./ModeToggle";
const Header = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Image src={"/vercel.svg"} width={25} height={25} alt={"logo"}/>
      <div className="flex gap-4">
      <ModeToggle />
      <Button variant={"default"}>SignIN</Button>
      <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
