import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig, animate, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const skillGroups = [
    {
        number: "01",
        title: "Backend Engineering",
        description:
            "Building structured APIs, business logic and secure backend systems.",
        skills: [
            "Python",
            "Django",
            "Django REST Framework",
            "FastAPI",
            "REST APIs",
            "JWT",
            "RBAC",
        ],
    },
    {
        number: "02",
        title: "Frontend Development",
        description:
            "Creating responsive interfaces and connecting them with backend systems.",
        skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        number: "03",
        title: "Databases",
        description:
            "Designing and working with relational and document-based data systems.",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Firestore", "ChromaDB"],
    },
    {
        number: "04",
        title: "AI & Machine Learning",
        description:
            "Developing practical AI applications using modern ML and LLM technologies.",
        skills: [
            "RAG",
            "LLM Integration",
            "NLP",
            "Semantic Search",
            "TF-IDF",
            "PyTorch",
            "Transformers",
        ],
    },
    {
        number: "05",
        title: "Tools & Deployment",
        description:
            "Development, version control, containerization and deployment workflows.",
        skills: ["Docker", "Git", "GitHub", "Ollama", "Vercel"],
    },
];

const allSkills = skillGroups.flatMap((g) => g.skills);
const EASE = [0.22, 1, 0.36, 1];

/* ---------- animation variants ---------- */
const headingContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14 } },
};
const headingLine = {
    hidden: { y: "110%" },
    show: { y: 0, transition: { duration: 0.85, ease: EASE } },
};

const rowVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};
const rowItem = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const skillsList = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};
const skillItem = {
    hidden: { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};

/* ---------- small pieces ---------- */
function CountUp({ to }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [n, setN] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, to, {
            duration: 1.8,
            ease: EASE,
            onUpdate: (v) => setN(Math.round(v)),
        });
        return () => controls.stop();
    }, [inView, to]);

    return <span ref={ref}>{String(n).padStart(2, "0")}</span>;
}

function Line({ delay = 0 }) {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: EASE, delay }}
            className="h-px w-full origin-left bg-black/15"
        />
    );
}

