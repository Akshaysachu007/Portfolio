
import { motion } from "motion/react";
import { Sparkles, X } from "lucide-react";

function ChatLauncher({ isOpen, onClick }) {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label={isOpen ? "Close Ask My Ai" : "Open Ask My Ai"}
            aria-expanded={isOpen}
            className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 rounded-full bg-[#f4d34e] px-5 py-4 text-black shadow-2xl shadow-black/20"
        >
            {isOpen ? (
                <X size={21} />
            ) : (
                <Sparkles size={21} />
            )}

            <span className="text-sm font-semibold tracking-tight">
                {isOpen ? "Close" : "Ask AI about me"}
            </span>
        </motion.button>
    );
}

export default ChatLauncher;
