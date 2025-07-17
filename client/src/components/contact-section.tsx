import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema } from "@shared/schema";
import { Mail, Clock, Handshake, Send } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 gradient-text drop-shadow-sm">Get In Touch</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Card className="shadow-lg bg-white/90 backdrop-blur-sm neon-border">
            <CardContent className="p-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      {...form.register("name")}
                      placeholder="John Doe"
                      className="w-full"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      placeholder="john@example.com"
                      className="w-full"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    {...form.register("subject")}
                    placeholder="Web Development Project"
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    {...form.register("message")}
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none"
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="bg-primary hover:bg-accent hover:scale-105 transition-all duration-300 text-white font-semibold py-3 px-8 rounded-lg pulse-glow"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-neutral">hello@webdevduo.com</p>
                  </div>
                  <div>
                    <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-neutral">Within 24 hours</p>
                  </div>
                  <div>
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Handshake className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Free Consultation</h4>
                    <p className="text-neutral">30-minute discovery call</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