function SkillGroup({ group }) {
    /* cursor-following spotlight */
    const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
    };

    return (
        <motion.div
            variants={rowVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onMouseMove={onMove}
            className="
        group/row
        relative
        grid
        gap-8
        border-b
        border-black/10
        py-12
        md:grid-cols-[180px_0.8fr_1.2fr]
        md:gap-12
        md:py-16
      "
        >
            {/* spotlight */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-4 inset-y-0 opacity-0 transition-opacity duration-500 group-hover/row:opacity-100"
                style={{
                    background:
                        "radial-gradient(520px circle at var(--x, 50%) var(--y, 50%), rgba(17,17,17,0.055), transparent 65%)",
                }}
            />

            {/* line that draws across the bottom border on hover */}
            <span
                aria-hidden="true"
                className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-[#111111] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/row:scale-x-100"
            />

            {/* Number */}
            <motion.div variants={rowItem} className="relative">
                <span className="block text-sm font-semibold tracking-wide text-black/35 transition-colors duration-500 group-hover/row:text-black">
                    {group.number}
                </span>
                <span className="mt-2 block text-sm text-black/30">
                    {String(group.skills.length).padStart(2, "0")} tools
                </span>
            </motion.div>

            {/* Category */}
            <motion.div variants={rowItem} className="relative">
                <h3
                    className="
            text-3xl
            font-bold
            leading-[1.05]
            tracking-[-0.045em]
            transition-transform
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover/row:translate-x-2
            md:text-4xl
          "
                >
                    {group.title}
                </h3>

                <p className="mt-5 max-w-[340px] text-base leading-7 text-black/50">
                    {group.description}
                </p>
            </motion.div>

            {/* Skills */}
            <motion.div
                variants={skillsList}
                className="relative grid grid-cols-1 border-t border-black/10 sm:grid-cols-2 md:border-t-0"
            >
                {group.skills.map((skill) => (
                    <motion.div
                        key={skill}
                        variants={skillItem}
                        className="
              group/skill
              relative
              cursor-default
              overflow-hidden
              border-b
              border-black/10
            "
                    >
                        {/* fill that wipes in from the left */}
                        <span
                            aria-hidden="true"
                            className="absolute inset-0 origin-left scale-x-0 bg-[#111111] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/skill:scale-x-100"
                        />

                        <div className="relative z-10 flex items-center justify-between px-3 py-5">
                            <span
                                className="
                  text-base
                  font-medium
                  text-black/65
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover/skill:translate-x-2
                  group-hover/skill:text-white
                  md:text-lg
                "
                            >
                                {skill}
                            </span>

                            <ArrowUpRight
                                size={18}
                                strokeWidth={1.5}
                                className="
                  -translate-x-2
                  translate-y-2
                  text-black/20
                  opacity-60
                  transition-all
                  duration-500
                  group-hover/skill:translate-x-0
                  group-hover/skill:translate-y-0
                  group-hover/skill:text-white
                  group-hover/skill:opacity-100
                "
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

function Skills() {
    return (
        <MotionConfig reducedMotion="user">
            <section
                id="skills"
                className="overflow-hidden bg-white px-6 py-24 text-[#111111] sm:px-10 md:py-32 lg:px-12 lg:py-44"
            >
                {/* marquee keyframes */}
                <style>{`
          @keyframes skills-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .skills-marquee-track { animation: skills-marquee 55s linear infinite; }
          .skills-marquee-track:hover { animation-play-state: paused; }
          @media (prefers-reduced-motion: reduce) {
            .skills-marquee-track { animation: none; }
          }
        `}</style>

                <div className="mx-auto max-w-[1500px]">

                    {/* =========================================
              HEADER
          ========================================= */}
                    <Line />

                    <div className="grid gap-8 pt-8 md:grid-cols-[180px_1fr]">
                        {/* Label */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: EASE }}
                            className="flex items-start gap-3 md:pt-6"
                        >
                            <span className="relative mt-1.5 flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#111111]/40" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#111111]" />
                            </span>

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
                                Skills
                            </p>
                        </motion.div>

                        {/* Heading */}
                        <div>
                            <motion.h2
                                variants={headingContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.4 }}
                                className="
                  max-w-[1100px]
                  text-[clamp(3.2rem,7vw,7.75rem)]
                  font-black
                  uppercase
                  leading-[0.9]
                  tracking-[-0.07em]
                "
                            >
                                <span className="block overflow-hidden py-[0.05em]">
                                    <motion.span variants={headingLine} className="block">
                                        Tools I use
                                    </motion.span>
                                </span>
                                <span className="block overflow-hidden py-[0.05em]">
                                    <motion.span variants={headingLine} className="block">
                                        to build
                                    </motion.span>
                                </span>
                                <span className="block overflow-hidden py-[0.05em]">
                                    <motion.span variants={headingLine} className="block">
                                        <motion.span
                                            animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                                            transition={{
                                                duration: 7,
                                                ease: "linear",
                                                repeat: Infinity,
                                            }}
                                            className="bg-gradient-to-r from-black/30 via-black/80 to-black/30 bg-[length:200%_100%] bg-clip-text text-transparent"
                                        >
                                            real products.
                                        </motion.span>
                                    </motion.span>
                                </span>
                            </motion.h2>

                            
                        </div>
                    </div>


                    {/* =========================================
              SKILL GROUPS
          ========================================= */}
                    <div className="mt-24 border-t border-black/10">
                        {skillGroups.map((group) => (
                            <SkillGroup key={group.number} group={group} />
                        ))}
                    </div>


                    


                    {/* =========================================
              BOTTOM STATEMENT
          ========================================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="mt-16 flex flex-col gap-4 border-b border-black/10 pb-8 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <p className="text-base text-black/45 sm:text-lg">
                            Constantly learning. Always building.
                        </p>

                        <span className="text-sm uppercase tracking-[0.18em] text-black/35">
                            Python / AI / Full Stack
                        </span>
                    </motion.div>

                </div>
            </section>
        </MotionConfig>
    );
}

export default Skills;