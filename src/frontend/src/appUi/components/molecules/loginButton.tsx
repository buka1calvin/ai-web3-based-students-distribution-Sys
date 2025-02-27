import React from "react";
import { User } from "lucide-react";

import { IconWrapper } from "../atoms/icon";
import { Button } from "../../../components/ui/button";

export const LoginButton: React.FC = () => (
  <Button variant="outline" size="sm" className="flex rounded-full items-center">
    <IconWrapper icon={User} className="mr-2 " />
    Login
  </Button>
);
