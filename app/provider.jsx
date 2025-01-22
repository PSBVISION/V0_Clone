"use client";
import React, { useState } from "react";
import Header from "@/components/custom/Header";
import { MessagesContext } from "@/context/MessagesContext";
import { UserDetailContext } from "@/context/UserDetailContext";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const provider = ({ children }) => {
  const [ Messages, setMessages ] = useState();
  const [ UserDetail, setUserDetail ]  = useState();
  return (
    <div>
      <GoogleOAuthProvider clientId="<your_client_id>"></GoogleOAuthProvider>
      <UserDetailContext.Provider value={{UserDetail, setUserDetail}}>
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
      </UserDetailContext.Provider>

    </div>
  );
};

export default provider;
