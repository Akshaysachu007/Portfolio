import { useRef } from "react";
import {
    motion,
    MotionConfig,
    useScroll,
    useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        number: "01",
        year: "2026",
        title: "Janseva AI",
        category: "AI / Backend",
        description:
            "AI-powered citizen complaint intelligence platform designed to extract, classify and organize grievance information.",
        technologies: ["Python", "Django", "React", "AI", "OCR", "NLP"],
        github: "https://github.com/Akshaysachu007/janseva_mla_portal",
        live: "#",
        // Add cover image path or import here later, e.g. image: "/covers/janseva.jpg"
        image: "/projects_cover/janseva.png",
    },
    {
        number: "02",
        year: "2026",
        title: "Doctor AI",
        category: "AI / RAG",
        description:
            "Document intelligence application that allows users to upload medical documents and interact with their content using retrieval-augmented generation.",
        technologies: ["Django", "React", "RAG", "ChromaDB", "Ollama", "LLM"],
        github: "https://github.com/Akshaysachu007/Doctor_Ai",
        live: "#",
        image: "/projects_cover/doctor_ai.png",
    },
    {
        number: "03",
        year: "2026",
        title: "AI Interview",
        category: "AI / Full Stack",
        description:
            "AI-powered interview platform designed to create a structured interview experience with intelligent evaluation and feedback.",
        technologies: ["Python", "Django", "React", "LLM", "AI"],
        github: "https://github.com/Akshaysachu007/ai_interview_platform",
        live: "#",
        image: "/projects_cover/ai_interview.jpg",
    },
    {
        number: "04",
        year: "2026",
        title: "Emergency Service System",
        category: "Full Stack",
        description:
            "Role-based service platform connecting customers with service providers through request, acceptance, completion and review workflows.",
        technologies: ["Django", "DRF", "React", "PostgreSQL", "JWT"],
        github: "https://github.com/Akshaysachu007/Emergency_Service",
        live: "#",
        image: "/projects_cover/emergency.png",
    },
    {
        number: "05",
        year: "2026",
        title: "Court Ledger",
        category: "Blockchain / Full Stack",
        description:
            "Tamper-evident judicial evidence verification system where clerks anchor document CIDs on-chain via Solidity smart contracts, allowing judges to cross-check database records and receive instant alerts if evidence is altered.",
        technologies: ["Solidity", "Blockchain", "IPFS / CID", "Smart Contracts", "Node.js", "MongoDB"],
        github: "#",
        live: "#",
        image: "/projects_cover/court_ledger.png",
    },
];

const EASE = [0.22, 1, 0.36, 1];

const headingContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14 } },
};

const headingLine = {
    hidden: { y: "110%" },
    show: { y: 0, transition: { duration: 0.85, ease: EASE } },
};

function CoverPlaceholder({ project }) {
    return (
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#0B0B0B] p-6 text-white sm:p-8">
            {/* Subtle monochrome ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 70% 35%, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.03) 38%, transparent 70%)",
                }}
            />

            {/* Subtle architectural grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.14]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Top metadata */}
            <div className="relative z-10 flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
                <span>{project.number} / Preview</span>
                <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] text-white/55">
                    Cover Soon
                </span>
            </div>

            {/* Center geometric mark */}
            <div className="relative z-10 my-auto flex items-center justify-center py-8">
                <div className="flex items-center gap-3 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-105">
                    <span className="h-8 w-8 rounded-md bg-white/95 sm:h-10 sm:w-10" />
                    <span className="h-8 w-8 rounded-full bg-white/80 sm:h-10 sm:w-10" />
                    <span className="h-8 w-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm sm:h-10 sm:w-10" />
                </div>
            </div>

            {/* Bottom caption */}
            <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.18em] text-white/35">
                <span>{project.category}</span>
                <span>{project.year}</span>
            </div>
        </div>
    );
}

