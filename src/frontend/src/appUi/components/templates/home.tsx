import React from "react";

interface MainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
  <div className="flex flex-col h-screen  items-center justify-center">
    <div className="container mx-auto max-w-6xl px-4 md:pt-20 bg-white">{children}</div>
  </div>
);
