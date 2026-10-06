import { motion, MotionConfig } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const focusAreas = [
    {
        number: "01",
        title: "Backend",
        text: "Python, Django, REST APIs, authentication and scalable application architecture.",
    },
    {
        number: "02",
        title: "AI Engineering",
        text: "RAG systems, LLM integration, semantic search and intelligent applications.",
    },
    {
        number: "03",
        title: "Full Stack",
        text: "React interfaces connected to reliable backend systems and real-world workflows.",
    },
];

const introText =
    "I'm Akshay R — a Python-focused full-stack developer specializing in Django, backend systems and AI application engineering.";

const EASE = [0.22, 1, 0.36, 1];

/* Headline lines slide up out of a mask, one after another */
const headingContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14 } },
};
const headingLine = {
    hidden: { y: "110%" },
    show: { y: 0, transition: { duration: 0.8, ease: EASE } },
};

/* Intro sentence reveals word by word */
const wordsContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.035, delayChildren: 0.15 } },
};
const word = {
    hidden: { opacity: 0.12, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* Divider lines draw in from the left */
function Line({ delay = 0 }) {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay }}
            className="h-px w-full origin-left bg-white/20"
        />
    );
}

function About() {
    return (
        <MotionConfig reducedMotion="user">
            <section
                id="about"
                className="bg-black px-6 py-24 text-white sm:px-10 md:py-36 lg:px-12"
            >
                <div className="mx-auto max-w-[1500px]">

                    {/* Header */}
                    <div className="grid gap-8 md:grid-cols-[200px_1fr]">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: EASE }}
                            className="flex items-start gap-3 pt-3 md:pt-6"
                        >
                            {/* pulsing dot */}
                            <span className="relative mt-1 flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
                            </span>

                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                                About
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={headingContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.4 }}
                            className="
                max-w-[1100px]
                text-[clamp(3.2rem,7.2vw,8rem)]
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.065em]
              "
                        >
                            <span className="block overflow-hidden py-[0.05em]">
                                <motion.span variants={headingLine} className="block">
                                    I build digital
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden py-[0.05em]">
                                <motion.span variants={headingLine} className="block">
                                    products with
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden py-[0.05em]">
                                <motion.span variants={headingLine} className="block">
                                    {/* shimmering gradient on the last line */}
                                    <motion.span
                                        animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                                        transition={{
                                            duration: 6,
                                            ease: "linear",
                                            repeat: Infinity,
                                        }}
                                        className="bg-gradient-to-r from-white/35 via-white to-white/35 bg-[length:200%_100%] bg-clip-text text-transparent"
                                    >
                                        code & AI.
                                    </motion.span>
                                </motion.span>
                            </span>
                        </motion.h2>
                    </div>


                    {/* Intro */}
                    <div className="mt-24">
                        <Line />

                        <div className="grid gap-8 pt-10 md:grid-cols-[200px_1fr]">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: EASE }}
                                className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50"
                            >
                                Who I am
                            </motion.span>

                            <div className="max-w-[1000px]">
                                <motion.p
                                    variants={wordsContainer}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.4 }}
                                    className="text-2xl font-medium leading-[1.25] tracking-[-0.02em] sm:text-3xl md:text-4xl lg:text-[2.6rem]"
                                >
                                    {introText.split(" ").map((w, i) => (
                                        <motion.span
                                            key={i}
                                            variants={word}
                                            className="mr-[0.28em] inline-block"
                                        >
                                            {w}
                                        </motion.span>
                                    ))}
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
                                    className="mt-8 max-w-[720px] text-base leading-7 text-white/60 sm:text-lg"
                                >
                                    I enjoy turning real-world problems into practical,
                                    well-structured software.
                                </motion.p>
                            </div>
                        </div>
                    </div>


                    {/* Focus Areas */}
                    <div className="mt-24">

                        <Line />

                        <div className="mb-8 flex items-center justify-between pt-8">
                            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                                What I do
                            </span>

                            <span className="text-sm text-white/40">
                                03 / 03
                            </span>
                        </div>

                        <div className="grid border-l border-white/20 md:grid-cols-3">

                            {focusAreas.map((item, index) => (
                                <motion.div
                                    key={item.number}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.7,
                                        ease: EASE,
                                        delay: index * 0.12,
                                    }}
                                    className="
                    group
                    relative
                    min-h-[340px]
                    cursor-pointer
                    overflow-hidden
                    border-b
                    border-r
                    border-t
                    border-white/20
                    p-8
                    sm:p-10
                  "
                                >
                                    {/* White fill that slides up on hover */}
                                    <div
                                        className="
                      absolute inset-0 z-0
                      translate-y-full
                      bg-white
                      transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:translate-y-0
                    "
                                    />

                                    {/* Top */}
                                    <div className="relative z-10 flex items-center justify-between">
                                        <span className="text-sm font-medium text-white/50 transition-colors duration-500 group-hover:text-black/50">
                                            {item.number}
                                        </span>

                                        <span
                                            className="
                        flex h-11 w-11 items-center justify-center
                        rounded-full border border-white/25
                        text-white
                        transition-all duration-500
                        group-hover:rotate-45
                        group-hover:border-black
                        group-hover:bg-black
                        group-hover:text-white
                      "
                                        >
                                            <ArrowUpRight size={20} strokeWidth={1.5} />
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-10 left-8 right-8 z-10 sm:left-10 sm:right-10">

                                        <h3
                                            className="
                        text-3xl
                        font-bold
                        tracking-[-0.04em]
                        text-white
                        transition-all
                        duration-500
                        group-hover:-translate-y-2
                        group-hover:text-black
                        sm:text-4xl
                      "
                                        >
                                            {item.title}
                                        </h3>

                                        {/* underline that draws in on hover */}
                                        <span className="mt-3 block h-px w-0 bg-black transition-all duration-500 group-hover:w-16" />

                                        <p
                                            className="
                        mt-4
                        max-w-[360px]
                        text-base
                        leading-7
                        text-white/65
                        transition-colors
                        duration-500
                        group-hover:text-black/70
                        sm:text-lg
                      "
                                        >
                                            {item.text}
                                        </p>

                                    </div>
                                </motion.div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>
        </MotionConfig>
    );
}

export default About;