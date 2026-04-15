import { ArrowUp, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`border-t border-border py-10 ${isScrolled ? "bg-background/70" : "bg-background"}`}
    >
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Monir Hossain. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/monir6163" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/monirweb/" },
            { icon: FaEnvelope, href: "mailto:monirhossain6163@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
