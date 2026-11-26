
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import ChatLauncher from "./components/ChatLauncher";
import ChatWindow from "./components/ChatWindow";

function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ChatLauncher
                isOpen={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
            />

            <AnimatePresence>
                {isOpen && (
                    <ChatWindow
                        onClose={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default ChatbotWidget;
