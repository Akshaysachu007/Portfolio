import { Menu } from "lucide-react";
import iconImg from "../assets/Icon.jpeg";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Phone, Download } from "lucide-react";
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Akshaysachu007",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/akshay-r-4504703a4/",
    icon: FaLinkedinIn,
  },
  {
    label: "Instagram",
    href: "YOUR_INSTAGRAM_URL",
    icon: FaInstagram,
  },
];
const menuLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
const skills = [
  {
    title: "Full-stack development",
    text: "Building React front ends and Python APIs that work together, from database to browser.",
  },
  {
    title: "AI & machine learning",
    text: "Training, tuning and shipping models, and wiring LLMs into real products.",
  },
  {
    title: "Backend & deployment",
    text: "Designing services, automating pipelines and keeping apps fast and reliable in production.",
  },
];

const Chevron = ({ open }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 transition-transform duration-300 group-hover/acc:scale-125 ${open ? "rotate-180" : ""}`}
    aria-hidden="true"
  >
    <path d="M3 7l7 6 7-6" />
  </svg>
);

/* All motion lives here. Only animates opacity / transform / clip-path / filter,
   so no layout, size or position is changed. */
const heroCss = `
  @keyframes hero-rise {
    from { opacity: 0; transform: translateY(28px); filter: blur(6px); }
    to   { opacity: 1; transform: none;             filter: blur(0); }
  }
  @keyframes hero-line {
    from { opacity: 0; transform: translateY(45%) skewY(3deg); clip-path: inset(0 0 100% 0); }
    to   { opacity: 1; transform: none;                         clip-path: inset(-10% -5% -10% -5%); }
  }
  @keyframes hero-photo {
    from { clip-path: inset(100% 0 0 0); }
    to   { clip-path: inset(0 0 0 0); }
  }
  @keyframes hero-img {
    from { scale: 1.25; }
    to   { scale: 1; }
  }
  @keyframes hero-ring {
    0%   { transform: scale(1);    opacity: 0.45; }
    70%  { transform: scale(1.35); opacity: 0; }
    100% { transform: scale(1.35); opacity: 0; }
  }
  @keyframes menu-in {
    from { opacity: 0; transform: translateX(-14px); }
    to   { opacity: 1; transform: none; }
  }

  .hero-rise  { animation: hero-rise 1s cubic-bezier(.22,1,.36,1) backwards; animation-delay: var(--d, 0s); }
  .hero-line  { animation: hero-line 1.1s cubic-bezier(.22,1,.36,1) backwards; animation-delay: var(--d, 0s); }
  .hero-photo { animation: hero-photo 1.4s cubic-bezier(.77,0,.18,1) backwards; animation-delay: .25s; }
  .hero-img   { animation: hero-img 1.8s cubic-bezier(.22,1,.36,1) backwards; animation-delay: .25s; }
  .hero-ring  { animation: hero-ring 3.2s ease-out infinite; animation-delay: 2.4s; }

  .menu-wrap:hover .menu-link,
  .menu-wrap:focus-within .menu-link {
    animation: menu-in .45s cubic-bezier(.22,1,.36,1) backwards;
    animation-delay: var(--d, 0s);
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-rise, .hero-line, .hero-photo, .hero-img, .hero-ring,
    .menu-wrap .menu-link { animation: none !important; }
  }
`;

function Hero() {
  const [open, setOpen] = useState(1);
  const mainRef = useRef(null);

  /* Smooth cursor glow + soft parallax (desktop pointers only) */

  /* Magnetic pull on the arrow button */
  const magnet = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px)`;
  };
  const unmagnet = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <>
      <style>{heroCss}</style>

      {/* FIX: added `relative` (logo was centering against the page, not the nav)
          FIX: px now matches the hero's px so left/right edges line up */}
      <nav className="relative flex items-center justify-between px-6 py-8 sm:px-10 lg:px-12 bg-white">
        {/* Menu */}
        <div
          className="menu-wrap group relative hero-rise"
          style={{ "--d": "0.1s" }}
        >
          {/* Menu button */}
          <button className="flex items-center gap-3">
            <Menu
              size={28}
              strokeWidth={1.5}
              className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-90"
            />

            <span className="text-sm hidden sm:inline">Menu</span>
          </button>

          {/* Dropdown */}
          <div
            className="
            invisible
            absolute
            left-0
            top-full
            z-50
            mt-5
            w-64
            origin-top-left
            scale-95
            opacity-0
            transition-all
            duration-200

            group-hover:visible
            group-hover:scale-100
            group-hover:opacity-100
            group-focus-within:visible
            group-focus-within:scale-100
            group-focus-within:opacity-100
          "
          >
            <div className="border border-black bg-[#ffffff]">
              {menuLinks.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{ "--d": `${0.05 + i * 0.045}s` }}
                  className={`menu-link block px-6 py-4 text-sm font-medium uppercase transition-all duration-300 hover:bg-black hover:pl-8 hover:text-white ${
                    i < menuLinks.length - 1 ? "border-b border-black/20" : ""
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <h1
            className="hero-rise text-2xl font-black tracking-[-0.08em] transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-lg cursor-pointer"
            style={{ "--d": "0.2s" }}
          >
            AKSHAY.
          </h1>
        </div>

        <div className="flex items-center gap-4 sm:gap-7">
          {/* Phone */}
          <a
            href="tel:+918129615095"
            aria-label="Call Akshay"
            className="
            hero-rise
            flex
            items-center
            justify-center
            transition-transform
            duration-300
            hover:-translate-y-1
        "
            style={{ "--d": "0.3s" }}
          >
            <Phone size={19} strokeWidth={1.7} />
          </a>

          {/* Download Resume */}
          <a
            href="/Akshay_R_Resume.pdf"
            download="Akshay_R_Resume.pdf"
            aria-label="Download Resume"
            className="
            hero-rise
            flex
            items-center
            gap-2
            text-sm
            font-medium
            transition-all
            duration-300
            hover:-translate-y-0.5
        "
            style={{ "--d": "0.25s" }}
          >
            <Download size={17} strokeWidth={1.8} />

            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </nav>
      <main
        ref={mainRef}
        className="group/hero relative min-h-screen w-full overflow-hidden bg-white text-[#1F1F1F] px-6 py-8 sm:px-10 lg:px-12 lg:py-14"
        style={{ fontFamily: "'Archivo', system-ui, sans-serif" }}
      >
        {/* Soft amber glow that follows the cursor (decorative, sits behind everything) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover/hero:opacity-100"
          style={{
            background:
              "radial-gradient(440px circle at var(--mx, 50%) var(--my, 50%), rgba(253,218,102,0.28), transparent 70%)",
          }}
        />

        {/* Top bar — FIX: flex-wrap so the tag + social boxes don't overflow on phones */}
        <header className="relative z-20 flex flex-wrap items-start justify-between gap-4">
          {/* Tag Pill with smooth lift, background shift, shadow and a light sweep */}
          <span
            className="hero-rise relative overflow-hidden bg-amber-200 px-8 py-3 text-2xl text-white font-extrabold uppercase sm:px-12 sm:py-4 sm:text-3xl cursor-pointer select-none transition-all duration-300 ease-out hover:bg-amber-300 hover:text-slate-900 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full"
            style={{ fontStretch: "125%", "--d": "0.15s" }}
          >
            Hi, there
          </span>

          <nav
            className="flex items-center gap-3 sm:gap-5 lg:absolute lg:right-[4%]"
            aria-label="Social links"
          >
            {/* Label with subtle hover opacity & translate */}
            <span
              className="hero-rise hidden text-base text-[#1F1F1F]/70 sm:inline sm:mr-10 transition-all duration-300 ease-out hover:text-[#1F1F1F] hover:translate-x-1 cursor-default"
              style={{ "--d": "0.3s" }}
            >
              Follow me
            </span>

            {/* Social Buttons with butter-smooth hover pop & color swap */}
            {socials.map((s, i) => {
              const Icon = s.icon;

              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  style={{ "--d": `${0.35 + i * 0.08}s` }}
                  className="
                hero-rise
                flex
                h-12
                min-w-12
                items-center
                justify-center
                border
                border-[#1F1F1F]
                px-3
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:bg-[#1F1F1F]
                hover:text-[#FDDA66]
                hover:shadow-md
                active:translate-y-0
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-[#1F1F1F]
            "
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </nav>
        </header>

        {/* Headline (sits on top of the photo)
                  FIX: font size is now viewport-relative and smaller on desktop so it no longer runs
                  into the right column; nowrap keeps the 2 lines intact; top moved to 14% */}
        <h1
          className="relative z-20 mt-8 text-[8vw] font-black uppercase leading-[0.92] tracking-tight lg:absolute lg:left-12 lg:top-[14%] lg:mt-0 lg:whitespace-nowrap lg:text-[5.6vw] cursor-pointer transition-all duration-500 ease-out hover:scale-[1.01] hover:tracking-normal active:scale-100"
          style={{
            fontStretch: "125%",
            translate:
              "calc(var(--px, 0) * -0.5px) calc(var(--py, 0) * -0.5px)",
          }}
        >
          <span
            className="hero-line inline-block transition-colors duration-300 ease-out hover:text-amber-900"
            style={{ "--d": "0.45s" }}
          >
            Akshay R
          </span>
          <br />
          <span
            className="hero-line inline-block transition-colors duration-300 ease-out hover:text-amber-900"
            style={{ "--d": "0.6s" }}
          >
            is right here!
          </span>
        </h1>
        {/* Photo — FIX: top 30.7% -> 26% so the headline's 2nd line overlaps the photo */}
        <div className="hero-photo relative z-10 mt-6 w-full bg-[#ffffff] lg:absolute lg:bottom-0 lg:left-[20.3%] lg:top-[26%] lg:mt-0 lg:w-[48.7%] flex items-center justify-center overflow-hidden cursor-pointer">
          <img
            src={iconImg}
            alt="Akshay R"
            className="hero-img h-full w-full object-contain m-9 transition-all duration-700 ease-out hover:scale-110 hover:brightness-105"
            style={{
              translate: "calc(var(--px, 0) * 1px) calc(var(--py, 0) * 1px)",
            }}
          />
        </div>

        {/* Arrow button */}
        <a
          href="#projects"
          aria-label="View my work"
          onMouseMove={magnet}
          onMouseLeave={unmagnet}
          style={{
            "--d": "1.1s",
            transition:
              "background-color .3s, color .3s, transform .5s cubic-bezier(.22,1,.36,1)",
          }}
          className="hero-rise group relative z-20 mt-8 flex h-16 w-16 items-center justify-center border border-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-[#FDDA66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F1F1F] lg:absolute lg:bottom-[6.5%] lg:left-12 lg:mt-0 lg:h-[132px] lg:w-[132px]"
        >
          {/* attention ring */}
          <span
            aria-hidden="true"
            className="hero-ring pointer-events-none absolute inset-0 border border-[#1F1F1F] group-hover:invisible"
          />
          <svg
            viewBox="0 0 64 64"
            className="h-10 w-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 lg:h-16 lg:w-16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M12 52L52 12M24 12h28v28" />
          </svg>
        </a>

        {/* Right column
                  FIX: top aligned with the photo (26%), bottom aligned with the arrow button (6.5%),
                  paragraph at the top / accordion at the bottom via justify-between, so nothing
                  gets cut off by overflow-hidden on shorter screens */}
        <aside
          className="
    relative
    z-20
    mt-10
    lg:absolute
    lg:bottom-[6.5%]
    lg:right-[5%]
    lg:top-[26%]
    lg:mt-0
    lg:flex
    lg:w-[21%]
    lg:min-w-75
    lg:flex-col
    lg:justify-between
  "
        >
          <p
            className="hero-rise text-xl leading-snug sm:text-2xl lg:text-[1.65rem]"
            style={{ "--d": "0.9s" }}
          >
                      I enjoy turning ideas into products that actually work in the real world. From backend architecture to AI-powered features and polished interfaces, I focus on building reliable, user-centric applications that solve meaningful problems.
          </p>

          <div className="mt-10 lg:mt-0">
            {skills.map((s, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={s.title}
                  className="hero-rise group/acc relative border-b border-[#1F1F1F]"
                  style={{ "--d": `${1.05 + i * 0.1}s` }}
                >
                  {/* line that sweeps along the border on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-px left-0 h-[3px] w-full origin-left scale-x-0 bg-[#1F1F1F] transition-transform duration-500 ease-out group-hover/acc:scale-x-100"
                  />

                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-xl font-extrabold uppercase tracking-tight transition-transform duration-300 ease-out hover:translate-x-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F1F1F]"
                    style={{ fontStretch: "100%" }}
                  >
                    {s.title}
                    <Chevron open={isOpen} />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`max-w-[28ch] pb-6 text-base leading-snug text-[#1F1F1F]/60 transition-transform duration-500 ease-out ${
                          isOpen ? "translate-y-0" : "-translate-y-3"
                        }`}
                      >
                        {s.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </main>
    </>
  );
}

export default Hero;
