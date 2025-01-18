"use client";

import { useEffect } from "react";

const VoiceFlowChat = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.onload = () => {
      // Initialize VoiceFlow chat after script loads
      window.voiceflow?.chat.load({
        verify: { projectID: "6783eaab5b843c00cedad2d8" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";

    // Append script to document
    document.head.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything visible
};

export default VoiceFlowChat;
