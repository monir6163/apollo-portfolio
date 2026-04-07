import { motion, useInView } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useRef } from "react";
import type { IconType } from "react-icons";
import { FaAws, FaCss3Alt } from "react-icons/fa6";
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type SkillItem = {
  name: string;
  icon: IconType;
  tone: string;
};

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  accent: string;
  description: string;
  skills: readonly SkillItem[];
};

const skillCategories: readonly SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    accent: "from-primary/20 via-primary/10 to-transparent",
    description:
      "Modern UI systems and responsive interfaces built for clarity and speed.",
    skills: [
      { name: "React.js", icon: SiReact, tone: "text-cyan-400" },
      { name: "Next.js", icon: SiNextdotjs, tone: "text-foreground" },
      { name: "JavaScript", icon: SiJavascript, tone: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, tone: "text-blue-500" },
      { name: "HTML5", icon: SiHtml5, tone: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, tone: "text-sky-500" },
      { name: "Bootstrap", icon: SiBootstrap, tone: "text-violet-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, tone: "text-cyan-400" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    accent: "from-sky-500/20 via-sky-500/5 to-transparent",
    description:
      "Reliable server-side logic, API design, and backend foundations.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, tone: "text-green-500" },
      { name: "Express.js", icon: SiExpress, tone: "text-foreground" },
      { name: "Go", icon: SiGo, tone: "text-cyan-500" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    description:
      "Data storage and query layers for performant, scalable applications.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, tone: "text-sky-500" },
      { name: "MongoDB", icon: SiMongodb, tone: "text-green-600" },
      { name: "Redis", icon: SiRedis, tone: "text-red-500" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    accent: "from-amber-500/20 via-amber-500/5 to-transparent",
    description:
      "Deployment, containerization, and cloud workflows that keep releases smooth.",
    skills: [
      { name: "AWS", icon: FaAws, tone: "text-orange-500" },
      { name: "Docker", icon: SiDocker, tone: "text-sky-500" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    accent: "from-fuchsia-500/20 via-fuchsia-500/5 to-transparent",
    description:
      "Daily tools I use to design, ship, debug, and collaborate efficiently.",
    skills: [
      { name: "Git", icon: SiGit, tone: "text-orange-600" },
      { name: "GitHub", icon: SiGithub, tone: "text-foreground" },
      { name: "VS Code", icon: VscVscode, tone: "text-sky-500" },
      { name: "Figma", icon: SiFigma, tone: "text-pink-500" },
      { name: "Vercel", icon: SiVercel, tone: "text-foreground" },
    ],
  },
];

const SkillCard = ({
  skill,
  delay,
  inView,
}: {
  skill: SkillItem;
  delay: number;
  inView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.45, delay }}
    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted border border-border hover:border-primary/20 hover:bg-muted/80 transition-all duration-200 group/skill"
  >
    <span
      className={`text-lg group-hover/skill:scale-110 transition-transform ${skill.tone}`}
    >
      <skill.icon aria-hidden="true" />
    </span>
    <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
      {skill.name}
    </span>
  </motion.div>
);

const CategoryCard = ({
  title,
  description,
  skills,
  accent,
  icon: Icon,
  delay,
  inView,
}: {
  title: string;
  description: string;
  skills: readonly SkillItem[];
  accent: string;
  icon: LucideIcon;
  delay: number;
  inView: boolean;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay }}
    className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-6 md:p-8 backdrop-blur-xl"
  >
    <div
      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`}
    />
    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-70" />

    <div className="relative z-10 space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-serif font-semibold text-foreground">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-background/70">
          <Icon size={18} className="text-primary" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, skillIndex) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            delay={delay + skillIndex * 0.05}
            inView={inView}
          />
        ))}
      </div>
    </div>
  </motion.section>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,hsl(var(--primary)/0.08),transparent_35%),radial-gradient(circle_at_88%_80%,hsl(var(--primary)/0.06),transparent_32%)]" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            Technical Skills
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Each skill is grouped by domain and displayed as its own card with a
            relatable icon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
          {skillCategories.map((cat, catIndex) => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              description={cat.description}
              skills={cat.skills}
              accent={cat.accent}
              icon={cat.icon}
              delay={catIndex * 0.12}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
