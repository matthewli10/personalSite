"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, FileText, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const notes = [
    {
    title: "what i learned from my internships",
    excerpt: "key takeaways and lessons learned from my past and current internships",
    date: "2025-08-9",
    readTime: "3 min read",
    slug: "what-i-learned-from-my-internships",
    featured: false
    },
    {
    title: "favorite songs",
    excerpt: "a collection of my favorite songs, current and past",
    date: "2025-03-15",
    readTime: "1 min read",
    slug: "favorite-songs",
    featured: false
    }
];

export default function Notes() {
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
              <Link href="/projects" className="text-slate-300 hover:text-cyan-400 transition-colors font-mono">
                [Projects]
              </Link>
              <Link href="/notes" className="text-cyan-400 font-mono">
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
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-mono py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  [Projects]
                </Link>
                <Link 
                  href="/notes" 
                  className="text-cyan-400 font-mono py-2"
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
            <span className="text-cyan-400">NOTES</span>
            <span className="text-purple-300">.txt</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-mono">
            <span className="text-cyan-400">{'//'}</span> Personal thoughts and random musings 
            about the things I enjoy and discover. More to come...
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-8 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {notes.filter(note => note.featured).map((note) => (
            <div key={note.slug} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 md:p-8 border border-cyan-400/30 mb-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <span className="bg-cyan-400/20 text-cyan-400 text-sm font-mono px-3 py-1 rounded border border-cyan-400/30">
                    FEATURED
                  </span>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-mono">{new Date(note.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-mono">{note.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 font-mono">
                  {note.title}
                </h2>
                
                <p className="text-slate-300 mb-6 leading-relaxed font-mono">
                  {note.excerpt}
                </p>
                
                <Link 
                  href={`/notes/${note.slug}`}
                  className="inline-flex items-center gap-2 bg-cyan-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-mono font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 text-sm md:text-base"
                >
                  <FileText className="w-4 h-4 md:w-5 md:h-5" />
                  Read Article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 font-mono">
            &lt;All_Articles&gt;
          </h2>
          
          <div className="grid gap-8">
            {notes.map((note) => (
              <article 
                key={note.slug}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 md:p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-4 text-sm text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(note.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{note.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-mono">
                  {note.title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed font-mono">
                  {note.excerpt}
                </p>
                
                <Link 
                  href={`/notes/${note.slug}`}
                  className="text-cyan-400 hover:text-cyan-300 font-mono transition-colors group"
                >
                  <span className="group-hover:underline">Read more →</span>
                </Link>
              </article>
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