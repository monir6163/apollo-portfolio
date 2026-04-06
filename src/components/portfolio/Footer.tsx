import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com" },
          { icon: Linkedin, href: "https://linkedin.com" },
          { icon: Twitter, href: "https://twitter.com" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
