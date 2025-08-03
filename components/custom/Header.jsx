import React, { useContext } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { UserDetailContext } from "@/context/UserDetailContext";
import Link from "next/link";
const Header = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div className="p-4 flex justify-between items-center border-b-[1px] border-secondary-foreground">
        <Link href="/">
      <div className="rounded-full bg-black h-10 w-10 flex items-center justify-center">
        <Image
          src={"/vercel.svg"}
          width={25}
          height={25}
          className="mb-1"
          alt={"logo"}
        />
      </div>
        </Link>
      {userDetail?.name && (
        <div className="flex gap-1 md:gap-5">
          <ModeToggle />
          <Button variant="ghost" className="border border-foreground ">
            SignIN
          </Button>
          <Button className="bg-foreground text-background">Get Started</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
