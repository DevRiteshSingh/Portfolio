import React, { useRef } from 'react';
import { ArrowUpRight, Mail, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const container = useRef();

  useGSAP(() => {
    // 1. Initial Hero Loading Sequence
    const tl = gsap.timeline();

    tl.from('.navbar', { y: -30, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
      .from('.greeting', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.6')
      .from('.hero-title', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .from('.hero-description', { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6')
      .from('.glow-orb', { scale: 0.5, opacity: 0, duration: 1.5, ease: 'power2.out', stagger: 0.2 }, '-=1');

    // 2. Continuous "Breathing" effect for the background orbs
    gsap.to('.glow-orb', {
      y: 'random(-40, 40)',
      x: 'random(-40, 40)',
      scale: 'random(0.9, 1.1)',
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5
    });

    // 3. ScrollTrigger: Skills Grid (Spring pop-up effect)
    gsap.from('.skill-item', {
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 85%',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.5)' // Gives it a slight bounce
    });

    // 4. ScrollTrigger: Projects Header
    gsap.from('.projects-header', {
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 80%',
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    // 5. ScrollTrigger: Project Cards (Scale & Fade for 3D feel)
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 75%',
      },
      y: 80,
      scale: 0.95,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // 6. ScrollTrigger: Footer
    gsap.from('.footer-content', {
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

  }, { scope: container });

  const projects = [
    {
      title: "DapLink",
      role: "CEO & Full-Stack Developer",
      desc: "Co-founded a startup helping users create professional online profiles via a single link. Built a custom chat, posting system, and integrated a CDN for optimized media delivery.",
      link: "https://daplink.vercel.app/",
      tech: "React, Node.js, CDN",
      image: "/Daplink.png"
    },
    {
      title: "AI-Coach",
      role: "AI Integration Developer",
      desc: "Built an AI-powered web app for virtual interviews. The AI agent conducts the session, evaluates candidate performance, and provides personalized feedback with scoring.",
      link: "https://ai-coach-wheat-five.vercel.app/",
      tech: "React, AI Agents",
      image: "/CoachAi.png"
    },
    {
      title: "ZapMeet AI",
      role: "Full-Stack AI SaaS",
      desc: "Empowers users to deploy personalized AI agents that join meetings to answer questions and engage in real-time conversations. Integrated Stream and BetterAuth.",
      link: "https://meetai-alpha.vercel.app/sign-in",
      tech: "Next.js, React, tRPC, Stream",
      image: "/Zapmeet.png"
    },
    {
      title: "Full-Stack E-Commerce",
      role: "MERN Stack Developer",
      desc: "Developed a complete e-commerce platform for a local auto parts business, featuring a secure, custom admin dashboard for seamless inventory management.",
      link: "#",
      tech: "MongoDB, Express, React, Node.js",
      image: null
    }
  ];

  return (
    <div className="portfolio-container" ref={container}>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">Ritesh Singh.</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            {/* Added Social Links Here */}
            <a href="https://github.com/Ritesh051" target="_blank" rel="noreferrer" className="text-orange">GitHub</a>
            <a href="https://www.linkedin.com/in/ritesh-singh-b29506238/" target="_blank" rel="noreferrer" className="text-orange">LinkedIn</a>
          </div>
          <a href="mailto:ritesh0505singh@gmail.com" className="btn-primary">
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="hero-section">
        <div className="glow-orb top-right"></div>
        <div className="glow-orb bottom-left"></div>

        <div className="hero-content">
          <p className="greeting">Hey, I'm a</p>
          <h1 className="hero-title">
            Full-Stack <br />
            <span className="text-gradient">Developer</span>
          </h1>

          <div className="hero-description">
            <div className="desc-box">
              <p className="desc-highlight">Great logic should feel invisible.</p>
              <p>From dynamic web applications to robust architectures, I build solutions that scale. Demonstrating strong problem-solving abilities and a commitment to continuous learning.</p>
              
              {/* HERO SOCIAL LINKS ADDED HERE */}
              <div className="hero-socials">
                <a href="https://github.com/Ritesh051" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
                <a href="https://www.linkedin.com/in/ritesh-singh-b29506238/" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
              </div>
              {/* END HERO SOCIAL LINKS */}

            </div>
          </div>
        </div>

        {/* Skills List */}
        <div className="skills-grid">
          <div className="skill-item">
            <span className="skill-number">#01</span>
            <h3>Frontend Engineering</h3>
            <p>React.js, Next.js, UI/UX implementation</p>
          </div>
          <div className="skill-item">
            <span className="skill-number">#02</span>
            <h3>Backend Architecture</h3>
            <p>Node.js, Express.js, System Design</p>
          </div>
          <div className="skill-item">
            <span className="skill-number">#03</span>
            <h3>Database Management</h3>
            <p>MongoDB, PostgreSQL, SQL</p>
          </div>
          <div className="skill-item">
            <span className="skill-number">#04</span>
            <h3>AI Integration</h3>
            <p>Real-time Agents, Python, API routing</p>
          </div>
        </div>
      </main>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-header">
          <div className="header-text">
            <p className="section-subtitle">Behind the Code</p>
            <h2 className="section-title">Shaping Experiences That Make Life Simpler.</h2>
          </div>
          <p className="header-desc">
            I am a full-stack developer focused on building scalable SaaS platforms, intuitive interfaces, and AI-driven solutions that solve real-world problems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                  <div className="project-placeholder">
                    <span>Backend Infrastructure</span>
                  </div>
                )}
                <a href={project.link} target="_blank" rel="noreferrer" className="project-hover-link">
                  <div className="icon-circle">
                    <ExternalLink size={24} />
                  </div>
                </a>
              </div>
              <div className="project-info">
                <div className="project-info-header">
                  <h3>{project.title}</h3>
                  <span className="tech-badge">{project.tech}</span>
                </div>
                <p className="project-desc">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div>
              <h2 className="footer-title">Let's build something <br />meaningful together.</h2>
              <a href="mailto:ritesh0505singh@gmail.com" className="btn-large">
                Get in touch <ArrowUpRight size={20} />
              </a>
            </div>
            <div className="contact-details">
              <p className="contact-title">Contact Details</p>
              <p>Delhi, DL 110086</p>
              <p>+91 7318423600</p>
              <p>ritesh0505singh@gmail.com</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Ritesh Singh. All rights reserved.</p>
            <div className="social-links">
              <a href="https://github.com/Ritesh051" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/ritesh-singh-b29506238/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;