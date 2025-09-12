"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, Linkedin, Mail, Menu, X, BookOpen } from "lucide-react";
import { useState } from "react";

export default function About() {
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
              <Link href="/about" className="text-cyan-400 font-mono">
                [About]
              </Link>
              <Link href="/experience" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono">
                [Experience]
              </Link>
              <Link href="/projects" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono">
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
                  className="text-cyan-400 font-mono py-2"
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
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-mono py-2"
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

      {/* About Content */}
      <section className="pt-32 pb-16 px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors mb-8 group font-mono"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            &lt; Back to home
          </Link>
          
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 font-mono max-w-3xl mx-auto">
                A deeper look into who I am and why I built this website.
              </p>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-cyan-400/30">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Photo Section */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden border-2 border-cyan-400/30">
                      <Image
                        src="/matthew-photo.jpg"
                        alt="Matthew Li"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                      <BookOpen className="w-6 h-6 text-cyan-400" />
                      My Story & This Website
                    </h2>
                    <div className="space-y-6 text-slate-300 font-mono leading-relaxed">
                  <p>
                    I&apos;m a fourth-year Computer Science student at UC Santa Barbara with a deep passion for leveraging data and technology to solve real-world challenges. My journey in tech began with a simple curiosity: I wanted to understand how things worked &quot;under the hood.&quot; That curiosity quickly grew into a drive to build, optimize, and innovate, and along the way I&apos;ve had the privilege of working at different companies in different industries.
                  </p>
                  <p>
                    Over the course of my internships, I&apos;ve learned to approach problems not only from a technical perspective, but also with an awareness of how the solutions we create impact people, systems, and businesses. At Genentech, I focused on data engineering. I designed pipelines to move SAP data into Snowflake, where downstream teams could analyze it for insights that directly improved operational efficiency. At Tesla, I applied optimization techniques and linear programming to reduce planning time by more than 70%, helping logistics for finished vehicles across factories. At AMD, I developed tools to automate failure-analysis processes for CPUs and GPUs in large-scale data centers, reducing manual effort and improving turnaround times. These experiences taught me that great engineering is not just about writing code—it&apos;s about building scalable, maintainable systems that solve pressing problems for real users.
                  </p>
                  <p>
                    This website is my digital home, a space where I share my journey, projects, and thoughts. It&apos;s not just a portfolio but it&apos;s a reflection of my experience and passion for software engineering. I went with Next.js and TypeScript because they just made sense for what I wanted: a site that loads quickly and code that I can trust to work the way I expect.
                  </p>
                  <p>
                    When shaping this site, I focused on three guiding voice principles: Professional, Clear, and Approachable. Professional means sharing my work and experiences with credibility, using precise language and highlighting the real impact of each project. Clear means writing in a simple and direct way, so anyone can understand what I build and why it matters without needing a technical background. Approachable means adding some personality, where I write more about what I&apos;m learning, experimenting with, or reflecting on. Together, these principles create a voice that feels consistent across the site: confident in what I&apos;ve done, easy to understand, and welcoming to anyone who wants to explore my work or ideas.
                  </p>
                  <p>
                    Outside of coding, I&apos;m passionate about exploring new restaurants, trying new hobbies, and staying active through sports. Playing soccer, in particular, has shaped how I approach challenges. It has taught me teamwork and the importance of adapting quickly to changing conditions. I carry those lessons into my work, whether I&apos;m debugging a challenging problem or collaborating with a team.
                  </p>
                  <p>
                    Looking ahead, I&apos;m excited about opportunities that allow me to merge my skills in software engineering, data systems, and AI with my curiosity about how technology solves real-world challenges.
                  </p>
                      <p>
                        Thank you for visiting my site. Feel free to explore my projects, experiences, and notes!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
