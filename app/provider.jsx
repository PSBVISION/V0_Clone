"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const provider = (children) => {
  return (
    <div>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        
      >
        {children}
      </NextThemesProvider>
    </div>
  );
};

export default provider;
