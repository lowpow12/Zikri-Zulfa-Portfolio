import { Instagram, Linkedin, Mail, MapIcon, Phone, Send, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Mengambil environment variables dari Vite
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const userId = import.meta.env.VITE_EMAILJS_USER_ID;
            
            // Validasi environment variables
            if (!serviceId || !templateId || !userId) {
                throw new Error("EmailJS configuration is missing");
            }
            
            // Kirim email menggunakan EmailJS
            const response = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    reply_to: formData.email,
                    message: formData.message
                },
                userId
            );
            
            // Tampilkan notifikasi sukses
            toast({
                title: "Message Sent!",
                description: "Thank you for your message. I'll get back to you soon.",
                variant: "success"
            });
            
            // Reset form
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            // Tampilkan notifikasi error
            toast({
                title: "Failed to Send",
                description: error.message || "There was an error sending your message. Please try again later.",
                variant: "destructive"
            });
            console.error("Email sending error:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    const contactItems = [
        {
            icon: <Mail size={24} className="h-6 w-6 text-primary" />,
            title: "Email",
            content: (
                <a 
                    href="https://mail.google.com/mail/u/0/?fs=1&to=zikrizulfa.z2@gmail.com&tf=cm" 
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                >
                    zikrizulfa.z2@gmail.com
                </a>
            )
        },
        {
            icon: <Phone size={24} className="h-6 w-6 text-primary" />,
            title: "Phone",
            content: (
                <a 
                    href="tel:+628954621345" 
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                >
                    +62 89667730784
                </a>
            )
        },
        {
            icon: <MapIcon size={24} className="h-6 w-6 text-primary" />,
            title: "Location",
            content: (
                <p className="text-muted-foreground">North Jakarta, Indonesia</p>
            )
        }
    ];

    const socialLinks = [
        {
            icon: <Linkedin size={20} />,
            url: "#",
            label: "LinkedIn"
        },
        {
            icon: <Instagram size={20} />,
            url: "#",
            label: "Instagram"
        },
        {
            icon: <Github size={20} />,
            url: "#",
            label: "GitHub"
        }
    ];

    return(
        <section 
            id="contact" 
            className="py-24 px-4 relative bg-gradient-to-br from-secondary/10 to-background"
        >
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Get In <span className="text-primary">Touch</span>
                    </motion.h2>
                    <motion.p 
                        className="text-center text-muted-foreground max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Feel free to reach out. I'm open to discussing new opportunities, collaborations, or just a friendly chat.
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <div className="w-8 h-0.5 bg-primary"></div>
                            Contact Information
                        </h3>
                        
                        <div className="space-y-6">
                            {contactItems.map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex items-start space-x-4 p-4 hover:bg-muted/30 rounded-lg transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                >
                                    <div className="p-3 rounded-full bg-primary/10 min-w-[48px] flex justify-center">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium mb-1">{item.title}</h4>
                                        <div className="text-base">{item.content}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4 flex items-center gap-3">
                                <div className="w-8 h-0.5 bg-primary"></div>
                                Connect With Me
                            </h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a 
                                        key={index}
                                        href={social.url} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-muted hover:bg-primary/10 transition-colors group"
                                        whileHover={{ y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        title={social.label}
                                    >
                                        <div className="group-hover:text-primary transition-colors">
                                            {social.icon}
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div 
                        className="bg-card p-8 rounded-xl shadow-lg border border-border/20"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <div className="w-8 h-0.5 bg-primary"></div>
                            Send a Message
                        </h3>
                        
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                    placeholder="Zikri Zulfa..."
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                                    Your Email
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                                    placeholder="example@gmail.com"
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                                    Your Message
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                                    placeholder="Your message..."
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <motion.button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2 py-4 rounded-lg",
                                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"
                                )}
                                whileHover={isSubmitting ? {} : { scale: 1.02 }}
                                whileTap={isSubmitting ? {} : { scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16}/>
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-primary/10 blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl -z-10"></div>
        </section>
    )
}