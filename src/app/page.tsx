import Link from "next/link";
import { ArrowRight, Github, Linkedin, Code, Cpu, Zap } from "lucide-react";

export default function Home() {
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-cyan-400/30 px-4 py-2 rounded-full text-sm font-mono text-cyan-400 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              STATUS: ONLINE
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                I'm Matthew
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-mono">
              Software engineer & CS student at UCSB. 
              <span className="text-cyan-300"> Leveraging data and technology to solve real-world challenges.</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-8">
            <Link 
              href="/experience"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-mono font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 border border-cyan-400/30"
            >
              <Code className="w-5 h-5" />
              <span>VIEW_EXPERIENCE();</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-slate-800/30 backdrop-blur-sm border-t border-b border-cyan-400/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-mono">
            &lt;About_Me&gt;
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6 font-mono">
                <span className="text-cyan-400">// 4th year CS major at UC Santa Barbara ('26)</span>
                <br />
                Focused on backend, data platforms, and AI systems. 
                Shipped optimization and infrastructure at AMD, Tesla, and Genentech.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6 font-mono">
                <span className="text-purple-400">// When not coding...</span>
                <br />
                Keeping up with tech trends, following stock market, exploring restaurants, or playing sports.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                  SKILLS.exe
                </h3>
                <div className="space-y-4">
                  {/* Languages */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded border border-blue-400/30 text-sm font-mono">Python</span>
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded border border-blue-400/30 text-sm font-mono">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded border border-blue-400/30 text-sm font-mono">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded border border-blue-400/30 text-sm font-mono">C++</span>
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded border border-blue-400/30 text-sm font-mono">Java</span>
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded border border-blue-400/30 text-sm font-mono">CSS</span>
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded border border-blue-400/30 text-sm font-mono">HTML</span>
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded border border-blue-400/30 text-sm font-mono">SQL</span>
                  </div>

                  {/* Frameworks & Libraries */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded border border-green-400/30 text-sm font-mono">React</span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded border border-green-400/30 text-sm font-mono">Next.js</span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded border border-green-400/30 text-sm font-mono">FastAPI</span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded border border-green-400/30 text-sm font-mono">Node.js</span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded border border-green-400/30 text-sm font-mono">Express</span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded border border-green-400/30 text-sm font-mono">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded border border-green-400/30 text-sm font-mono">Spark</span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded border border-green-400/30 text-sm font-mono">Airflow</span>


                  </div>

                  {/* Databases */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-red-400/20 text-red-400 rounded border border-red-400/30 text-sm font-mono">PostgreSQL</span>
                    <span className="px-3 py-1 bg-red-400/20 text-red-400 rounded border border-red-400/30 text-sm font-mono">MongoDB</span>
                    <span className="px-3 py-1 bg-red-400/20 text-red-400 rounded border border-red-400/30 text-sm font-mono">Firebase</span>
                    <span className="px-3 py-1 bg-red-400/20 text-red-400 rounded border border-red-400/30 text-sm font-mono">MySQL</span>
                  </div>

                  {/* Cloud & DevOps */}
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded border border-purple-400/30 text-sm font-mono">AWS</span>
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded border border-purple-400/30 text-sm font-mono">Azure</span>
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded border border-purple-400/30 text-sm font-mono">Snowflake</span>
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded border border-purple-400/30 text-sm font-mono">Docker</span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8 font-mono">
            &lt;Connect_With_Me&gt;
          </h2>
          <div className="flex justify-center items-center gap-8">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-mono">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/matthewli15" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-mono">LinkedIn</span>
            </a>
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
