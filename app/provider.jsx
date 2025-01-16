"use client";
import React, { useState } from "react";
import Header from "@/components/custom/Header";
import { MessagesContext } from "@/context/MessagesContext";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const provider = ({ children }) => {
  const { Messages, setMessages } = useState();
  return (
    <div>
      <MessagesContext.Provider value={{Messages, setMessages}}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header/>
        {children}
      
      </NextThemesProvider>
      </MessagesContext.Provider>
    </div>
  );
};

export default provider;
