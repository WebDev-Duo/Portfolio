import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "React", icon: "⚛️", color: "text-blue-500" },
  { name: "JavaScript", icon: "📜", color: "text-yellow-500" },
  { name: "HTML5", icon: "🌐", color: "text-orange-500" },
  { name: "CSS3", icon: "🎨", color: "text-blue-600" },
  { name: "Node.js", icon: "🟢", color: "text-green-500" },
  { name: "MongoDB", icon: "🍃", color: "text-purple-500" },
  { name: "Git", icon: "🔀", color: "text-red-500" },
  { name: "Responsive", icon: "📱", color: "text-primary" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in modern web technologies to create fast, scalable, and beautiful applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 * index }}
            >
              <Card className="card-hover neon-border bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`text-4xl mb-4 ${skill.color} floating-animation`} style={{ animationDelay: `${index * 0.5}s` }}>
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