function ProjectCard({ project, index, total, progress, range, targetScale }) {
    const cardRef = useRef(null);

    const scale = useTransform(progress, range, [1, targetScale]);
    const dimOpacity = useTransform(progress, range, [0, 0.16]);

    const stickyTop = `calc(1.25rem + ${index * 10}px)`;

    return (
        <div
            ref={cardRef}
            className="sticky flex items-start justify-center pb-10 sm:pb-16 lg:pb-20 last:pb-0 lg:top-[var(--lg-top)]"
            style={{
                top: stickyTop,
                "--lg-top": `calc(4.5rem + ${index * 18}px)`,
            }}
        >
            <motion.article
                style={{
                    scale,
                    transformOrigin: "top center",
                }}
                className="
          group/card
          relative
          w-full
          overflow-hidden
          rounded-[24px]
          border
          border-black/10
          bg-[#F7F7F5]
          text-black
          shadow-[0_-18px_50px_rgba(0,0,0,0.55)]
          sm:rounded-[32px]
        "
            >
                {/* Subtle darkening overlay as the card recedes into the stack */}
                <motion.div
                    aria-hidden="true"
                    style={{ opacity: dimOpacity }}
                    className="pointer-events-none absolute inset-0 z-20 bg-black"
                />

                <div className="grid grid-cols-1 gap-5 p-5 sm:gap-8 sm:p-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:p-12">
                    {/* Left Column: Index, Details, Tech, CTA */}
                    <div className="flex flex-col justify-between gap-5 sm:gap-8">
                        {/* Top: Number badge + stack indicator */}
                        <div className="flex items-center justify-between">
                            <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-black/15 text-xs font-semibold tracking-[0.12em] text-black/75">
                                {project.number}
                            </span>

                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                                {index + 1} / {total}
                            </span>
                        </div>

                        {/* Middle: Meta, Title, Description, Tech */}
                        <div>
                            <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-black/60 sm:text-xs sm:tracking-[0.18em]">
                                {project.year} • {project.category}
                            </p>

                            <h3 className="mt-2 sm:mt-3 text-[1.65rem] font-black uppercase leading-[1.02] tracking-[-0.04em] text-black sm:text-4xl lg:text-[2.85rem]">
                                {project.title}
                            </h3>

                            <p className="mt-3 sm:mt-4 max-w-[44ch] text-[15.5px] leading-[1.6] text-black/75 sm:text-base lg:text-[17px]">
                                {project.description}
                            </p>

                            <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-black/15 bg-black/[0.04] px-3 py-1 text-[13px] font-medium text-black/80 sm:text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bottom: Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <a
                                href={project.github}
                                target={project.github !== "#" ? "_blank" : undefined}
                                rel={project.github !== "#" ? "noreferrer" : undefined}
                                className="
                  group/link
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  border
                  border-black/25
                  px-6
                  py-3
                  text-[13px]
                  sm:text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-black
                  transition-colors
                  duration-500
                  hover:border-black
                "
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-0 translate-y-full bg-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-y-0"
                                />
                                <span className="relative z-10 transition-colors duration-500 group-hover/link:text-white">
                                    View Project
                                </span>
                                <ArrowUpRight
                                    size={15}
                                    strokeWidth={1.8}
                                    className="relative z-10 transition-all duration-500 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-white"
                                />
                            </a>

                            {project.live && project.live !== "#" && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-black/55 transition-colors hover:text-black"
                                >
                                    Live Demo
                                    <ArrowUpRight size={14} strokeWidth={1.8} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Cover Image or Bespoke Placeholder */}
                    <div className="relative h-[190px] overflow-hidden rounded-xl sm:rounded-2xl border border-black/10 bg-[#0B0B0B] sm:h-[260px] lg:h-auto lg:min-h-[390px]">
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.03]"
                            />
                        ) : (
                            <CoverPlaceholder project={project} />
                        )}
                    </div>
                </div>
            </motion.article>
        </div>
    );
}

function Projects() {
    const stackRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: stackRef,
        offset: ["start start", "end end"],
    });

    return (
        <MotionConfig reducedMotion="user">
            <section
                id="projects"
                className="bg-black px-5 py-16 text-white sm:px-10 sm:py-24 md:py-32 lg:px-12 lg:py-40"
            >
                <div className="mx-auto max-w-[1400px]">
                    {/* =========================================
                        HEADER
                    ========================================= */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: EASE }}
                        className="h-px w-full origin-left bg-white/20"
                    />

                    <div className="grid gap-8 pt-8 md:grid-cols-[180px_1fr]">
                        <div className="flex items-start gap-3 md:pt-5">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-white" />
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/55">
                                Projects
                            </p>
                        </div>

                        <div>
                            <motion.h2
                                variants={headingContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.4 }}
                                className="
                  text-[clamp(2.35rem,8vw,8.5rem)]
                  font-black
                  uppercase
                  leading-[0.9]
                  tracking-[-0.07em]
                "
                            >
                                <span className="block overflow-hidden py-[0.04em]">
                                    <motion.span variants={headingLine} className="block">
                                        Things I've
                                    </motion.span>
                                </span>
                                <span className="block overflow-hidden py-[0.04em]">
                                    <motion.span variants={headingLine} className="block text-white/35">
                                        built.
                                    </motion.span>
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
                                className="mt-6 sm:mt-8 max-w-[560px] text-base leading-[1.65] text-white/70 sm:text-lg sm:leading-8"
                            >
                                A selection of applications, experiments and systems I've built
                                while working across backend engineering, AI and full-stack
                                development.
                            </motion.p>
                        </div>
                    </div>

                    {/* =========================================
                        STICKY STACKED PROJECT CARDS
                    ========================================= */}
                    <div ref={stackRef} className="relative mt-12 sm:mt-20 lg:mt-24">
                        {projects.map((project, index) => {
                            const targetScale = 1 - (projects.length - 1 - index) * 0.04;
                            const start = index / projects.length;

                            return (
                                <ProjectCard
                                    key={project.number}
                                    project={project}
                                    index={index}
                                    total={projects.length}
                                    progress={scrollYProgress}
                                    range={[start, 1]}
                                    targetScale={targetScale}
                                />
                            );
                        })}
                    </div>

                    {/* =========================================
                        FUTURE PROJECTS
                    ========================================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="
              group/cta
              mt-20
              flex
              flex-col
              gap-6
              border-y
              border-white/15
              py-12
              sm:mt-28
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
                    >
                        <div>
                            <p className="text-sm uppercase tracking-[0.18em] text-white/45">
                                More coming
                            </p>

                            <p className="mt-2 text-lg text-white/55">
                                This collection will continue to grow.
                            </p>
                        </div>

                        <span className="inline-flex cursor-default items-center gap-4 text-2xl font-medium tracking-[-0.03em] sm:text-3xl md:text-4xl">
                            Always building
                            <span className="transition-transform duration-500 ease-out group-hover/cta:translate-x-2">
                                →
                            </span>
                        </span>
                    </motion.div>
                </div>
            </section>
        </MotionConfig>
    );
}

export default Projects;
