import { Briefcase, Code, User, Download } from "lucide-react"
import { motion } from "framer-motion"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About <span className="text-primary"> Me</span>
                </motion.h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold"> Passionate Web Developer & Cyber Security Enthusiast </h3>
                        <p className="text-muted-foreground"> 
                            I'm a web developer with a strong passion for creating interactive and responsive web applications. 
                            With experience in both frontend and backend technologies, I enjoy turning complex problems into elegant solutions.
                        </p>
                        <p className="text-muted-foreground"> 
                            My journey in cyber security has equipped me with a keen eye for vulnerabilities and a commitment to building secure applications. 
                            I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <motion.a 
                                href="#contact" 
                                className="px-6 py-3 cosmic-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>
                            <motion.a 
                                href="CV-Zikri Zulfa Azhim.pdf" 
                                download 
                                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={16} />
                                Download CV
                            </motion.a>
                        </div>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <motion.div 
                            className="gradient-border p-6 card-hover group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <Code className="h-6 w-6 text-primary group-hover:text-primary-dark"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development </h4>
                                    <p className="text-muted-foreground"> 
                                        Building modern, responsive, and user-friendly web applications using the latest technologies.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="gradient-border p-6 card-hover group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <User className="h-6 w-6 text-primary group-hover:text-primary-dark"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                                    <p className="text-muted-foreground"> 
                                        Crafting intuitive and engaging user experiences with a focus on usability and aesthetics.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="gradient-border p-6 card-hover group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                    <Briefcase className="h-6 w-6 text-primary group-hover:text-primary-dark"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project Management </h4>
                                    <p className="text-muted-foreground"> 
                                        Leading projects from conception to completion with agile methodologies and effective communication.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-10 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl -z-10"></div>
                <div className="absolute top-1/4 right-10 w-24 h-24 rounded-full bg-primary/10 blur-3xl -z-10"></div>
            </div>
        </section>
    )
}