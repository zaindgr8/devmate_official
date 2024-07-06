import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import FaWhatsapp from react-icons/fa

const Whatsapp = () => {
  const handleClick = async () => {
    let url;
    const preMessage =
      "Hi there!  I'm interested in learning more about DEVMATE Digital Marketing and Software Solutions. Could you please provide me with more details? Thanks!";
    const encodedMessage = encodeURIComponent(preMessage);

    // Check if WhatApp installed, if yes open whatsapp else open whatsapp web
    if (navigator.userAgent.includes("WhatsApp")) {
      // WhatsApp is installed
      url = `whatsapp://send?phone=971585984869&text=${encodedMessage}`;
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      url = `https://web.whatsapp.com/send?phone=971585984869&text=${encodedMessage}`;
    }

    // Open URL in a new tab using window.open
    window.open(url, "_blank");
  };

  return (
    <button // Use a button element for better accessibility
      className="bg-green-600 z-20 w-min p-2 rounded-full fixed bottom-10 right-4 cursor-pointer md:right-8"
      onClick={handleClick}
    >
      <FaWhatsapp color="white" className="w-7 h-7 md:w-10 md:h-10" />
    </button>
  );
};

export default Whatsapp;
