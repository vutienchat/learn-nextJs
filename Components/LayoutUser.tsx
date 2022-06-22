import React from "react";
import { LayoutProps } from "../utils/interface";
import Header from "./Header";

const LayoutUser = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutUser;
