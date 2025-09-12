"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "FinAgent-AI",
    description: "FinAgent-AI is a full-stack mobile application that leverages artificial intelligence to analyze SEC 10-Q earnings reports and provide real-time investment insights. Built with React Native and FastAPI, the platform combines AI technology with financial data to help users make informed investment decisions.",
    technologies: ["Python", "TypeScript","React Native", "FastAPI", "Firebase Auth", "PostgreSQL", "OpenAI API", "Docker"],
    github: "https://github.com/matthewli10/FinAgent-AI",
    live: null,
    featured: true
  },
  {
    title: "Personal Website",
    description: "A personal website built with Next.js, TypeScript, and Tailwind CSS. Features my past and current experienecs and projects. ",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/matthewli10/personalSite",
    live: null,
    featured: false
  },
  {
    title: "GreenGrade",
    description: "GreenGrade is a Chrome extension that evaluates the sustainability of any product online. It uses OpenAI’s API to analyze a product’s ingredients and materials, assigns a sustainability grade, explains its reasoning, and suggests eco-friendly alternatives. Developed during SBHacks 2024.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "OpenAI API"],
    github: "https://github.com/matthewli10/GreenGrade",
    live: null,
    featured: false
  }
];

export default function Projects() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-cyan-400/20 z-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg md:text-xl font-bold text-cyan-400 font-mono tracking-wider">
              &lt;Matthew_Li/&gt;
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono">
                [About]
              </Link>
              <Link href="/experience" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono">
                [Experience]
              </Link>
              <Link href="/projects" className="text-cyan-400 font-mono">
                [Projects]
              </Link>
              <Link href="/notes" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono">
                [Notes]
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-cyan-400/20">
              <div className="flex flex-col space-y-3 pt-4">
                <Link 
                  href="/about" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-mono py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  [About]
                </Link>
                <Link 
                  href="/experience" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-mono py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  [Experience]
                </Link>
                <Link 
                  href="/projects" 
                  className="text-cyan-400 font-mono py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  [Projects]
                </Link>
                <Link 
                  href="/notes" 
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-mono py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  [Notes]
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors mb-8 group font-mono"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            &lt; Back to home
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-mono">
            <span className="text-cyan-400">PROJECTS</span>
            <span className="text-purple-300">.exe</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-mono">
            <span className="text-cyan-400">{'//'}</span> Here are some projects I&apos;ve worked on. 
            Each one represents a learning experience and a step forward in my development journey. More to come...
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 md:p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02] ${
                  project.featured ? 'ring-2 ring-cyan-400/30 shadow-lg shadow-cyan-500/25' : ''
                }`}
              >
                {project.featured && (
                  <span className="inline-block bg-cyan-400/20 text-cyan-400 text-sm font-mono px-3 py-1 rounded border border-cyan-400/30 mb-4">
                    FEATURED
                  </span>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-3 font-mono">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed font-mono">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-800/50 text-cyan-400 rounded border border-cyan-400/30 text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group font-mono"
                  >
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:underline">View Code</span>
                  </a>
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group font-mono"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:underline">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8 font-mono">
            &lt;Connect_With_Me&gt;
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
            <a
              href="mailto:matthewli.rt@gmail.com"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-slate-800/50 px-6 py-3 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-mono">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/matthewli15" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-slate-800/50 px-6 py-3 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-mono">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/matthewli10" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-slate-800/50 px-6 py-3 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-mono">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 border-t border-cyan-400/20 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-slate-400 font-mono">
          <p>&copy; 2025 Matthew Li. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
  