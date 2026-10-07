"use client";
import Image from "next/image";
import { useState } from "react";
import  me from "../public/me.jpg";
const projects = [
  {
    kind: "Frontend  ",
    title: "FIT Institute CRM",
    description:
      "Student LMS portal with geo-based attendance, form tracking and Firebase login.",
    tech: ["React","express",  "Node.js", "MongoDB"],
    live: "https://institute-crm-nine.vercel.app/",
    wide: true,
  },
  {
    kind: "Frontend + backend",
    title: "E-commerce Site",
    description:
      "Online store where you browse and search products, built mobile-first.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://ecommerce-site-two-weld.vercel.app",
  }, 
  {
    kind: "Frontend + backend",
    title: "College Portal",
    description: "Portal for students and admins with role-based access.",
    tech: ["next.js", "Node.js", "MongoDB"],
    live: "https://collage-portal-rd9h.vercel.app/",
  },
  {
    kind: "Frontend",
    title: "To-Do Task App",
    description: "Add, edit and delete tasks, saved in your browser with permanent storage.",
    tech: ["React", "localStorage"],
    live: "https://todo-task-project-puce.vercel.app",
  },

];

const skills = [
  {
    group: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Redux Toolkit", "Next.js"],
  },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Database", items: ["MongoDB", "Firebase"] },
  {
    group: "Tools and deployment",
    items: ["Git", "GitHub", "Vercel", "Render", "Responsive design"],
  },
];

const contacts = [
  {
    label: "Email",
    text: "hassanali61333@gmail.com",
    href: "mailto:hassanali61333@gmail.com",
  },
  { label: "Phone", text: "+92 340 5924211", href: "tel:+923405924211" },
  {
    label: "LinkedIn",
    text: "linkedin.com/in/hassan-ali-101ab8380",
    href: "https://linkedin.com/in/hassan-ali-101ab8380",
    external: true,
  },
  {
    label: "GitHub",
    text: "github.com/hassanali61333",
    href: "https://github.com/hassanali61333",
    external: true,
  },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const done = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };

  const copy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, () => {});
    }
  };

  return (
    <button className="copy" type="button" onClick={copy}>
      {copied ? "copied" : "copy"}
    </button>
  );
}

export default function Home() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme");
    const dark =
      current === "dark" ||
      (!current && window.matchMedia("(prefers-color-scheme: dark)").matches);
    root.setAttribute("data-theme", dark ? "light" : "dark");
  };

  return (
    <div className="wrap">
      <header className="top">
        <a className="logo" href="#top">
          Hassan<span>.</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button className="toggle" type="button" onClick={toggleTheme}>
            theme
          </button>
        </nav>
      </header>

      {/* Hero */}
      <div className="hero" id="top">
        <div>
          <div className="status">
            <i></i>Based in Islamabad & Rawalpindi, Pakistan
          </div>
          <h1>Hassan Ali</h1>
          <h2>MERN Stack Developer</h2>
          <p className="lead">
            I build fast, responsive and user-friendly web applications with
            React, Node.js, Express and MongoDB, and I deploy them so you can
            open and use them.
          </p>
          <div className="cta">
            <a className="btn primary" href="#projects">
              View my work
            </a>
            <a className="btn" href="#contact">
              Contact me
            </a>
          </div>
          <div className="socials">
            <a href="https://github.com/hassanali61333" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hassan-ali-101ab8380"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="portrait">
          <div className="frame">
            <Image
              src={me}
              alt="Portrait of Hassan Ali in a navy suit"
              width={720}
              height={954}
              priority
            />
          </div>
          <div className="chip">
            <small>Stack</small>
            <strong>
              MERN <em>+</em> Firebase
            </strong>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat">
          <b>5</b>
          <span>Live projects</span>
        </div>
        <div className="stat">
          <b>MERN</b>
          <span>Full stack</span>
        </div>
        <div className="stat">
          <b>Vercel</b>
          <span>Deployments</span>
        </div>
        <div className="stat">
          <b>Git</b>
          <span>GitHub workflow</span>
        </div>
      </div>

      {/* About */}
      <section id="about">
        <div className="sec-head">
          <h2>About me</h2>
        </div>
        <div className="about">
          <div>
            <p>
              I am a MERN stack developer from Islamabad. I like building clean,
              quick web apps, and I have built several projects with React,
              Redux, Node.js, Express, MongoDB and Firebase.
            </p>
            <p>
              I write the frontend and the backend, connect them with a REST
              API, and deploy the result on <b>Vercel</b> or <b>Render</b>, so
              every project is a link you can open.
            </p>
          </div>
          <div className="facts">
            <div>
              <span>Location</span>
              <span>Islamabad, Pakistan</span>
            </div>
            <div>
              <span>Focus</span>
              <span>MERN full stack</span>
            </div>
            <div>
              <span>Deploys on</span>
              <span>Vercel, Render</span>
            </div>
            <div>
              <span>Education</span>
              <span>Virtual University of Pakistan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="sec-head">
          <h2>Projects</h2>
          <p>Live websites I have built</p>
        </div>
        <div className="projects">
          {projects.map((p) => (
            <article key={p.title} className={`project${p.wide ? " wide" : ""}`}>
              <div className="kind">{p.kind}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="links">
                <a href={p.live} target="_blank" rel="noreferrer">
                  Live demo &#8599;
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="sec-head">
          <h2>Skills</h2>
          <p>What I work with</p>
        </div>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group} className="skill-group">
              <h3>{s.group}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="contact">
          <div>
            <h2>Let&apos;s talk</h2>
            <p>
              Have an opportunity or a project in mind? Send me a message and I
              will get back to you.
            </p>
          </div>
          <div className="contact-list">
            {contacts.map((c) => (
              <div className="row" key={c.label}>
                <span className="k">{c.label}</span>
                <span className="v">
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {c.text}
                  </a>
                </span>
                <CopyButton text={c.text} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <span>Hassan Ali</span>
        <span>Islamabad, 2026</span>
      </footer>
    </div>
  );
}
