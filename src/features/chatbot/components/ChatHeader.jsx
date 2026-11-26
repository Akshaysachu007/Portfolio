
import { motion } from "motion/react";
import { Sparkles, X, Plus } from "lucide-react";

function ChatHeader({ onClose }) {
    return (
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4d34e] text-black">
                    <Sparkles size={20} />
                </div>

                <div>
                    <h2 className="text-base font-semibold text-white">
                        Ask My Ai
                    </h2>
                    <p className="text-xs text-neutral-400">
                        Akshay's AI assistant
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button
                    type="button"
                    disabled
                    aria-label="New conversation (coming soon)"
                    className="rounded-lg p-2 text-neutral-400 opacity-50"
                >
                    <Plus size={19} />
                </button>

                <motion.button
                    type="button"
                    whileHover={{ backgroundColor: "#333333" }}
                    onClick={onClose}
                    aria-label="Close chatbot"
                    className="rounded-lg p-2 text-neutral-300 transition"
                >
                    <X size={19} />
                </motion.button>
            </div>
        </div>
    );
}

export default ChatHeader;
