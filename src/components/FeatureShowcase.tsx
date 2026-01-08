import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import appFaceid from "@/assets/app-faceid.png";
import appLimits from "@/assets/app-limits.png";
import appExpenses from "@/assets/app-expenses.png";
import appInsights from "@/assets/app-insights.png";
import appLedger from "@/assets/app-ledger.png";

const features = [
  {
    title: "Advanced Protection",
    description: "Protected by Face ID. Your finances stay secure with biometric authentication that feels effortless.",
    image: appFaceid,
    align: "right" as const,
  },
  {
    title: "Spend With Confidence",
    description: "Define your limits, stick to your goals. Smart budget controls that adapt to your lifestyle.",
    image: appLimits,
    align: "left" as const,
  },
  {
    title: "Clarity From Every Spend",
    description: "Effortless logging with intelligent categorization. Know where your money goes, without the hassle.",
    image: appExpenses,
    align: "right" as const,
  },
  {
    title: "Insights That Matter",
    description: "Beautiful visualizations that reveal patterns. Insights that help you make smarter financial decisions.",
    image: appInsights,
    align: "left" as const,
  },
  {
    title: "Better Habits, Naturally",
    description: "Your Ledger at a glance. Watch your progress and celebrate your wins.",
    image: appLedger,
    align: "right" as const,
  },
];

const FeatureItem = ({ 
  title, 
  description, 
  image, 
  align, 
  index 
}: { 
  title: string; 
  description: string; 
  image: string; 
  align: "left" | "right"; 
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const imageX = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    align === "left" ? [-100, 0, 0, 100] : [100, 0, 0, -100]
  );

  return (
    <div 
      ref={ref}
      className="min-h-screen flex items-center py-20 px-6"
    >
      <div className={`max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
        align === "left" ? "md:flex-row-reverse" : ""
      }`}>
        {/* Text content */}
        <motion.div 
          className={`space-y-6 ${align === "left" ? "md:order-2" : "md:order-1"}`}
          style={{ opacity, y }}
        >
          <motion.span 
            className="text-sm font-medium text-muted-foreground tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Feature {String(index + 1).padStart(2, '0')}
          </motion.span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-tight">
            {title}
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            {description}
          </p>
        </motion.div>

        {/* Phone mockup */}
        <motion.div 
          className={`relative ${align === "left" ? "md:order-1" : "md:order-2"}`}
          style={{ x: imageX, scale, opacity }}
        >
          <div className="relative mx-auto w-64 md:w-80">
            {/* Phone shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-muted/40 rounded-[3rem] blur-3xl transform scale-90 translate-y-10" />
            
            {/* Phone image */}
            <motion.img
              src={image}
              alt={title}
              className="relative w-full h-auto rounded-[2rem] shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FeatureShowcase = () => {
  return (
    <section id="features" className="relative">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} index={index} />
      ))}
    </section>
  );
};

export default FeatureShowcase;
