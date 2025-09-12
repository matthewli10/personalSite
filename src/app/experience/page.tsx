"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Building, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    company: "Advanced Micro Devices (AMD)",
    companySlug: "amd",
    position: "Software Engineering Intern",
    location: "Austin, TX",
    duration: "Jun 2025 - Present",
    description: "Working on software automation for CPU and GPU failure analysis",
    technologies: ["AWS EC2", "Python", "MongoDB", "Snowflake", "Shell Scripting"],
    featured: true,
    logo: "/amd-logo.png"
  },
  {
    company: "Tesla",
    companySlug: "tesla",
    position: "Software Engineering Intern",
    location: "Fremont, CA",
    duration: "Jan 2025 - Jun 2025",
    description: "Developed software optimization and data pipelines for finished vehicles and carrier routing",
    technologies: ["Python", "Linear Programming", "MySQL", "Apache Airflow", "SQL"],
    featured: true,
    logo: "/tesla-logo.png"
  },
  {
    company: "Genentech",
    companySlug: "genentech",
    position: "Data Engineer Intern",
    location: "South San Francisco, CA",
    duration: "Jun 2024 - Sep 2024",
    description: "Built large-scale data pipelines for data products and internal AI chatbot using RAG",
    technologies: ["Python", "PySpark", "SQL", "Spark SQL", "Snowflake", "AWS Glue", "AWS Lambda", "AWS S3", "AWS Redshift", "AWS Athena", "Retrieval-Augmented Generation (RAG)"],
    featured: false,
    logo: "/genentech-logo.png"
  }
];

export default function Experience() {
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
              <Link href="/experience" className="text-cyan-400 font-mono">
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
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-mono py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  [About]
                </Link>
                <Link 
                  href="/experience" 
                  className="text-cyan-400 font-mono py-2"
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
            <span className="text-cyan-400">EXPERIENCE</span>
            <span className="text-purple-300">.log</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-mono">
            <span className="text-cyan-400">{'//'}</span> My professional journey and work experience across various companies and industries.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 md:p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02] relative ${
                  exp.featured ? 'ring-2 ring-cyan-400/30 shadow-lg shadow-cyan-500/25' : ''
                }`}
              >
                {exp.featured && (
                  <span className="inline-block bg-cyan-400/20 text-cyan-400 text-sm font-mono px-3 py-1 rounded border border-cyan-400/30 mb-4">
                    FEATURED
                  </span>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono flex items-center gap-2">
                      <Building className="w-5 h-5 text-cyan-400" />
                      {exp.company}
                    </h3>
                    <p className="text-xl text-cyan-400 font-mono mb-2">
                      {exp.position}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right text-slate-400 font-mono">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                    
                    {/* Company Logo - Right Side */}
                    <div className="w-12 h-12 relative">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6 leading-relaxed font-mono">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-800/50 text-cyan-400 rounded border border-cyan-400/30 text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                

                {/* Read More Button */}
                <div className="mt-6">
                  <Link 
                    href={`/experience/${exp.companySlug}`}
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group font-mono text-sm"
                  >
                    <span className="group-hover:underline">Read More</span>
                    <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                  </Link>
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