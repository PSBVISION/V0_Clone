"use client";
import React, { useState } from "react";
import Lookup from "@/data/Lookup";
import { ArrowRight, Link } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Hero = () => {
  const [userInput, setUserInput] = useState();
  return (
    <div className="flex flex-col items-center mt-36 xl:mt-52 gap-2">
      <h2 className="font-bold text-2xl md:text-4xl">{Lookup.HERO_HEADING}</h2>
      <p className="text-secondary-foreground font-medium">
        {Lookup.HERO_DESC}
      </p>
      <div className="p-5 border border-gray-700 rounded-xl max-w-2xl w-full mt-3">
        <div className="flex gap-2">
          <textarea
            onChange={(event)=> setUserInput(event.target.value)}
            className="outline-none bg-transparent w-full h-32 max-h-56 resize-none placeholder:text-destructive-foreground"
            placeholder={Lookup.INPUT_PLACEHOLDER}
          />
          {userInput && <ArrowRight className="bg-blue-500 p-2 h-10 w-10 rounded-md cursor-pointer" />}
        </div>
        <div>
          <Link className="w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-wrap max-w-2xl justify-center gap-3">
        {Lookup?.SUGGESTIONS.map((suggestion, index)=>(
          <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-[#242423] bg-[#cfdbd5] text-black dark:text-white flex items-center space-x-2"
        key={index}>
          {suggestion}
        </HoverBorderGradient>
        ))}
      </div>
    </div>
  );
};

export default Hero;
