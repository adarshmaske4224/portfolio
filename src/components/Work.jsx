const projects = [
  {
    id: 'krishi-drishti',
    title: 'Krishi Drishti',
    subtitle: 'National Level Project Presentation',
    description:
      'Krishi Drishti is a Smart Farming Assistance System designed to empower Indian farmers with AI-powered agricultural insights and digital farming tools. Built using a Spring Boot (Java 17) backend and a React frontend, the platform provides features like crop management assistance, pest detection, market price tracking, and access to government schemes through a localized farmer-friendly interface with Marathi language support.',
    tags: ['Spring Boot', 'Spring AI', 'Spring Security', 'Java 17', 'React', 'MySQL', 'REST APIs', 'AWS'],
    icon: 'eco',
    codeLink: '#',
    demoLink: '#',
  },
  {
    id: 'smart-complaint',
    title: 'Smart Complaint Analyzer',
    subtitle: '1st Rank — BNCOE Hackathon',
    description:
      'Built a smart complaint management system with role-based access for students and administrators. Students can raise complaints with issue descriptions and image uploads, while administrators manage and resolve complaints based on priority levels such as High, Medium, and Low.',
    tags: ['Spring Boot', 'React', 'MySQL', 'JWT', 'REST APIs'],
    icon: 'admin_panel_settings',
    codeLink: '#',
    demoLink: '#',
  },
  {
    id: 'mg-fitness',
    title: 'MG Fitness',
    subtitle: 'Fitness Website',
    description:
      'Developed and deployed a responsive fitness website using React and Netlify, featuring smooth modern animations powered by GSAP for an interactive user experience.',
    tags: ['React', 'GSAP', 'Netlify', 'JavaScript', 'CSS'],
    icon: 'fitness_center',
    codeLink: '#',
    demoLink: 'https://mg-fit.netlify.app/',
  },
]

const Work = () => {
  return (
    <section className="py-section-gap px-6 bg-surface" id="work">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="h-[1px] w-12 bg-primary/30"></div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface text-center">My Work</h2>
          <div className="h-[1px] w-12 bg-primary/30"></div>
        </div>
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row gap-10 mb-12 items-center bg-[#121214] border border-white/5 p-8 md:p-10 rounded-2xl transition-all hover:border-white/10 hover:shadow-2xl hover:shadow-primary/5">
            <div className="w-full md:w-2/3 order-2 md:order-1 flex flex-col items-start">
              <h2 className="font-display-lg text-3xl md:text-5xl text-on-surface mb-2 leading-tight">
                <span className="font-bold">{project.title}</span>
              </h2>
              {project.subtitle && (
                <span className="block font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-lg md:text-xl mb-4">
                  {project.subtitle}
                </span>
              )}
              <p className="text-on-surface-variant text-body-lg max-w-[65ch] mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-[#a882ff]/10 text-[#a882ff] font-label-mono px-3 py-1.5 rounded-md text-[0.85rem] border border-[#a882ff]/20">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center justify-center bg-primary text-on-primary px-6 py-2.5 rounded-lg hover:bg-primary-fixed-dim hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 font-bold uppercase text-sm tracking-wide"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/3 order-1 md:order-2 flex items-center justify-center p-12 bg-black/20 rounded-xl border border-white/5 aspect-square md:aspect-auto md:h-full min-h-[250px]">
              <span className="material-symbols-outlined text-[120px] text-primary/40 drop-shadow-lg">
                {project.icon}
              </span>
            </div>
          </div>
        ))}
        {/* Filter */}
        {/* Bento Grid */}
      </div>
    </section>
  )
}

export default Work
