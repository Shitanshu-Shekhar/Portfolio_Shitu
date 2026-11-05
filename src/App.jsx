import { useEffect, useRef, useState } from 'react';
import ContactForm from './components/ContactForm.jsx';
import ProjectDialog from './components/ProjectDialog.jsx';
import ProjectPreview from './components/ProjectPreview.jsx';
import { certifications, education, navItems, profile, projects, skills } from './data.js';

const roles = ['Java developer', 'MERN stack developer', 'problem solver'];

function Logo({ compact = false }) {
  return <a className={`logo${compact ? ' logo-compact' : ''}`} href="#home" aria-label="Shitanshu Shekhar, home">SS<span>.</span></a>;
}

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '↘'}</span>;
}

function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false);
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <Logo />
      <button className={`menu-toggle${menuOpen ? ' active' : ''}`} type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen((open) => !open)}>
        <span /><span />
      </button>
      <nav id="primary-nav" className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
        {navItems.map(([label, id]) => <a key={id} className={activeSection === id ? 'active' : ''} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <a className="header-cta" href={`mailto:${profile.email}`}>Let’s talk <Arrow diagonal /></a>
    </header>
  );
}

function ProfilePortrait() {
  return (
    <figure className="hero-art">
      <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" />
      <div className="portrait-backdrop" />
      <img className="profile-photo" src="/assets/profile.jpg" alt="Shitanshu Shekhar at Chandigarh University" fetchPriority="high" />
      <figcaption className="portrait-caption"><span className="availability-dot" /> OPEN TO INTERNSHIPS</figcaption>
      <span className="portrait-tag portrait-tag-code">&lt; build / learn / repeat &gt;</span>
    </figure>
  );
}

function Hero({ roleIndex }) {
  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-copy">
        <p className="eyebrow hero-eyebrow">HI, I’M</p>
        <h1>Shitanshu<br />Shekhar<span className="orange-dot">.</span></h1>
        <p className="hero-title-accent">Aspiring Software Engineer</p>
        <p className="hero-role"><span key={roles[roleIndex]} className="role-swap">{roles[roleIndex]}</span> <i>·</i> DSA enthusiast</p>
        <p className="hero-intro">I build thoughtful full-stack applications and love turning hard problems into useful software. Currently studying Computer Science Engineering at Chandigarh University and looking for an opportunity to grow as an engineer.</p>
        <div className="hero-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Hire me <Arrow diagonal /></a><a className="button button-outline" href="/assets/Shitanshu_Shekhar_Resume.pdf" download="Shitanshu_Shekhar_Resume.pdf">Download resume <span className="download-icon">↓</span></a></div>
        <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode ↗</a></div>
        <div className="hero-metrics"><div><b>400<span>+</span></b><small>PROBLEMS SOLVED</small></div><div><b>03</b><small>LIVE PROJECTS</small></div><div><b>8.32</b><small>CGPA</small></div></div>
      </div>
      <ProfilePortrait />
      <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      <span className="hero-index">01 — 06</span>
    </section>
  );
}

function AnimatedStat({ value, suffix = '', label, decimals = 0 }) {
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || started) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setStarted(true);
      observer.disconnect();
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) { setShown(value); return; }
      const start = performance.now();
      const duration = 1200;
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setShown(value * eased);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [started, value]);

  return <div className="stat-card" ref={ref}><strong>{shown.toFixed(decimals)}<span>{suffix}</span></strong><span>{label}</span></div>;
}

function SectionTitle({ label, title, accent, number }) {
  return <div className="section-title reveal"><p className="eyebrow">{number} / {label}</p><h2>{title}<br /><span>{accent}</span></h2></div>;
}

