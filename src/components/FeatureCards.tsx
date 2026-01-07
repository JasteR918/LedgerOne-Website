import { motion } from "framer-motion";
import { Shield, Smartphone, PieChart, Lock } from "lucide-react";

const cards = [
  {
    icon: Shield,
    title: "100% Offline & Secure",
    description: "No servers, no tracking, no cloud dependency. Your data stays on your device.",
  },
  {
    icon: Smartphone,
    title: "Apple-first Design",
    description: "Feels native, smooth, and distraction-free. Built with iOS design principles.",
  },
  {
    icon: PieChart,
    title: "Smart Expense Tracking",
    description: "Simple insights without complexity. Understand your spending at a glance.",
  },
  {
    icon: Lock,
    title: "Privacy by Default",
    description: "Your data never leaves your device. No account required, ever.",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed to be simple, secure, and respectful of your privacy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-3xl p-8 group cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <card.icon className="w-7 h-7 text-foreground" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
