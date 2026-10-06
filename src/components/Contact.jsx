import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail, Phone, Copy, Check } from "lucide-react";

function GithubIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

function LinkedinIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

const ease = [0.16, 1, 0.3, 1];
const serif = { fontFamily: '"Instrument Serif", Georgia, serif' };

const contactMethods = [
    { id: "email", label: "Email", value: "akshaysachu727@gmail.com", href: "mailto:akshaysachu727@gmail.com", icon: Mail },
    { id: "phone", label: "Phone / WhatsApp", value: "+91 8129615095", href: "tel:+918129615095", icon: Phone },
];

const socialLinks = [
    { name: "GitHub", href: "https://github.com/Akshaysachu007", icon: GithubIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/akshay-r-4504703a4/", icon: LinkedinIcon },
];

function Contact() {
    const reduce = useReducedMotion();
    const [copiedKey, setCopiedKey] = useState(null);

    const handleCopy = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            const t = document.createElement("textarea");
            t.value = text;
            document.body.appendChild(t);
            t.select();
            document.execCommand("copy");
            document.body.removeChild(t);
        }
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };
    const fadeUp = {
        hidden: { opacity: 0, y: reduce ? 0 : 16 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
    };
    const lineReveal = {
        hidden: { y: reduce ? "0%" : "110%" },
        visible: { y: "0%", transition: { duration: 1.1, ease } },
    };

    return (
        <section id="contact" className="relative overflow-hidden bg-[#09090b] px-6 py-24 text-neutral-100 sm:px-10 md:py-32">
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');`}</style>

            {/* one quiet glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/[0.07] blur-[120px]" />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="relative mx-auto max-w-[1100px]"
            >
                <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
                    {/* Left */}
                    <div className="lg:col-span-7">
                        <motion.div variants={fadeUp} className="flex items-center gap-2.5 text-sm text-neutral-400">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            </span>
                            Available for full-time & freelance work
                        </motion.div>

                        <h2 className="mt-8 text-5xl font-normal leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl" style={serif}>
                            {["Let's build something", "extraordinary."].map((line, i) => (
                                <span key={line} className="block overflow-hidden pb-[0.12em]">
                                    <motion.span variants={lineReveal} className={`block ${i === 0 ? "text-neutral-50" : "italic text-neutral-500"}`}>
                                        {line}
                                    </motion.span>
                                </span>
                            ))}
                        </h2>

                        <motion.p variants={fadeUp} className="mt-7 max-w-[28rem] text-[15px] leading-relaxed text-neutral-400">
                            Have a project, role, or idea in mind? Send me a message and I'll reply personally.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-9">
                            <motion.a
                                href="mailto:akshaysachu727@gmail.com"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                className="group inline-flex items-center gap-2 rounded-full bg-neutral-50 px-6 py-3 text-sm font-medium text-neutral-950 transition-all duration-500 hover:bg-amber-200 hover:shadow-[0_12px_40px_-10px_rgba(252,211,77,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
                            >
                                Start a conversation
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Right: quiet list */}
                    <motion.div variants={fadeUp} className="lg:col-span-5">
                        <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                            {contactMethods.map((m) => {
                                const Icon = m.icon;
                                const copied = copiedKey === m.id;
                                return (
                                    <li key={m.id} className="group relative">
                                        <span className="pointer-events-none absolute inset-y-0 -inset-x-4 rounded-xl bg-white/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        <div className="relative flex items-center justify-between gap-4 py-5">
                                            <a href={m.href} className="flex min-w-0 items-center gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300">
                                                <Icon size={18} strokeWidth={1.6} className="shrink-0 text-neutral-500 transition-colors duration-500 group-hover:text-amber-300" />
                                                <span className="min-w-0 transition-transform duration-500 ease-out group-hover:translate-x-1">
                                                    <span className="block text-xs text-neutral-500">{m.label}</span>
                                                    <span className="block truncate text-[15px] text-neutral-100">{m.value}</span>
                                                </span>
                                            </a>

                                            <button
                                                type="button"
                                                onClick={() => handleCopy(m.value, m.id)}
                                                aria-label={`Copy ${m.label}`}
                                                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
                                            >
                                                <AnimatePresence mode="wait" initial={false}>
                                                    {copied ? (
                                                        <motion.span key="c" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.15 }}>
                                                            <Check className="h-4 w-4 text-emerald-400" />
                                                        </motion.span>
                                                    ) : (
                                                        <motion.span key="p" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.15 }}>
                                                            <Copy className="h-4 w-4" />
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div variants={fadeUp} className="mt-24 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-7">
                        {socialLinks.map((s) => {
                            const Icon = s.icon;
                            return (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-300 hover:text-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
                                >
                                    <Icon className="h-4 w-4" />
                                    {s.name}
                                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                                    <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-amber-300 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                                </a>
                            );
                        })}
                    </div>
                    <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Akshay R. All rights reserved.</p>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {copiedKey && (
                    <motion.div
                        role="status"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease }}
                        className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-neutral-900/90 px-4 py-2 text-sm text-neutral-100 shadow-2xl backdrop-blur-xl"
                    >
                        <Check className="h-4 w-4 text-emerald-400" />
                        Copied to clipboard
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Contact;