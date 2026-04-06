import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, Stripe payments, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with custom charts, filters, and PDF export capabilities.",
    tags: ["TypeScript", "D3.js", "GraphQL", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "AI Content Studio",
    description: "AI-powered content generation tool with natural language processing and automated workflows.",
    tags: ["Next.js", "OpenAI", "Tailwind", "Vercel"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, Kanban boards, and team chat.",
    tags: ["React", "Firebase", "WebSocket", "Redux"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    demo: "#",
    github: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card-hover group overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-4 gap-2">
          <a
            href={project.github}
            className="p-2.5 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href={project.demo}
            className="p-2.5 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
