import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ShopNest",
    description: "An e-commerce web application offering a seamless and user-friendly shopping experience with modern UI and robust functionality.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/Faisal786111/ShopNest",
    liveUrl: "https://drive.google.com/file/d/1yd2pFTw9dxIOtcF-18kvxobYhTgKrJx2/view?usp=sharing",
    demoType: "video"
  },
  {
    title: "Real-Time Chat App",
    description: "A live chat application built with WebSockets for real-time messaging, enabling instant communication between users.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["WebSockets", "Node.js", "Express", "Socket.io"],
    githubUrl: "https://github.com/Faisal786111/Chat-App",
    liveUrl: "https://chat-app-1yjb.onrender.com/",
    demoType: "live"
  },
  {
    title: "Process Scheduler",
    description: "A simulation of CPU scheduling algorithms including FCFS, SJF, Round Robin, Priority, and SRTF with interactive visualizations.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
    githubUrl: "https://github.com/Faisal786111/ProcessScheduler",
    liveUrl: "https://processscheduler.onrender.com/",
    demoType: "live"
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent work and see how we bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 * index }}
            >
              <Card className="overflow-hidden card-hover bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 gradient-text">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-accent hover:scale-105 transition-all duration-300 font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-accent hover:scale-105 transition-all duration-300 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.demoType === "video" ? "Demo Video" : "Live Demo"}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
