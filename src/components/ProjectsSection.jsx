import { useState } from "react";
import { ArrowRight, ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nurture",
    description: "Mental Health Based Website to encourage mental awareness amongst high students.",
    image: "/projects/nurture1.png",
    images: [
      "/projects/nurture1.png",
      "/projects/nurture2.png",
      "/projects/nurture3.png"
    ],
    tags: ["React", "TailwindCSS", "Vite", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/verszz/Nurture",
    longDescription: "Nurture provides mental health resources specifically designed for high school students. The platform offers self-assessment tools, guided meditation sessions, stress management techniques, and connects students with licensed counselors through secure video sessions. All content is vetted by mental health professionals."
  },
  {
    id: 2,
    title: "Let's Do It",
    description: "To-Do List App with role-based access, enabling supervisors to track team tasks.",
    image: "/projects/letsdoit1.png",
    images: [
      "/projects/letsdoit2.png",
      "/projects/letsdoit1.png",
      "/projects/letsdoit3.png"
    ],
    tags: ["React", "MongoDB", "TailwindCSS", "Vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/verszz/Lets-Do-It/tree/main",
    longDescription: "A comprehensive To-Do list application designed for teams and organizations. Features include role-based access control (supervisor and employee roles), task assignment, progress tracking, and real-time updates. Supervisors can create tasks, assign them to employees, monitor progress across the team, and receive updates. Employees can manage their assigned tasks, update statuses, and collaborate effectively."
  },
  {
    id: 3,
    title: "Recipe Manager",
    description: "Simple yet minimalistic recipe manager to store your all cooking recipe.",
    image: "/projects/recipe1.png",
    images: [
      "/projects/recipe1.png",
      "/projects/recipe2.png",
      "/projects/recipe3.png"
    ],
    tags: ["React", "TailwindCSS", "Vite", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/verszz/Tutam9-RecipeManager",
    longDescription: "A clean, intuitive recipe management application that helps home cooks organize their favorite recipes. Features include ingredient scaling, meal planning, grocery list generation, and dietary filtering. The app supports rich text formatting for recipes and includes a built-in timer for cooking steps."
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset image index when opening a new project
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
    setFullscreenImage(null); // Close fullscreen when closing modal
  };
  
  const openFullscreenImage = (img, index) => {
    setFullscreenImage(img);
    setCurrentImageIndex(index);
  };
  
  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };
  
  const navigateImage = (direction) => {
    if (!selectedProject) return;
    
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % selectedProject.images.length 
      : (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
    
    setCurrentImageIndex(newIndex);
    setFullscreenImage(selectedProject.images[newIndex]);
  };
  
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              onClick={() => openProjectModal(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={`${project.id}-${tag}`} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" onClick={e => e.stopPropagation()}>
                      <ExternalLink size={20}/>
                    </a> */}
                    <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" onClick={e => e.stopPropagation()}>
                      <Github size={20}/>
                    </a>
                  </div>
                  <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors" onClick={(e) => {e.stopPropagation(); openProjectModal(project);}}>
                    View details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2" 
            href="https://github.com/lowpow12" 
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 flex justify-between items-center border-b border-border">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <button 
                onClick={closeProjectModal}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              {/* Image Gallery */}
              <div className={`grid gap-4 mb-6 ${
                selectedProject.images.length === 1 ? "grid-cols-1" :
                selectedProject.images.length === 2 ? "grid-cols-2" :
                "grid-cols-2 md:grid-cols-3"
              }`}>
                {selectedProject.images.map((img, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden cursor-pointer relative group"
                    onClick={() => openFullscreenImage(img, index)}
                  >
                    <img 
                      src={img} 
                      alt={`${selectedProject.title} ${index + 1}`} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">Click to enlarge</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Project Details */}
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span key={`${selectedProject.id}-${tag}`} className="px-3 py-1 text-sm font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between gap-4 border-t border-border pt-6">
                <div className="flex space-x-4">
                  <a 
                    href={selectedProject.demoUrl} 
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    target="_blank"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a 
                    href={selectedProject.githubUrl} 
                    className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
                    target="_blank"
                  >
                    <Github size={16} /> Source Code
                  </a>
                </div>
                <button 
                  onClick={closeProjectModal}
                  className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Fullscreen Image Viewer */}
      {fullscreenImage && selectedProject && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-xl z-[60] flex items-center justify-center p-30" onClick={closeFullscreenImage}>
          <button 
            onClick={closeFullscreenImage}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10"
          >
            <X size={32} />
          </button>
          
          {/* Navigation buttons */}
          {selectedProject.images.length > 1 && (
            <>
              <button 
                onClick={(e) => {e.stopPropagation(); navigateImage('prev');}}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={(e) => {e.stopPropagation(); navigateImage('next');}}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}
          
          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full z-10">
            {currentImageIndex + 1} / {selectedProject.images.length}
          </div>
          
          {/* Main image */}
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={fullscreenImage} 
              alt={`${selectedProject.title} fullscreen`} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}