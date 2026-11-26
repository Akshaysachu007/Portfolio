
import { Sparkles, ArrowUpRight } from "lucide-react";

const suggestions = [
    "Tell me about Akshay's projects",
    "What are his technical skills?",
    "Explain his Doctor AI project",
    "Tell me about his experience",
];

function WelcomeScreen() {
    return (
        <div className="flex flex-1 flex-col justify-center overflow-y-auto px-6 py-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4d34e] text-black">
                <Sparkles size={24} />
            </div>

            <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white">
                Hey there!
                <br />
                <span className="text-[#f4d34e]">
                    Curious about Akshay?
                </span>
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-400">
                Ask me anything about his projects, skills or experience.
                Let's explore!
            </p>

            <div className="mt-9">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Suggested questions
                </p>

                <div className="space-y-2">
                    {suggestions.map((suggestion) => (
                        <div
                            key={suggestion}
                            className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-neutral-300"
                        >
                            <span>{suggestion}</span>
                            <ArrowUpRight
                                size={16}
                                className="shrink-0 text-[#f4d34e]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WelcomeScreen;
