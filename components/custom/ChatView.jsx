"use client";
import { MessagesContext } from "@/context/MessagesContext";
import { api } from "@/convex/_generated/api";
import { useConvex } from "convex/react";
import { useParams } from "next/navigation";
import React, { useContext, useEffect } from "react";

function ChatView() {
  const { id } = useParams();
  const convex = useConvex();
  const { messages, setMessages } = useContext(MessagesContext);
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
    <div>
      <div>
        {messages?.map((msg, index) => (
          <div key={index}>
            <h2 className="text-foreground">ifei{msg.content}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatView;