function About() {
  return (
    <section id="about" className="about section-wrap section-pad">
      <SectionTitle number="01" label="A LITTLE ABOUT ME" title="Curiosity," accent="meet craft." />
      <div className="about-copy reveal"><p className="lead">I’m a Computer Science Engineering student at Chandigarh University with a strong foundation in Java, data structures and algorithms, and full-stack development.</p><p>I like taking an idea from a rough sketch to a useful product. My projects have let me explore authentication, APIs, analytics, and the decisions that make an interface feel intuitive. Outside of building, I’m usually working through a coding problem or strengthening my core CS fundamentals.</p><p className="location-line"><span>⌖</span> ARA, BIHAR, INDIA <i>/</i> OPEN TO SOFTWARE ENGINEERING INTERNSHIPS</p>
        <div className="stats-grid"><AnimatedStat value={400} suffix="+" label={<>problems solved<br />on LeetCode</>} /><AnimatedStat value={3} label={<>live applications<br />built and deployed</>} /><AnimatedStat value={8.32} decimals={2} label={<>CGPA<br />Chandigarh University</>} /></div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills section-wrap section-pad">
      <SectionTitle number="02" label="WHAT I WORK WITH" title="Tools of" accent="the trade." />
      <div className="skills-grid">{skills.map((group) => <article className="skill-card reveal" key={group.title}><div className="skill-card-top"><span>{group.icon}</span><i>✳</i></div><h3>{group.title}</h3><div className="skill-pills">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className={`project-card project-${project.id} reveal`}>
      <div className="project-preview-wrap"><ProjectPreview projectId={project.id} /><span className="preview-orb" /></div>
      <div className="project-info"><div className="project-meta"><span>{project.number} / {project.category}</span><span>2026</span></div><h3>{project.title}</h3><p>{project.description}</p>
        <div className="tag-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-actions"><a className="text-link" href={project.url} target="_blank" rel="noreferrer">Visit live project <Arrow diagonal /></a><button className="details-link" type="button" onClick={() => onOpen(project)}>Explore details <span>＋</span></button></div>
      </div>
    </article>
  );
}

function Projects({ onOpen }) {
  return (
    <section id="projects" className="projects section-wrap section-pad">
      <div className="section-title section-title-wide reveal"><div><p className="eyebrow">03 / SELECTED WORK · 2025—26</p><h2>Built to be<br /><span>useful.</span></h2></div><p className="heading-note">Real applications, real questions, and a chance to build something that matters.</p></div>
      <div className="project-list">{projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={onOpen} />)}</div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="journey section-wrap section-pad">
      <SectionTitle number="04" label="THE FOUNDATION" title="Always" accent="learning." />
      <div className="journey-content reveal"><div className="education-list">{education.map((item) => <article className="education-item" key={item.title}><div className="education-date">{item.date}{item.current ? <span>IN PROGRESS</span> : null}</div><div><h3>{item.title}</h3><p>{item.institution} <i>·</i> <b>{item.result}</b></p></div></article>)}</div>
        <div className="cert-list"><p className="eyebrow">CERTIFICATIONS</p>{certifications.map((cert, index) => <article className="cert-item" key={cert.title}><span className="cert-number">0{index + 1}</span><div><h4>{cert.title}</h4><p>{cert.issuer}</p></div><span className="cert-spark">✳</span></article>)}</div>
      </div>
    </section>
  );
}

function Profiles() {
  const links = [
    { icon: '⌁', title: 'LeetCode', note: '400+ problems solved', url: profile.leetcode },
    { icon: '⌘', title: 'GitHub', note: 'Projects & code', url: profile.github },
    { icon: 'in', title: 'LinkedIn', note: 'Let’s connect', url: profile.linkedin },
  ];
  return <section className="profiles section-wrap section-pad"><div className="profile-copy reveal"><p className="eyebrow">05 / OUTSIDE THE EDITOR</p><h2>Find me<br /><span>around.</span></h2><p>Learning in public, one problem and one project at a time.</p></div><div className="profile-links reveal">{links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" key={link.title}><span className="profile-icon">{link.icon}</span><span className="profile-label"><b>{link.title}</b><small>{link.note}</small></span><span className="profile-arrow">↗</span></a>)}</div></section>;
}

function Contact() {
  return (
    <section id="contact" className="contact section-wrap section-pad">
      <div className="contact-copy reveal"><p className="eyebrow">06 / HAVE A GOOD ONE IN MIND?</p><h2>Let’s make<br />something <span>matter.</span></h2><p>I’m open to software engineering internships and thoughtful collaborations. Tell me what you’re working on.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <Arrow diagonal /></a><a className="contact-phone" href="tel:+918210925990">{profile.phone}</a><span className="contact-place"><i /> ARA, BIHAR, INDIA</span></div>
      <ContactForm />
    </section>
  );
}

function usePortfolioEffects() {
  const [activeSection, setActiveSection] = useState('home');
  const [roleIndex, setRoleIndex] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const targets = [...document.querySelectorAll('.reveal')];
    if (!('IntersectionObserver' in window)) {
      targets.forEach((element) => element.classList.add('visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-22% 0px -58% 0px', threshold: [0, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2800);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    function updateProgress() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const fraction = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${fraction})`;
    }
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return { activeSection, roleIndex, progressRef };
}

export default function App() {
  const { activeSection, roleIndex, progressRef } = usePortfolioEffects();
  const [selectedProject, setSelectedProject] = useState(null);
  const year = new Date().getFullYear();

  return (
    <>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <Header activeSection={activeSection} />
      <main>
        <Hero roleIndex={roleIndex} />
        <About />
        <Skills />
        <Projects onOpen={setSelectedProject} />
        <Journey />
        <Profiles />
        <Contact />
      </main>
      <footer className="site-footer section-wrap"><Logo compact /><span>Designed &amp; built by Shitanshu Shekhar</span><span>© {year} · Made with curiosity</span><a href="#home" aria-label="Back to top">Back to top ↑</a></footer>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
