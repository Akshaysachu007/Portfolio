
import { motion } from "motion/react";
import ChatHeader from "./ChatHeader";
import WelcomeScreen from "./WelcomeScreen";

function ChatWindow({ onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[99] flex h-[min(650px,calc(100dvh-130px))] w-[min(420px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101010] shadow-2xl shadow-black/30"
        >
            <ChatHeader onClose={onClose} />

            <WelcomeScreen />

            <div className="border-t border-white/10 p-4">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <input
                        disabled
                        placeholder="Chat connection coming next..."
                        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default ChatWindow;
