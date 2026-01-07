import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-32 px-6 bg-secondary/30">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        style={{ scale, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8"
        >
          <ShieldCheck className="w-10 h-10 text-foreground" />
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Your data stays with you.
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          LedgerOne doesn't collect, track, or upload your personal financial data. 
          Everything stays on your device, protected by your device's security. 
          No accounts, no servers, no compromises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/privacy"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full font-medium text-base transition-all duration-300 hover:bg-foreground hover:text-background hover:scale-105"
          >
            Read our Privacy Policy
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PrivacySection;
