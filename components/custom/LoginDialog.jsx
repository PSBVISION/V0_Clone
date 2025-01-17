import React from "react";
import Lookup from "@/data/Lookup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const LoginDialog = ({ OpenDialog, CloseDialog }) => {
  return (
    <Dialog open={OpenDialog} onOpenChange={CloseDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className="flex flex-col items-center justify-center">
            <div>
              <h2 className="font-bold text-2xl text-white">{Lookup.SIGNIN_HEADING}</h2>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
