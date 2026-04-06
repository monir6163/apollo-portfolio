import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 — Present",
    description: "Leading frontend architecture for a SaaS platform serving 50K+ users. Reduced bundle size by 40% and improved Core Web Vitals across all pages.",
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 — 2022",
    description: "Built the MVP from scratch using React and Node.js. Implemented real-time collaboration features and integrated third-party APIs for payments and analytics.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2019 — 2020",
    description: "Developed responsive web applications for diverse clients across e-commerce, healthcare, and fintech. Established component libraries and coding standards.",
  },
  {
    role: "Junior Developer",
    company: "WebStudio",
    period: "2018 — 2019",
    description: "Started my career building WordPress themes and custom plugins, then transitioned to React-based projects. Mentored by senior engineers on best practices.",
  },
];

const education = [
  {
    degree: "M.Sc. Computer Science",
    school: "Stanford University",
    period: "2016 — 2018",
    description: "Specialized in Human-Computer Interaction and distributed systems. Thesis on real-time collaborative editing algorithms.",
  },
  {
    degree: "B.Sc. Software Engineering",
    school: "MIT",
    period: "2012 — 2016",
    description: "Dean's list all semesters. Focused on algorithms, data structures, and web technologies. Led the university's open-source development club.",
  },
  {
    degree: "Full-Stack Web Development",
    school: "freeCodeCamp",
    period: "2015",
    description: "Completed 1,200+ hours of coursework covering responsive design, JavaScript algorithms, and API development.",
  },
];

interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

const Timeline = ({ items, inView, delayOffset = 0 }: { items: TimelineItem[]; inView: boolean; delayOffset?: number }) => (
  <div className="relative">
    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
    <div className="space-y-8">
      {items.map((item, i) => (
        <motion.div
          key={item.subtitle + item.period}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: delayOffset + i * 0.12 }}
          className="relative pl-8"
        >
          <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />
          <div className="glass-card p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1.5 gap-1">
              <h3 className="font-sans font-semibold text-foreground text-sm">{item.title}</h3>
              <span className="text-xs text-muted-foreground font-medium shrink-0">{item.period}</span>
            </div>
            <p className="text-sm text-primary font-medium mb-2">{item.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const expItems: TimelineItem[] = experiences.map((e) => ({
    title: e.role,
    subtitle: e.company,
    period: e.period,
    description: e.description,
  }));

  const eduItems: TimelineItem[] = education.map((e) => ({
    title: e.degree,
    subtitle: e.school,
    period: e.period,
    description: e.description,
  }));

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">Career & Education</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Experience & Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2.5 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase size={18} />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground">Experience</h3>
            </div>
            <Timeline items={expItems} inView={inView} delayOffset={0.2} />
          </motion.div>

          {/* Education column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="flex items-center gap-2.5 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground">Education</h3>
            </div>
            <Timeline items={eduItems} inView={inView} delayOffset={0.35} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
