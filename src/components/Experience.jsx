import { useRef } from "react";
import {
    motion,
    MotionConfig,
    useScroll,
    useSpring,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";

const experiences = [
    {
        number: "01",
        period: "2026",
        role: "Artificial Intelligence Intern",
        company: "Qnayds LLP",
        type: "Internship",
        description:
            "Worked on practical AI application development, exploring machine learning concepts and building solutions around real-world use cases.",
        technologies: ["Python", "AI", "Machine Learning", "NLP"],
    },

    {
        number: "02",
        period: "2026",
        role: "Python Django with GenAI",
        company: "HACA",
        type: "Professional Programme",
        description:
            "Developed practical experience in Python, Django and AI application engineering while working on real-world software projects and backend systems.",
        technologies: ["Python", "Django", "REST APIs", "GenAI"],
    },

    {
        number: "03",
        period: "2026",
        role: "Full Stack Developer",
        company: "Client & Team Projects",
        type: "Professional Experience",
        description:
            "Worked with a development team to design and build real-world web applications, contributing to backend architecture, APIs and full-stack development.",
        technologies: ["Django", "React", "PostgreSQL", "REST APIs"],
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

function Experience() {
    /* timeline spine fills as you scroll through the list */
    const listRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: listRef,
        offset: ["start 70%", "end 60%"],
    });
    const fill = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });

    return (
        <MotionConfig reducedMotion="user">
            <section
                id="experience"
                className="bg-white px-6 py-24 text-[#111111] sm:px-10 md:py-32 lg:px-12 lg:py-44"
            >
                <div className="mx-auto max-w-[1500px]">

                    {/* HEADER */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: EASE }}
                        className="h-px w-full origin-left bg-black/15"
                    />

                    <div className="grid gap-8 pt-8 md:grid-cols-[180px_1fr]">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: EASE }}
                            className="flex items-start gap-3 md:pt-5"
                        >
                            <span className="relative mt-1.5 flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#111111]/40" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#111111]" />
                            </span>

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/50">
                                Experience
                            </p>
                        </motion.div>

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
                                        Where I've
                                    </motion.span>
                                </span>
                                <span className="block overflow-hidden py-[0.05em]">
                                    <motion.span variants={headingLine} className="block">
                                        <motion.span
                                            animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                                            transition={{ duration: 7, ease: "linear", repeat: Infinity }}
                                            className="bg-gradient-to-r from-black/30 via-black/80 to-black/30 bg-[length:200%_100%] bg-clip-text text-transparent"
                                        >
                                            worked.
                                        </motion.span>
                                    </motion.span>
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
                                className="mt-8 max-w-[580px] text-lg leading-8 text-black/50"
                            >
                                Experience gained through internships, professional programmes
                                and real-world software projects.
                            </motion.p>
                        </div>
                    </div>

                    {/* EXPERIENCE LIST */}
                    <div ref={listRef} className="relative mt-24 border-t border-black/10">

                        {/* timeline spine (desktop): faint track + dark line that fills on scroll */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute bottom-0 left-[164px] top-0 hidden w-px bg-black/10 md:block"
                        >
                            <motion.div
                                style={{ scaleY: fill }}
                                className="h-full w-full origin-top bg-[#111111]"
                            />
                        </div>

                        {experiences.map((experience) => (
                            <motion.article
                                key={experience.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, ease: EASE }}
                                className="
                  group
                  relative
                  grid
                  gap-6
                  border-b
                  border-black/10
                  py-12
                  md:grid-cols-[140px_48px_1fr_auto]
                  md:gap-x-0
                  md:gap-y-0
                  md:py-0
                "
                            >
                                {/* hover wash */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-x-6 inset-y-0 bg-black/[0.025] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />

                                {/* line that draws across the bottom on hover */}
                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-[#111111] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                                />

                                {/* NUMBER + PERIOD */}
                                <div className="relative flex items-center gap-4 md:block md:py-16">
                                    <span className="block text-sm font-semibold text-black/35 transition-colors duration-500 group-hover:text-black">
                                        {experience.number}
                                    </span>

                                    <p className="block text-base font-medium text-black/45 md:mt-3">
                                        {experience.period}
                                    </p>
                                </div>

                                {/* TIMELINE DOT */}
                                <div className="relative hidden md:block">
                                    <span
                                        aria-hidden="true"
                                        className="
                      absolute
                      left-1/2
                      top-[4.15rem]
                      z-10
                      h-3.5
                      w-3.5
                      -translate-x-1/2
                      rounded-full
                      border
                      border-black/40
                      bg-white
                      transition-all
                      duration-500
                      group-hover:scale-150
                      group-hover:border-[#111111]
                      group-hover:bg-[#111111]
                    "
                                    />
                                </div>

                                {/* MAIN CONTENT */}
                                <div className="relative md:py-16 md:pr-10">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm uppercase tracking-[0.15em] text-black/45">
                                            {experience.type}
                                        </span>

                                        <span className="h-px w-8 bg-black/20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-16 group-hover:bg-black" />
                                    </div>

                                    <h3
                                        className="
                      mt-5
                      text-[clamp(2.6rem,5.4vw,6rem)]
                      font-black
                      uppercase
                      leading-[0.9]
                      tracking-[-0.065em]
                      transition-transform
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:translate-x-3
                    "
                                    >
                                        {experience.role}
                                    </h3>

                                    <p className="mt-5 text-xl font-medium md:text-2xl">
                                        {experience.company}
                                    </p>

                                    <p className="mt-6 max-w-[680px] text-lg leading-8 text-black/55 transition-colors duration-500 group-hover:text-black/75">
                                        {experience.description}
                                    </p>

                                    {/* TECHNOLOGIES */}
                                    <div className="mt-8 flex flex-wrap gap-2.5">
                                        {experience.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="
                          cursor-default
                          rounded-full
                          border
                          border-black/15
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-black/50
                          transition-all
                          duration-300
                          hover:border-[#111111]
                          hover:bg-[#111111]
                          hover:text-white
                          group-hover:border-black/30
                        "
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* ARROW */}
                                <div className="relative hidden md:flex md:items-start md:justify-end md:py-16">
                                    <span
                                        className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/20
                      text-black/40
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:rotate-45
                      group-hover:border-[#111111]
                      group-hover:bg-[#111111]
                      group-hover:text-white
                    "
                                    >
                                        <ArrowUpRight size={22} strokeWidth={1.5} />
                                    </span>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                </div>
            </section>
        </MotionConfig>
    );
}

export default Experience;