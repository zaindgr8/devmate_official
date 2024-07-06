import ScrollToTop from "@/hooks/scroll-to-top";
import { animationCreate } from "@/utils/utils";
import React, { useEffect } from "react";
import Whatsapp from "../pages/whatsapp";

const Wrapper = ({ children }) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <>
    <Whatsapp/>
      {children}
      {/* <ScrollToTop /> */}
    </>
  );
};

export default Wrapper;
