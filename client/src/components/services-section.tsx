import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Monitor, 
  Smartphone, 
  ShoppingCart, 
  Search, 
  Settings, 
  Palette 
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies. From simple landing pages to complex web applications.",
    icon: Monitor,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Responsive Design",
    description: "Mobile-first designs that look and work perfectly on all devices. Your website will shine on desktop, tablet, and mobile.",
    icon: Smartphone,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "E-Commerce",
    description: "Complete online store solutions with payment integration, inventory management, and admin dashboards.",
    icon: ShoppingCart,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "SEO Optimization",
    description: "Search engine optimization to help your website rank higher and attract more organic traffic from Google.",
    icon: Search,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing website maintenance, updates, and technical support to keep your site running smoothly and securely.",
    icon: Settings,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that prioritizes usability and creates delightful experiences for your visitors.",
    icon: Palette,
    color: "bg-purple-100 text-purple-600",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive web development solutions to bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 * index }}
            >
              <Card className="card-hover h-full bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${service.color} floating-animation`} style={{ animationDelay: `${index * 0.3}s` }}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
