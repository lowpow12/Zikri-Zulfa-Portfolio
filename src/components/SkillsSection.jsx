import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 75, category: "frontend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "JavaScript", level: 70, category: "frontend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", level: 70, category: "frontend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Vite", level: 70, category: "frontend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },

    // Backend
    { name: "Node.js", level: 80, category: "backend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", level: 70, category: "backend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", level: 70, category: "backend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", level: 70, category: "backend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },

    // Tools
    { name: "Git/GitHub", level: 85, category: "tools", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Docker", level: 70, category: "tools", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "VS Code", level: 95, category: "tools", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },

    // Cyber Security
    { name: "NMap", level: 85, category: "cyber security", image: "nmap.jpg" },
    { name: "OWASP ZAP", level: 80, category: "cyber security", image: "zap.png" },
    { name: "Kali", level: 85, category: "cyber security", image: "kali.png" },
    { name: "DirBuster", level: 80, category: "cyber security", image: "dirbuster-logo.svg" },
]

const categories = ["all", "frontend", "backend", "tools", "cyber security"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [filteredSkills, setFilteredSkills] = useState([])
    const [isAnimating, setIsAnimating] = useState(false)

    // Update filtered skills when category changes
    useEffect(() => {
        setIsAnimating(true)
        const newSkills = skills.filter(
            skill => activeCategory === "all" || skill.category === activeCategory
        )
        
        // Small delay to allow animation to reset
        setTimeout(() => {
            setFilteredSkills(newSkills)
            setIsAnimating(false)
        }, 50)
    }, [activeCategory])

    // Animations
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return(
        <section
            id="skills"
            className="py-24 px-4 relative bg-gradient-to-b from-secondary/10 to-background"
        >
            <div className="container mx-auto max-w-5xl">
                <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My <span className="text-primary"> Skills</span>
                </motion.h2>
                
                <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {categories.map((category, key) => (
                        <motion.button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                ? "bg-primary text-primary-foreground shadow-md" 
                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>
                
                <AnimatePresence mode="wait">
                    {!isAnimating && (
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            variants={container}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            key={activeCategory} // Key based on category to force re-render
                        >
                            {filteredSkills.map((skill, key) => (
                                <motion.div 
                                    key={key} 
                                    className="bg-card p-6 rounded-xl shadow-sm card-hover group border border-border/20"
                                    variants={item}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-muted p-2 rounded-lg flex items-center justify-center">
                                            <img
                                                src={skill.image}
                                                alt={skill.name}
                                                className="w-8 h-8 object-contain" 
                                            />
                                        </div>
                                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-sm text-muted-foreground">Proficiency</span>
                                        <span className="text-sm font-medium text-primary">{skill.level}%</span>
                                    </div>
                                    
                                    <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                                        <motion.div 
                                            className="bg-primary bg-background-black h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: skill.level + "%" }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {filteredSkills.length === 0 && !isAnimating && (
                    <motion.div 
                        className="text-center py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <p className="text-muted-foreground">No skills found in this category</p>
                    </motion.div>
                )}
            </div>
        </section>
    )
}