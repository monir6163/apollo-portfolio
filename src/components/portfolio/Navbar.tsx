import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

const useTheme = () => {
  const [theme, setThemeState] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY < 200) setActiveSection("");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const id = href.slice(1);
      // Delay scroll slightly so mobile menu close animation doesn't interfere
      setTimeout(() => {
        const el = id ? document.getElementById(id) : null;
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    },
    []
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <a
          href="#"
          onClick={(e) => handleClick(e, "#")}
          className="flex items-center gap-2.5 text-xl font-serif font-semibold text-foreground tracking-tight"
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover ring-1 ring-primary/30"
          />
          JD<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>

          <a
            href="/resume.pdf"
            download
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300"
            aria-label="Download Resume"
          >
            <Download size={18} />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="text-sm font-medium px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`text-base transition-colors ${
                      isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 text-base text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="text-sm font-medium px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-center"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
