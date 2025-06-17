import { cn } from "@/lib/utils"
import { Menu, X, Moon, Sun, Download } from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}, 
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("#hero")
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        // Scroll detection
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
            
            // Active section detection
            const sections = navItems.map(item => document.querySelector(item.href));
            sections.forEach(section => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section.id);
                    }
                }
            });
        }

        // Theme detection
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
        
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light");
            setDarkMode(false);
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark");
            setDarkMode(true);
        }
    }

    const scrollToSection = (e, href) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }

    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/95 backdrop-blur-md shadow-md border-b border-border/30" : "py-5"
            )}  
        >
            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center group" 
                    href="#hero"
                    onClick={(e) => scrollToSection(e, "#hero")}
                >
                    <div className="relative">
                        <span className="relative"> 
                            <span className="text-glow text-foreground group-hover:text-primary transition-colors">ZZ</span>
                        </span>
                        <span className="absolute inset-0 bg-primary/10 rounded-full w-10 h-10 -z-0 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    </div>
                    <span className="ml-2 hidden sm:inline">Zikri Zulfa</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className={cn(
                                "text-foreground/80 hover:text-primary transition-colors duration-300 relative",
                                activeSection === item.href.replace('#', '') && "text-primary font-medium"
                            )}
                            onClick={(e) => scrollToSection(e, item.href)}
                        >
                            {item.name}
                            {activeSection === item.href.replace('#', '') && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                            )}
                        </a>
                    ))}
                </div>

                {/* Right-side controls */}
                <div className="flex items-center gap-4">
                    <button 
                        onClick={toggleTheme}
                        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors"
                        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    
                    <a 
                        href="/path/to/resume.pdf" 
                        download
                        className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                    >
                        <Download size={16} />
                        Resume
                    </a>
                    
                    <button 
                        onClick={() => setIsMenuOpen((prev) => !prev)} 
                        className="md:hidden p-2 text-foreground z-50 relative"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    > 
                        {isMenuOpen 
                        ? <X size={24} className="transition-transform duration-300 rotate-90"/> 
                        : <Menu size={24} className="transition-transform duration-300"/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen 
                        ? "opacity-100 pointer-events-auto translate-y-0" 
                        : "opacity-0 pointer-events-none -translate-y-4"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl text-center">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className={cn(
                                    "text-foreground/80 hover:text-primary transition-colors duration-300 py-2 px-6 rounded-lg",
                                    activeSection === item.href.replace('#', '') && "text-primary bg-primary/10 font-medium"
                                )}
                                onClick={(e) => scrollToSection(e, item.href)}
                            >
                                {item.name}
                            </a>
                        ))}
                        
                        <div className="flex justify-center gap-4 mt-8">
                            <button 
                                onClick={toggleTheme}
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                            >
                                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                            </button>
                            
                            <a 
                                href="/path/to/resume.pdf" 
                                download
                                className="flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                <Download size={20} />
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}