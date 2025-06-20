import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import AosWrapper from "@/components/AosWrapper";

export const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AosWrapper delay={0}>
                <AboutSection />
            </AosWrapper>

            <AosWrapper delay={100}>
                <SkillsSection />
            </AosWrapper>
            
            <AosWrapper delay={200}>
                <ProjectsSection /> 
            </AosWrapper>
            
            <AosWrapper delay={300}>
                <ContactSection />
            </AosWrapper>
        </main>

        {/* Footer */}
        <Footer />
    </div>
    );
};