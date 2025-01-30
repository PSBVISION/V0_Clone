"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/custom/Header";
import { MessagesContext } from "@/context/MessagesContext";
import { UserDetailContext } from "@/context/UserDetailContext";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
const provider = ({ children }) => {
  const [ Messages, setMessages ] = useState();
  const [ UserDetail, setUserDetail ]  = useState();
  const convex=useConvex();
  useEffect(()=>{
    isAuthenticated();
  },[])
  const isAuthenticated = async() =>{
    if(typeof window !== "undefined"){
      const user = JSON.parse(localStorage.getItem('user'))
      //fetch from database
      const result = await convex.query(api.users.GetUser,{
        email:user?.email
      })
      setUserDetail(result);
      console.log(result);
    }
  }
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY}>
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
      </GoogleOAuthProvider>
    </div>
  );
};

export default provider;
