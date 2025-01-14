import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {ModeToggle} from "./ModeToggle";
const Header = () => {
  return (
    <div className="p-4 flex justify-between items-center border-b-[1px] border-secondary-foreground">
      <div className="rounded-full bg-black h-10 w-10 ml-4">
      <Image src={"/vercel.svg"} width={25} height={25} className="m-[7.5px]" alt={"logo"}/>
      </div>
      <div className="flex gap-1 md:gap-5">
      <ModeToggle />
      <Button variant={"ghost"} >SignIN</Button>
      <Button className="bg-gradient-to-r from-[#5976a8] to-[#954ef3] text-white">Get Started</Button>
      </div>
    </div>
  );
};

export default Header;
