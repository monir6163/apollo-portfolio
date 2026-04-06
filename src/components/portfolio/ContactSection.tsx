import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    // Simulate sending — will be replaced with Lovable Cloud
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold">Get in Touch</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and I'll respond within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail size={16} />
                </div>
                <span className="text-muted-foreground">hello@johndoe.dev</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={16} />
                </div>
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              maxLength={100}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
              maxLength={255}
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
              maxLength={1000}
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
