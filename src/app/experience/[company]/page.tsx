import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin, Building, Github, Linkedin, Mail } from "lucide-react";

// This would typically come from a database or CMS
const getExperienceByCompany = (companySlug: string) => {
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
      logo: "/amd-logo.png",
      detailedContent: `
        <div style="text-align: center; padding: 4rem 2rem;">
          <h3 style="color: #06b6d4; margin-bottom: 1rem; font-size: 1.5rem;">Coming Soon</h3>
          <p style="color: #94a3b8; font-size: 1.1rem;">Detailed experience page is under construction. Check back soon!</p>
        </div>
      `
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
      logo: "/tesla-logo.png",
      detailedContent: `
        <div style="text-align: center; padding: 4rem 2rem;">
          <h3 style="color: #06b6d4; margin-bottom: 1rem; font-size: 1.5rem;">Coming Soon</h3>
          <p style="color: #94a3b8; font-size: 1.1rem;">Detailed experience page is under construction. Check back soon!</p>
        </div>
      `
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
      logo: "/genentech-logo.png",
      detailedContent: `
        <div class="space-y-8">
          <div class="bg-slate-700/30 rounded-lg p-6 border border-cyan-400/20">
            <h3 class="text-xl font-bold text-cyan-400 mb-4 font-mono">Data Pipeline Development & Integration</h3>
            <div class="space-y-4 text-slate-200">
              <div>
                <h4 class="text-lg font-semibold text-white mb-2">Snowflake → AWS S3 Data Movement</h4>
                <ul class="list-disc list-inside space-y-2 text-sm leading-relaxed">
                  <li>Built AWS Glue jobs using PySpark and Spark SQL to extract data from Snowflake, transform it into required schemas, and load into Amazon S3</li>
                  <li>Implemented CSV-to-Parquet conversions for more efficient querying and storage</li>
                  <li>Automated ingestion processes, reducing manual steps and improving pipeline reliability</li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-2">ETL Process Implementation</h4>
                <ul class="list-disc list-inside space-y-2 text-sm leading-relaxed">
                  <li>Applied ETL concepts — extracting raw SAP/Snowflake data, transforming it (column parsing, splitting, and formatting), and loading into target systems</li>
                  <li>Worked with data ingestion flows for ValueTrak billing and other IRIS-related data products</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-slate-700/30 rounded-lg p-6 border border-cyan-400/20">
            <h3 class="text-xl font-bold text-cyan-400 mb-4 font-mono">Retrieval-Augmented Generation (RAG) System</h3>
            <div class="space-y-4 text-slate-200">
              <div>
                <h4 class="text-lg font-semibold text-white mb-2">AspireGPT Application Development</h4>
                <ul class="list-disc list-inside space-y-2 text-sm leading-relaxed">
                  <li>Engineered a ChatGPT-like application that engaged SAP cloud data and Azure OpenAI to assist 100+ interns with updated SAP data flow and mapping requirements</li>
                  <li>Designed and implemented the RAG architecture to retrieve relevant SAP documentation and system information, then generate contextual responses using Azure OpenAI</li>
                  <li>Enhanced intern efficiency by providing instant access to complex SAP data systems, reducing time spent searching through documentation and improving understanding of new data flows</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-slate-700/30 rounded-lg p-6 border border-cyan-400/20">
            <h3 class="text-xl font-bold text-cyan-400 mb-4 font-mono">SQL Development & Data Modeling</h3>
            <div class="space-y-4 text-slate-200">
              <div>
                <h4 class="text-lg font-semibold text-white mb-2">Snowflake SQL Optimization</h4>
                <ul class="list-disc list-inside space-y-2 text-sm leading-relaxed">
                  <li>Wrote and optimized complex SQL statements to extract, join, and transform data from multiple Snowflake schemas</li>
                  <li>Designed queries to map raw SAP data to ValueTrak Billing Document specifications, handling null values and field mismatches</li>
                  <li>Verified query outputs with Oracle SQL developers to ensure consistency between systems</li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-2">Data Warehouse Architecture</h4>
                <ul class="list-disc list-inside space-y-2 text-sm leading-relaxed">
                  <li>Applied fact & dimension table concepts for analytics, differentiating between transactional facts and descriptive dimensions</li>
                  <li>Used SQL string manipulation (SPLIT_PART, DATE_FORMAT, LPAD, etc.) to create business-ready columns such as calendar months/weeks</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-slate-700/30 rounded-lg p-6 border border-cyan-400/20">
            <h3 class="text-xl font-bold text-cyan-400 mb-4 font-mono">Machine Learning & System Integration</h3>
            <div class="space-y-4 text-slate-200">
              <div>
                <h4 class="text-lg font-semibold text-white mb-2">Dataiku ML Pipeline Training</h4>
                <ul class="list-disc list-inside space-y-2 text-sm leading-relaxed">
                  <li>Built a predictive model to detect fraudulent job postings, starting with comprehensive data cleansing</li>
                  <li>Applied Python scripts to handle missing values, generate derived columns, and prepare datasets for modeling</li>
                  <li>Implemented feature engineering techniques including column splitting, text standardization, and data validation</li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-white mb-2">Enterprise System Integration</h4>
                <ul class="list-disc list-inside space-y-2 text-sm leading-relaxed">
                  <li>Collaborated with IT leads to compile metadata for partner systems and mapped interfaces for ASPIRE&apos;s SAP S/4HANA migration</li>
                  <li>Attended Palantir Foundry trainings to understand enterprise data integration capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ];
  return experiences.find(exp => exp.companySlug === companySlug);
};

export default async function ExperienceDetail({ params }: { params: Promise<{ company: string }> }) {
  const { company } = await params;
  const experience = getExperienceByCompany(company);
  
  if (!experience) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="pt-32 pb-16 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6 font-mono">Experience Not Found</h1>
            <p className="text-slate-300 mb-8 font-mono">The experience you&apos;re looking for doesn&apos;t exist.</p>
            <Link 
              href="/experience"
              className="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-lg font-mono font-semibold hover:bg-cyan-600 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Experience
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
          </div>
        </div>
      </nav>

      {/* Experience Detail Content */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            href="/experience" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors mb-8 group font-mono"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            &lt; Back to experience
          </Link>
          
          <article className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-400/30 relative">
            {/* Experience Header */}
            <header className="mb-8">
              {experience.featured && (
                <span className="inline-block bg-cyan-400/20 text-cyan-400 text-sm font-mono px-3 py-1 rounded border border-cyan-400/30 mb-4">
                  FEATURED
                </span>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono flex items-center gap-2">
                    <Building className="w-6 h-6 text-cyan-400" />
                    {experience.company}
                  </h1>
                  <p className="text-xl text-cyan-400 font-mono mb-2">
                    {experience.position}
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right text-slate-400 font-mono">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>
                  
                  {/* Company Logo - Right Side */}
                  <div className="w-16 h-16 relative">
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-slate-300 font-mono mb-6">
                {experience.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-slate-800/50 text-cyan-400 rounded border border-cyan-400/30 text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
            </header>
            
            {/* Detailed Content */}
            <div 
              className="prose prose-invert prose-cyan max-w-none font-mono"
              dangerouslySetInnerHTML={{ __html: experience.detailedContent }}
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