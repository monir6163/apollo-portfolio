import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Monir Hossain. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/monir6163" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/monirweb/" },
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
  </footer>
);

export default Footer;
