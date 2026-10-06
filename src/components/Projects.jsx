import { useState } from "react";
import { motion, MotionConfig } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "Janseva AI",
        category: "AI / Backend",
        description:
            "AI-powered citizen complaint intelligence platform designed to extract, classify and organize grievance information.",
        technologies: ["Python", "Django", "React", "AI", "OCR", "NLP"],
        github: "#",
        live: "#",
    },

    {
        number: "02",
        title: "Doctor AI",
        category: "AI / RAG",
        description:
            "Document intelligence application that allows users to upload medical documents and interact with their content using retrieval-augmented generation.",
        technologies: ["Django", "React", "RAG", "ChromaDB", "Ollama", "LLM"],
        github: "#",
        live: "#",
    },

    {
        number: "03",
        title: "AI Interview",
        category: "AI / Full Stack",
        description:
            "AI-powered interview platform designed to create a structured interview experience with intelligent evaluation and feedback.",
        technologies: ["Python", "Django", "React", "LLM", "AI"],
        github: "#",
        live: "#",
    },

    {
        number: "04",
        title: "Emergency Service System",
        category: "Full Stack",
        description:
            "Role-based service platform connecting customers with service providers through request, acceptance, completion and review workflows.",
        technologies: ["Django", "DRF", "React", "PostgreSQL", "JWT"],
        github: "#",
        live: "#",
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

function Projects() {
    const [active, setActive] = useState(null);

    return (
        <MotionConfig reducedMotion="user">
            <section
                id="projects"
                className="bg-black px-6 py-24 text-white sm:px-10 md:py-32 lg:px-12 lg:py-40"
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
                  text-[clamp(3.2rem,8vw,8.5rem)]
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
                                className="mt-8 max-w-[560px] text-lg leading-8 text-white/55"
                            >
                                A selection of applications, experiments and systems I've built
                                while working across backend engineering, AI and full-stack
                                development.
                            </motion.p>
                        </div>
                    </div>


                    {/* =========================================
              PROJECT LIST
          ========================================= */}
                    <div
                        className="mt-20 border-t border-white/15"
                        onMouseLeave={() => setActive(null)}
                    >
                        {projects.map((project, index) => (
                            <article
                                key={project.number}
                                onMouseEnter={() => setActive(index)}
                                className={`group/row relative transition-opacity duration-500 ${active !== null && active !== index ? "opacity-40" : "opacity-100"
                                    }`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.8, ease: EASE }}
                                    className="
                    relative
                    grid
                    gap-6
                    border-b
                    border-white/15
                    py-12
                    md:grid-cols-[180px_1fr_auto]
                    md:items-center
                    md:gap-12
                    md:py-16
                  "
                                >
                                    {/* line that draws across the bottom on hover */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/row:scale-x-100"
                                    />

                                    {/* Number + category */}
                                    <div className="flex items-center gap-4 md:block">
                                        <span className="block text-base font-semibold text-white/40 transition-colors duration-500 group-hover/row:text-white">
                                            {project.number}
                                        </span>

                                        <span className="block text-sm uppercase tracking-[0.15em] text-white/45 md:mt-3">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Title, description, tech */}
                                    <div>
                                        <h3
                                            className="
                        text-[clamp(2.4rem,5.5vw,5.5rem)]
                        font-black
                        uppercase
                        leading-[0.95]
                        tracking-[-0.055em]
                        text-white/90
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover/row:translate-x-3
                        group-hover/row:text-white
                      "
                                        >
                                            {project.title}
                                        </h3>

                                        <p className="mt-6 max-w-[600px] text-lg leading-8 text-white/55 transition-colors duration-500 group-hover/row:text-white/80">
                                            {project.description}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                                            {project.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="text-sm font-medium text-white/35 transition-colors duration-500 group-hover/row:text-white/70"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Link */}
                                    <a
                                        href={project.github}
                                        className="
                      group/link
                      relative
                      inline-flex
                      items-center
                      gap-3
                      self-start
                      overflow-hidden
                      rounded-full
                      border
                      border-white/30
                      px-7
                      py-3.5
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      transition-colors
                      duration-500
                      hover:border-white
                      md:self-center
                    "
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-y-0"
                                        />
                                        <span className="relative z-10 transition-colors duration-500 group-hover/link:text-black">
                                            GitHub
                                        </span>
                                        <ArrowUpRight
                                            size={16}
                                            strokeWidth={1.8}
                                            className="relative z-10 transition-all duration-500 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-black"
                                        />
                                    </a>
                                </motion.div>
                            </article>
                        ))}
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
              flex
              flex-col
              gap-6
              border-b
              border-white/15
              py-12
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

                        <span className="inline-flex cursor-default items-center gap-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
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