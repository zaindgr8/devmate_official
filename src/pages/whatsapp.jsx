import React from "react";
import { useRouter } from "next/router";
import { FaWhatsapp } from "react-icons/fa"; // Import FaWhatsapp from react-icons/fa

const Whatsapp = () => {
  const router = useRouter();

  const handleClick = async () => {
    let url;
    // Check if WhatApp installed, if yes open whatsapp else open whatsapp web
    if (navigator.userAgent.includes("WhatsApp")) {
      // WhatsApp is installed
      url = `whatsapp://send?phone=8879xxxxxx`; // Use template literals for cleaner string construction
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      url = "https://web.whatsapp.com/send?phone=971585984869";
    }

    // Redirect using Next.js router (prevents opening new window)
    router.push(url);
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