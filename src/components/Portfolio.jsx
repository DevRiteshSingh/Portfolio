import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Mail,
  Menu,
  X,
  Monitor,
  Moon,
  Search,
  Sparkles,
  Sun,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const themeOptions = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

function getSavedTheme() {
  if (typeof window === "undefined") return "system";
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  return themeOptions.some((option) => option.value === savedTheme) ? savedTheme : "system";
}

const projects = [
  {
    title: "Voice-Enabled Multilingual RAG",
    eyebrow: "Featured AI system",
    role: "AI Engineer · 2026",
    desc: "A voice-first retrieval system that understands multilingual questions, searches trusted context, and returns evidence-grounded answers.",
    link: "http://127.0.0.1:7860/",
    tech: ["Python", "Gradio", "RAG", "Speech"],
    kind: "rag",
  },
  {
    title: "DapLink",
    eyebrow: "Startup product",
    role: "Co-founder & Full-Stack Developer",
    desc: "A single, polished link for creating professional online profiles, sharing content, and having real conversations.",
    link: "https://daplink.vercel.app/",
    tech: ["React", "Node.js", "CDN"],
    image: "/Daplink.png",
  },
  {
    title: "AI Coach",
    eyebrow: "AI experience",
    role: "AI Integration Developer",
    desc: "An interview practice space where an AI agent leads the session, evaluates answers, and returns personal, useful feedback.",
    link: "https://ai-coach-wheat-five.vercel.app/",
    tech: ["React", "AI Agents"],
    image: "/CoachAi.png",
  },
  {
    title: "ZapMeet AI",
    eyebrow: "Conversational SaaS",
    role: "Full-Stack AI SaaS",
    desc: "Personalized meeting agents that join conversations in real time to answer questions and keep teams moving.",
    link: "https://meetai-alpha.vercel.app/sign-in",
    tech: ["Next.js", "tRPC", "Stream"],
    image: "/Zapmeet.png",
  },
  {
    title: "Auto Parts Commerce",
    eyebrow: "Commerce platform",
    role: "MERN Stack Developer",
    desc: "A tailored e-commerce platform and secure dashboard that makes parts inventory easier to manage day to day.",
    link: "#contact",
    tech: ["MongoDB", "Express", "React", "Node"],
    kind: "commerce",
  },
];

function ProjectVisual({ project }) {
  if (project.kind === "rag") {
    return (
      <div className="rag-visual" aria-hidden="true">
        <div className="rag-topbar">
          <span className="rag-logo">XI</span>
          <span>MSMARCO-XI</span>
          <span className="rag-state"><i /> system ready</span>
        </div>
        <div className="rag-body">
          <div className="rag-wave"><span /><span /><span /><span /><span /><span /><span /></div>
          <p className="rag-question">What does the document say about renewable energy?</p>
          <div className="rag-answer">
            <div><Search size={15} /> Evidence retrieved</div>
            <span>Multilingual context · 6 sources</span>
          </div>
        </div>
        <div className="rag-orbit rag-orbit-one" />
        <div className="rag-orbit rag-orbit-two" />
      </div>
    );
  }

  if (project.kind === "commerce") {
    return (
      <div className="commerce-visual" aria-hidden="true">
        <div className="commerce-grid" />
        <span className="commerce-label">inventory, simplified</span>
        <div className="commerce-panel panel-one"><span>01</span><strong>1,248</strong><small>products in stock</small></div>
        <div className="commerce-panel panel-two"><Code2 size={20} /><span>Storefront + dashboard</span></div>
      </div>
    );
  }

  return <img src={project.image} alt={`${project.title} website preview`} className="project-image" />;
}

