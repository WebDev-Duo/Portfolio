import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const developers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer & UI/UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "Alex specializes in frontend development and user experience design. With 5+ years of experience, he's passionate about creating beautiful, intuitive interfaces that users love. He leads our design process and ensures every project meets the highest standards of usability and aesthetics.",
    social: {
      linkedin: "#",
      github: "#",
      email: "alex@webdevduo.com",
    },
  },
  {
    name: "Sarah Chen",
    role: "Backend Developer & DevOps Specialist",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "Sarah is our backend wizard who ensures everything runs smoothly behind the scenes. With expertise in server architecture, databases, and cloud deployment, she builds robust, scalable solutions that grow with your business. Her attention to performance and security keeps your applications running perfectly.",
    social: {
      linkedin: "#",
      github: "#",
      email: "sarah@webdevduo.com",
    },
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-neutral max-w-2xl mx-auto">
            Meet the passionate developers behind WebDev Duo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {developers.map((developer, index) => (
            <motion.div
              key={developer.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 * index }}
              className="text-center"
            >
              <img
                src={developer.image}
                alt={developer.name}
                className="w-64 h-64 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{developer.name}</h3>
              <p className="text-primary font-semibold mb-4">{developer.role}</p>
              <p className="text-neutral leading-relaxed mb-6">{developer.description}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={developer.social.linkedin}
                  className="text-primary hover:text-accent transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={developer.social.github}
                  className="text-primary hover:text-accent transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${developer.social.email}`}
                  className="text-primary hover:text-accent transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
