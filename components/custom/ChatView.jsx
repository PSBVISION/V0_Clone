"use client";
import { MessagesContext } from "@/context/MessagesContext";
import { UserDetailContext } from "@/context/UserDetailContext";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Link } from "lucide-react";
import Lookup from "@/data/Lookup";

function ChatView() {
  const { id } = useParams();
  const convex = useConvex();
  const { UserDetail, setUserDetail } = useContext(UserDetailContext);
  const { Messages, setMessages } = useContext(MessagesContext);
  const [userInput, setUserInput] = useState();
  useEffect(() => {
    id && getWorkspaceData();
  }, [id]);
  const getWorkspaceData = async () => {
    const result = await convex.query(api.workspace.GetWorkspace, {
      workspaceID: id,
    });
    setMessages(result?.messages);
    console.log(result);
  };
  return (
    <div className="relative h-[85vh] flex flex-col">
      <div className="flex-1 overflow-y-scroll">
        {Messages?.map((msg, index) => (
          <div key={index} className="bg-[#272727] p-3 rounded-lg mb-2 flex gap-2 items-start">
            {msg?.role=='user'&&<Image src={UserDetail?.picture} width={35} height={35} alt="userImage" className="rounded-full"/>}
            <h2>{msg.content}uub</h2>
          </div>
        ))}
      </div>
      {/* Input Section */}
      <div className="p-5 border border-gray-700 rounded-xl max-w-xl w-full mt-3 dark:bg-[#151515] bg-[#f4f2f2]">
        <div className="flex gap-2">
          <textarea
            onChange={(event) => setUserInput(event.target.value)}
            className="outline-none bg-transparent w-full h-32 max-h-56 resize-none placeholder:text-destructive-foreground"
            placeholder={Lookup.INPUT_PLACEHOLDER}
          />
          {userInput && (
            <ArrowRight
              onClick={() => onGenerate(userInput)}
              className="bg-blue-500 p-2 h-10 w-10 rounded-md cursor-pointer"
            />
          )}
        </div>
        <div>
          <Link className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default ChatView;