export default function Portfolio() {
  const container = useRef(null);
  const [theme, setTheme] = useState(getSavedTheme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) setMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileMenuOpen]);

  useEffect(() => {
    const colorPreference = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      const resolvedTheme = theme === "system"
        ? (colorPreference.matches ? "dark" : "light")
        : theme;

      document.documentElement.dataset.theme = resolvedTheme;
      document.documentElement.style.colorScheme = resolvedTheme;
    };

    applyTheme();
    window.localStorage.setItem("portfolio-theme", theme);

    if (theme === "system") {
      colorPreference.addEventListener("change", applyTheme);
      return () => colorPreference.removeEventListener("change", applyTheme);
    }

    return undefined;
  }, [theme]);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(".navbar", { y: -22, opacity: 0, duration: 0.75 })
      .from(".hero-kicker", { y: 16, opacity: 0, duration: 0.45 }, "-=0.3")
      .from(".hero-title", { y: 38, opacity: 0, duration: 0.85 }, "-=0.2")
      .from(".hero-copy, .hero-actions, .hero-note", { y: 18, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.4")
      .from(".hero-side", { x: 28, opacity: 0, duration: 0.65 }, "-=0.55")
      .from(".scroll-cue", { y: 10, opacity: 0, duration: 0.45 }, "-=0.2");

    ScrollTrigger.create({
      start: 36,
      end: "max",
      toggleClass: { targets: ".navbar", className: "is-scrolled" },
    });

    gsap.to(".scroll-progress-value", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.25 },
    });

    gsap.from(".capability-intro, .capability", {
      scrollTrigger: { trigger: ".capabilities", start: "top 82%" },
      y: 34,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
    });

    gsap.from(".projects-heading", {
      scrollTrigger: { trigger: ".work-section", start: "top 78%" },
      y: 35,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    });

    gsap.utils.toArray(".project-card").forEach((card) => {
      const visual = card.querySelector(".project-visual");
      const image = card.querySelector(".project-image");

      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 84%" },
        y: 54,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      if (visual) {
        gsap.from(visual, {
          scrollTrigger: { trigger: card, start: "top 82%" },
          clipPath: "inset(8% 6% 8% 6% round 28px)",
          duration: 0.85,
          ease: "power3.out",
        });
      }

      if (image) {
        gsap.from(image, {
          scrollTrigger: { trigger: card, start: "top 82%" },
          scale: 1.1,
          duration: 1.1,
          ease: "power3.out",
        });
      }
    });

    gsap.from(".contact-inner", {
      scrollTrigger: { trigger: ".contact-section", start: "top 85%" },
      y: 28,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    });

    const desktopMotion = gsap.matchMedia();
    desktopMotion.add("(min-width: 821px)", () => {
      gsap.to(".hero-main", {
        yPercent: -9,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 0.65 },
      });

      gsap.to(".hero-side", {
        y: -76,
        rotate: 7,
        ease: "none",
        scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 0.8 },
      });

      gsap.to(".hero-grid-pattern", {
        y: -105,
        x: 45,
        ease: "none",
        scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1 },
      });
    });

    return () => desktopMotion.revert();
  }, { scope: container });

  return (
    <div className="portfolio-container" ref={container}>
      <div className="scroll-progress" aria-hidden="true"><span className="scroll-progress-value" /></div>
      <nav className="navbar">
        <div className="nav-content">
          <a href="#home" className="brand" aria-label="Ritesh Singh home">
            <span className="brand-mark">RS</span>
            <span>Ritesh Singh</span>
          </a>
          <div className="nav-links">
            <a href="#work">Selected work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <div className="theme-switch" role="group" aria-label="Choose color theme">
              {themeOptions.map(({ value, label, Icon }) => (
                <button
                  type="button"
                  key={value}
                  className={`theme-option ${theme === value ? "is-active" : ""}`}
                  onClick={() => setTheme(value)}
                  aria-pressed={theme === value}
                  aria-label={`${label} theme`}
                  title={label}
                >
                  <Icon size={14} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <a href="mailto:ritesh0505singh@gmail.com" className="nav-cta">
              Let&apos;s talk <ArrowUpRight size={15} />
            </a>
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div id="mobile-navigation" className={`mobile-navigation ${mobileMenuOpen ? "is-open" : ""}`}>
          <a href="#work" onClick={() => setMobileMenuOpen(false)}>Selected work</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="mailto:ritesh0505singh@gmail.com" onClick={() => setMobileMenuOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>

      <main id="home">
        <section className="hero-section">
          <div className="hero-glow glow-violet" />
          <div className="hero-glow glow-coral" />
          <div className="hero-grid-pattern" />
          <div className="hero-main">
            <div className="hero-kicker"><span className="availability-dot" /> Available for thoughtful projects</div>
            <h1 className="hero-title">Building digital<br />products with <em>intent.</em></h1>
            <div className="hero-bottom">
              <p className="hero-copy">I&apos;m Ritesh — a full-stack developer shaping fast, human-centered web products and practical AI experiences.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
                <a className="button button-ghost" href="mailto:ritesh0505singh@gmail.com">Email me <Mail size={16} /></a>
              </div>
            </div>
          </div>
          <aside className="hero-side">
            <div className="orbital-card">
              <div className="orbital-ring ring-one" /><div className="orbital-ring ring-two" />
              <span className="orbital-center"><Sparkles size={23} /></span>
              <span className="orbital-tag tag-one">AI systems</span>
              <span className="orbital-tag tag-two">web products</span>
              <span className="orbital-tag tag-three">good details</span>
            </div>
            <p className="hero-note"><span>Based in Delhi, India</span><span>·</span><span>Building worldwide</span></p>
          </aside>
          <a href="#work" className="scroll-cue"><span /> Scroll to explore</a>
        </section>

        <section className="capabilities" id="about" aria-label="Capabilities">
          <div className="capability-intro">A blend of product thinking,<br />clean systems and curiosity.</div>
          <div className="capability"><span>01</span><h2>Frontend<br />craft</h2><p>React, Next.js<br />UI engineering</p></div>
          <div className="capability"><span>02</span><h2>Backend<br />systems</h2><p>Node.js, APIs<br />Data & auth</p></div>
          <div className="capability"><span>03</span><h2>Applied<br />AI</h2><p>Agents, RAG<br />Voice interfaces</p></div>
        </section>

        <section className="work-section" id="work">
          <div className="projects-heading">
            <div><p className="section-label">Selected work <span>2024—26</span></p><h2>Useful ideas,<br /><em>beautifully built.</em></h2></div>
            <p>I like turning fuzzy problems into clear, capable experiences — from an ambitious first release to the detail that makes it feel finished.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.kind === "rag" ? "project-featured" : ""}`} key={project.title}>
                <a href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel={project.link.startsWith("http") ? "noreferrer" : undefined} className="project-visual-link" aria-label={`View ${project.title}`}>
                  <div className="project-visual"><ProjectVisual project={project} /><span className="project-open"><ExternalLink size={18} /></span></div>
                </a>
                <div className="project-meta"><span>{project.eyebrow}</span><span>0{index + 1}</span></div>
                <div className="project-content">
                  <div><h3>{project.title}</h3><p className="project-role">{project.role}</p></div>
                  <p className="project-desc">{project.desc}</p>
                  <div className="project-footer"><div className="project-tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div><a href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel={project.link.startsWith("http") ? "noreferrer" : undefined} aria-label={`Open ${project.title}`}><ArrowUpRight size={20} /></a></div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="contact-section" id="contact">
        <div className="contact-inner">
          <p className="section-label">Have an idea?</p>
          <h2>Let&apos;s make it<br /><em>matter.</em></h2>
          <a href="mailto:ritesh0505singh@gmail.com" className="email-link">ritesh0505singh@gmail.com <ArrowUpRight size={25} /></a>
          <div className="contact-bottom"><span>© {new Date().getFullYear()} Ritesh Singh</span><div><a href="https://github.com/Ritesh051" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/ritesh-singh-b29506238/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><span className="location"><BriefcaseBusiness size={15} /> Open to collaborations</span></div>
        </div>
      </footer>
    </div>
  );
}