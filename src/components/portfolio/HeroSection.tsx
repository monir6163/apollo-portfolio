import profileImg from "@/assets/pic.png";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[86vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="section-container relative z-10 pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14">
        <div className="grid items-center gap-10 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-6">
                Full-Stack Developer
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-4">
                <Typewriter
                  options={{
                    strings: [
                      "React & Next.js Specialist",
                      "Node.js Backend Builder",
                      "Modern UI Craftsperson",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 45,
                    deleteSpeed: 25,
                  }}
                />
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-serif font-bold tracking-tight leading-[0.95] mb-8"
            >
              <span className="whitespace-nowrap">
                Monir <span className="text-gradient">Hossain</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 font-light leading-relaxed"
            >
              I build scalable web applications and engaging user experiences.
              Let's create something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <a
                href="#projects"
                className="px-7 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:scale-95"
              >
                View Work
              </a>
              <a
                href={"/Monir_Hossain_CV.pdf"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/15"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>

              {[
                { icon: Github, href: "https://github.com/monir6163" },
                { icon: Linkedin, href: "https://linkedin.com/in/monirweb" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="order-1 lg:order-2 relative mx-auto w-40 h-40 sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[500px]"
          >
            <div className="absolute -inset-1.5 sm:-inset-2 rounded-full sm:rounded-[1.7rem] bg-gradient-to-br from-primary/35 via-primary/10 to-transparent blur-xl" />
            <div className="relative h-full overflow-hidden rounded-full sm:rounded-[1.7rem] border border-border/70 bg-card/70 p-1.5 sm:p-2.5 backdrop-blur-xl">
              <div className="overflow-hidden rounded-full sm:rounded-[1.35rem] h-full bg-muted">
                {!imageError ? (
                  <img
                    src={profileImg}
                    alt="Monir portrait"
                    className="h-full w-full object-cover object-top"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="h-full w-full grid place-items-center bg-gradient-to-br from-primary/25 to-primary/5 text-foreground text-5xl font-serif font-bold">
                    MH
                  </div>
                )}
              </div>

              <div className="hidden sm:block absolute left-4 right-4 bottom-4 rounded-xl border border-border/70 bg-background/85 px-3 py-2.5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.18em] text-primary mb-1">
                  Available For Work
                </p>
                <p className="text-xs sm:text-sm text-foreground font-medium">
                  Building modern web products with React/Nextjs, Node.js, and
                  cloud tools
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
