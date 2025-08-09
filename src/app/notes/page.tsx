import Link from "next/link";
import { ArrowLeft, Calendar, Clock, FileText, Terminal } from "lucide-react";

const notes = [
  {
    title: "Building a Modern Personal Website with Next.js",
    excerpt: "A comprehensive guide on how I built this personal website using Next.js 15, TypeScript, and Tailwind CSS. Learn about the architecture, design decisions, and deployment strategy.",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "building-modern-personal-website",
    featured: true
  },
  {
    title: "Understanding React Server Components",
    excerpt: "Deep dive into React Server Components, their benefits, and how they're changing the way we build React applications. Includes practical examples and best practices.",
    date: "2024-01-10",
    readTime: "12 min read",
    slug: "understanding-react-server-components",
    featured: false
  },
  {
    title: "TypeScript Best Practices for 2024",
    excerpt: "Essential TypeScript patterns and practices that every developer should know. From basic types to advanced generics and utility types.",
    date: "2024-01-05",
    readTime: "10 min read",
    slug: "typescript-best-practices-2024",
    featured: false
  },
  {
    title: "Optimizing Performance in Next.js Applications",
    excerpt: "Learn how to optimize your Next.js applications for better performance, including image optimization, code splitting, and caching strategies.",
    date: "2023-12-28",
    readTime: "15 min read",
    slug: "optimizing-nextjs-performance",
    featured: false
  },
  {
    title: "The Future of Web Development: What's Next?",
    excerpt: "Exploring emerging trends in web development, from AI-powered tools to new frameworks and the evolution of the web platform.",
    date: "2023-12-20",
    readTime: "6 min read",
    slug: "future-of-web-development",
    featured: false
  }
];

export default function Notes() {
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
              <Link href="/notes" className="text-cyan-400 font-mono">
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
            <span className="text-cyan-400">NOTES</span>
            <span className="text-purple-300">.txt</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl font-mono">
            <span className="text-cyan-400">//</span> Thoughts, tutorials, and insights about web development, 
            technology, and the things I learn along the way.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {notes.filter(note => note.featured).map((note) => (
            <div key={note.slug} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-cyan-400/30 mb-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
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
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-mono">
                  {note.title}
                </h2>
                
                <p className="text-slate-300 mb-6 leading-relaxed font-mono">
                  {note.excerpt}
                </p>
                
                <Link 
                  href={`/notes/${note.slug}`}
                  className="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-mono font-semibold hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <FileText className="w-5 h-5" />
                  Read Article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 font-mono">
            &lt;All_Articles&gt;
          </h2>
          
          <div className="grid gap-8">
            {notes.map((note) => (
              <article 
                key={note.slug}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02]"
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

      {/* Newsletter Signup */}
      <section className="py-16 px-6 bg-slate-800/30 backdrop-blur-sm border-t border-b border-cyan-400/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4 font-mono">
            &lt;Stay_Updated&gt;
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto font-mono">
            <span className="text-cyan-400">//</span> Get notified when I publish new articles about web development, 
            technology, and the latest industry trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-cyan-400/30 rounded-lg bg-slate-800/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent font-mono"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-mono font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
              Subscribe
            </button>
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