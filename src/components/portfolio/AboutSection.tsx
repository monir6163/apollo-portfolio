import { motion, useInView } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Dot,
  Download,
  Github,
  Linkedin,
  MapPin,
  Palette,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useRef, useState } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Engineering Excellence",
    desc: "Clean architecture, maintainable code, and scalable systems designed for long-term growth.",
  },
  {
    icon: Palette,
    title: "Product Thinking",
    desc: "User-first interfaces with strong visual hierarchy, accessibility, and practical business value.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "From planning to production with reliable execution, performance focus, and measurable outcomes.",
  },
];

const quickStats = [
  { label: "Experience", value: "3+ Years", icon: BriefcaseBusiness },
  { label: "Location", value: "Bangladesh", icon: MapPin },
  { label: "Projects", value: "40+ Delivered", icon: Sparkles },
  { label: "Primary Stack", value: "React + Node", icon: Code2 },
];

const socialLinks = {
  github: "https://github.com/monir6163",
  linkedin: "https://www.linkedin.com/in/monirweb/",
  cv: "/Monir-CV.pdf",
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,hsl(var(--primary)/0.08),transparent_40%),radial-gradient(circle_at_85%_75%,hsl(var(--primary)/0.06),transparent_36%)]" />
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-primary">
              <Sparkles size={14} aria-hidden="true" />
              About Me
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Full-Stack Developer focused on
              <span className="text-gradient"> modern, reliable products</span>
            </h2>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                I am Monir Hossain, a Full-Stack Developer based in Bangladesh.
                I build scalable web applications using React, Next.js,
                TypeScript, Node.js, Express, PostgreSQL, and Prisma.
              </p>
              <p>
                With 3+ years of experience and 40+ completed projects, I focus
                on writing clean code, designing intuitive interfaces, and
                delivering production-ready solutions that solve real business
                problems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {quickStats.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.18 + i * 0.08 }}
                  className="glass-card p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-1 text-base font-semibold text-foreground">
                        {value}
                      </p>
                    </div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="group glass-card p-6 md:p-7"
            >
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-primary/35 to-primary/10 blur-[1px]" />
                  <div className="relative h-24 w-24 rounded-full p-[3px] bg-gradient-to-br from-primary/70 via-primary/25 to-primary/10 transition-transform duration-500 group-hover:scale-105">
                    <div className="h-full w-full rounded-full overflow-hidden bg-background/80 border border-border/60">
                      {!imageError ? (
                        <img
                          src="/src/assets/p.jpg"
                          alt="Profile"
                          className="h-full w-full object-cover"
                          loading="lazy"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="h-full w-full grid place-items-center bg-gradient-to-br from-primary/25 to-primary/5 text-foreground font-semibold text-xl">
                          MN
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Monir
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Full-Stack Developer
                  </p>
                  <div className="mt-2 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    <Dot size={16} className="-ml-1" aria-hidden="true" />
                    Available for hire
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-background/70 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Github size={18} aria-hidden="true" />
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-background/70 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>

                <a
                  href={socialLinks.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/15"
                >
                  <Download size={16} aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </motion.div>

            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.36 + i * 0.1 }}
                className="group glass-card-hover p-6 flex gap-4 items-start"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1.5">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
