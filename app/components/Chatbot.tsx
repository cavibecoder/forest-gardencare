"use client";

import { useEffect, useRef } from "react";

export default function Chatbot() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            // Check if the message is from your bot
            if (event.origin !== "https://your-bot-six.vercel.app") return;

            if (event.data.type === "CHAT_TOGGLE") {
                const frame = iframeRef.current;
                if (!frame) return;

                if (event.data.isOpen) {
                    // Expand
                    frame.style.height = "600px";
                    frame.style.width = "400px";
                } else {
                    // Collapse to just the bubble
                    frame.style.height = "100px";
                    frame.style.width = "100px";
                }
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, []);

    return (
        <iframe
            ref={iframeRef}
            id="ag-chat-frame"
            src="https://your-bot-six.vercel.app"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                width: "100px",
                height: "100px",
                border: "none",
                zIndex: 9999,
                pointerEvents: "all",
                transition: "width 0.3s ease, height 0.3s ease",
            }}
            title="Chatbot"
        />
    );
}
