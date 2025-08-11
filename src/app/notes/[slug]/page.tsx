import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Github, Linkedin, Mail } from "lucide-react";

// This would typically come from a database or CMS
const getNoteBySlug = (slug: string) => {
  const notes = [
    {
      title: "favorite songs",
      excerpt: "a collection of my favorite songs, current and past",
      content: `
        <p>So Into You - Tamia</p>
        <p>Self Control - Frank Ocean</p>
        <p>Yellow - Coldplay</p>
        <p>Brazil - Declan McKenna</p>
        <p>Over My Dead Body - Drake</p>
        <p>Until I Found You - Stephen Sanchez</p>
   
        <hr style="margin: 2rem 0; border: none; border-top: 1px solid #475569;">
        <p style="font-size: 0.875rem; color: #94a3b8; margin: 0;">Last updated: August 10, 2025</p>
      `,
      date: "2025-03-15",
      readTime: "1 min read",
      slug: "favorite-songs",
      featured: false
    },
    {
      title: "what i learned from my internships",
      excerpt: "key takeaways and lessons learned",
      content: `
        <p style="margin-bottom: 0.8rem;">over the past few years, i&apos;ve had the opportunity to intern at AMD, Tesla, and Genentech. each experience
        was unique, not just tehcnically, but also in the work culture, expectations, and ways teams operated.</p>

        <p style="margin-bottom: 0.8rem;">one of the biggest lessons i learned is that soft skills are just as important as technical skills. 
        clear communication, collaboration, and adaptability. writing clean clode or designing scalable systems
        will always be core to the job, but the ability to adapt to a team&apos;s culture can determine how quickly you ramp up and how effectively
        you deliver.</p>

        <p style="margin-bottom: 0.8rem;">at both AMD and Tesla, the environment was fast-paced, iterative, and sometimes chaotic. i often
        had to figure things out with minimal guidance. adapting meant changing now only how i worked, but how i communicated.</p>

        <p style="margin-bottom: 0.8rem;">that leads into another key takeaway—you have to keep reaching out to move your project forward.
        waiting for information to come to you can stall progress. i learned that persitence (without being pushy) is essential. often, 
        the difference between being blocked for a week versus an afternoon was a single message or meeting.</p>

        <p style="margin-bottom: 0.8rem;">i also learned the importance of context switching and prioritization. in my experiences, 
        i&apos;ve juggled multiple sub-projects, each with different stakeholders and deadlines. being able to keep long-term goals in focus, was
        a skill i had to acvitely develop.</p>

        <p style="margin-bottom: 0.8rem;">finally, building relationships matter. taking time to connect with teammates, fellow interns-whether 
        through technical discussions, casual chats, or team events-built trust and made collaboration smoother. People are more willing 
        to help and share knowledge when you&apos;ve built a genuine connection, and these relationships often extend beyond the internship, expanding 
        your professional network and opening doors to future opportunities.</p>

        <p style="margin-bottom: 0.8rem;">every company will have its own culture, pace, and processes. the commond thread is that 
        success depends not just on what you can build, but on how you navigate the people, systems, and environment around you.</p>

        <hr style="margin: 2rem 0; border: none; border-top: 1px solid #475569;">
        <p style="font-size: 0.875rem; color: #94a3b8; margin: 0;">Last updated: August 11, 2025</p>
      `,
      date: "2025-08-12",
      readTime: "3 min read",
      slug: "what-i-learned-from-my-internships",
      featured: true
    }
  ];
  
  return notes.find(note => note.slug === slug);
};

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  
  if (!note) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="pt-32 pb-16 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6 font-mono">Note Not Found</h1>
            <p className="text-slate-300 mb-8 font-mono">The note you&apos;re looking for doesn&apos;t exist.</p>
            <Link 
              href="/notes"
              className="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-mono font-semibold hover:bg-cyan-600 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Notes
            </Link>
          </div>
        </div>
      </div>
    );
  }

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

      {/* Article Content */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            href="/notes" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors mb-8 group font-mono"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            &lt; Back to notes
          </Link>
          
          <article className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/30">
            {/* Article Header */}
            <header className="mb-8">
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
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                {note.title}
              </h1>
              
              <p className="text-xl text-slate-300 font-mono">
                {note.excerpt}
              </p>
            </header>
            
            {/* Article Content */}
            <div 
              className="prose prose-invert prose-cyan max-w-none font-mono"
              dangerouslySetInnerHTML={{ __html: note.content }}
            />
          </article>
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
              href="mailto:matthewli.rt@gmail.com"
              className="group flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-mono">Email</span>
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
            <a 
              href="https://github.com/matthewli10" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-mono">GitHub</span>
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