import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center hero-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-white"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            We Build Amazing <br />
            <span className="text-yellow-300">Web Experiences</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Two passionate freelance developers creating modern, responsive, and user-friendly websites that drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-white text-primary hover:bg-gray-100 transition-colors duration-300 px-8 py-3 rounded-lg font-semibold"
            >
              View Our Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors duration-300 px-8 py-3 rounded-lg font-semibold"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
