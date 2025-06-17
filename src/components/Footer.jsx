import { ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border pt-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-sm text-muted-foreground mb-2">
            &copy; {new Date().getFullYear()} Zikri Zulfa. All rights reserved. Built with React.js and Tailwind CSS.
          </h3>
          <h4 className="text-sm text-gray-500">
            Computer Engineering Student, Universitas Indonesia
          </h4>
        </div>

        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            {/* Ganti dengan ikon GitHub atau media sosial lainnya */}
            <div className="bg-muted-foreground/10 p-2 rounded-full hover:bg-primary/10 transition-colors">
              <svg className="w-5 h-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">...</svg>
            </div>
          </a>
          {/* Tambahkan lebih banyak media sosial */}
        </div>
      </div>

      {/* Tombol scroll to top */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 animate-bounce"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  )
}