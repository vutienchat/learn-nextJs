import React from "react";
import { LayoutProps } from "../utils/interface";
import Header from "./Header";
import Footer from "./Footer";

const LayoutUser = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      test
    </>
  );
};

export default LayoutUser;
