"use client";
import React from "react";
import Header from "@/components/custom/Header";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const provider = ({ children }) => {
  return (
    <div>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header/>
        {children}
      </NextThemesProvider>
    </div>
  );
};

export default provider;
