import React, { useState } from "react";
import { User } from "lucide-react";

import { IconWrapper } from "../atoms/icon";
import { Button } from "../../../components/ui/button";
import { QRCodeScanner } from "../molecules/qrCodeScanner";
import { Dialog, DialogContent, DialogTitle } from "../../../components/ui/dialog";
import { useAuth } from "../../../context/authContexts";

export const LoginButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { login } = useAuth();
  
  const handleScanSuccess = (data: { token: string; number: string; isExpired: boolean }) => {
    if (data.isExpired) {
      alert("This QR code has expired. Please use a valid code.");
      return;
    }
    
    // login(data.token, data.number);
    console.log("data", data.token, data.number)
    setOpen(false);
  };
  
  return (
    <>
      <Button 
        variant="outline" 
        size="sm" 
        className="flex rounded-full items-center"
        onClick={() => setOpen(true)}
      >
        <IconWrapper icon={User} className="mr-2" />
        Login
      </Button>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Login with QR Code</DialogTitle>
          <QRCodeScanner onScanSuccess={handleScanSuccess} />
        </DialogContent>
      </Dialog>
    </>
  );
};
