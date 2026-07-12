
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      className="hero-bg min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      id="hero"
    >
      {/* Glowing Cursor Light */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(182, 139, 255, 0.15), transparent 40%)`
        }}
      />
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center w-full relative z-10">
        <div className="mb-2">
          <span className="font-label-mono text-primary bg-primary/10 rounded-full backdrop-blur-md border border-primary/20 text-sm px-5 py-2 tracking-[0.2em]">
            Hello, I'm
          </span>
        </div>
        <h1 className="font-display-lg text-display-lg md:text-[120px] text-on-surface mb-4 tracking-tighter leading-none drop-shadow-2xl">
          ADARSH MASKE
        </h1>
        <p className="font-label-mono text-label-mono tracking-widest text-primary mb-10 bg-black/40 inline-block px-4 py-1 backdrop-blur-sm">
          JAVA &amp; SPRING BOOT DEVELOPER
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-2 mb-8 leading-relaxed">
          Computer Science student specialized in Java, Spring Boot, and AWS. I build scalable backend architectures, secure authentication systems, and cloud-deployed applications, with a solid foundation in React for full-stack integration.
        </p>
        <div className="mt-12 flex gap-6 flex-wrap justify-center">
          <a
            href="#work"
            className="social-glow-btn flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary font-label-mono text-label-mono uppercase tracking-wider px-8 py-3.5 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-primary/20 hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined">work</span>
            View Projects
          </a>
          <a
            href="https://github.com/adarshmaske4224"
            target="_blank"
            rel="noopener noreferrer"
            className="social-glow-btn flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary font-label-mono text-label-mono uppercase tracking-wider px-8 py-3.5 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-primary/20 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
          <a
            href="/adarshmaskecv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="social-glow-btn flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary font-label-mono text-label-mono uppercase tracking-wider px-8 py-3.5 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-primary/20 hover:scale-105 active:scale-95"
          >
            <span className="material-symbols-outlined"></span>
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/adarshmaske4224/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-glow-btn flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary font-label-mono text-label-mono uppercase tracking-wider px-8 py-3.5 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-primary/20 hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Email Address */}
        <div className="mt-16">
          <a
            href="mailto:adarshmaske2005@gmail.com"
            className="font-label-mono text-secondary hover:text-primary transition-colors flex items-center justify-center gap-2.5 text-base tracking-wider"
          >
            <span className="material-symbols-outlined text-xl">mail</span>
            adarshmaske2005@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
