import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Building, Code, Cpu } from "lucide-react";

const experiences = [
  {
    company: "Advanced Micro Devices (AMD)",
    position: "Software Engineering Intern",
    location: "Santa Clara, CA",
    duration: "May 2024 - Aug 2024",
    description: "Developed and optimized performance-critical software for AMD's next-generation processors. Worked on low-level system programming and performance optimization for CPU architectures.",
    technologies: ["C++", "Python", "Assembly", "Linux", "Performance Optimization"],
    featured: true
  },
  {
    company: "Tesla",
    position: "Software Engineering Intern",
    location: "Fremont, CA",
    duration: "May 2023 - Aug 2023",
    description: "Contributed to Tesla's autonomous driving software stack. Implemented computer vision algorithms and worked on real-time data processing for vehicle safety systems.",
    technologies: ["Python", "C++", "Computer Vision", "Machine Learning", "ROS"],
    featured: true
  },
  {
    company: "Genentech",
    position: "Data Science Intern",
    location: "South San Francisco, CA",
    duration: "May 2022 - Aug 2022",
    description: "Developed data pipelines and machine learning models for drug discovery. Worked with large-scale genomic datasets and implemented statistical analysis tools.",
    technologies: ["Python", "R", "SQL", "Machine Learning", "Bioinformatics"],
    featured: false
  },
  {
    company: "UC Santa Barbara",
    position: "Research Assistant",
    location: "Santa Barbara, CA",
    duration: "Sep 2023 - Present",
    description: "Conducting research in distributed systems and cloud computing. Developing scalable architectures for data processing and implementing novel algorithms.",
    technologies: ["Java", "Python", "Docker", "Kubernetes", "Distributed Systems"],
    featured: false
  }
];

export default function Experience() {
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
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-cyan-400 font-mono tracking-wider">
              &lt;Matthew_Li/&gt;
            </Link>
            <div className="flex items-center space-x-6">
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
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors mb-8 group font-mono"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            &lt; Back to home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            <span className="text-cyan-400">EXPERIENCE</span>
            <span className="text-purple-300">.log</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-mono">
            <span className="text-cyan-400">//</span> My professional journey and work experience across various companies and technologies.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02] ${
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-16 px-6 bg-slate-800/30 backdrop-blur-sm border-t border-b border-cyan-400/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center font-mono">
            &lt;Technical_Skills&gt;
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/30">
              <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                Programming
              </h3>
              <div className="space-y-2 text-slate-300 font-mono text-sm">
                <div>• Python, C++, Java, JavaScript</div>
                <div>• TypeScript, Go, Rust</div>
                <div>• Assembly, SQL, R</div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/30">
              <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" />
                Technologies
              </h3>
              <div className="space-y-2 text-slate-300 font-mono text-sm">
                <div>• Docker, Kubernetes, AWS</div>
                <div>• React, Node.js, Next.js</div>
                <div>• Machine Learning, Computer Vision</div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-400/30">
              <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center gap-2">
                <Building className="w-5 h-5 text-green-400" />
                Domains
              </h3>
              <div className="space-y-2 text-slate-300 font-mono text-sm">
                <div>• Performance Optimization</div>
                <div>• Distributed Systems</div>
                <div>• Bioinformatics, Autonomous Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-cyan-400/20 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center text-slate-400 font-mono">
          <p>&copy; 2025 Matthew Li. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
} 