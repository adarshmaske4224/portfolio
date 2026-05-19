const projects = [
  {
    id: 'krishi-drishti',
    title: 'Krishi Drishti',
    subtitle: 'National Level Project Presentation',
    description:
      'Krishi Drishti is a Smart Farming Assistance System designed to empower Indian farmers with AI-powered agricultural insights and digital farming tools. Built using a Spring Boot (Java 17) backend and a React frontend, the platform provides features like crop management assistance, pest detection, market price tracking, and access to government schemes through a localized farmer-friendly interface with Marathi language support.',
    tags: ['Spring Boot', 'Spring AI', 'Spring Security', 'Java 17', 'React', 'MySQL', 'REST APIs', 'AWS'],
    link: '#',
  },
  {
    id: 'smart-complaint',
    title: 'Smart Complaint Analyzer',
    subtitle: '1st Rank — BNCOE Hackathon',
    description:
      'Built a smart complaint management system with role-based access for students and administrators. Students can raise complaints with issue descriptions and image uploads, while administrators manage and resolve complaints based on priority levels such as High, Medium, and Low.',
    tags: ['Spring Boot', 'React', 'MySQL', 'JWT', 'REST APIs'],
    link: '#',
  },
  {
    id: 'mg-fitness',
    title: 'MG Fitness',
    subtitle: 'Fitness Website',
    description:
      'Developed and deployed a responsive fitness website using React and Netlify, featuring smooth modern animations powered by GSAP for an interactive user experience.',
    tags: ['React', 'GSAP', 'Netlify', 'JavaScript', 'CSS'],
    link: '#',
  },
]

const Work = () => {
  return (
    <section className="py-section-gap px-6 bg-surface" id="work">
      <div className="max-w-[1200px] mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row gap-16 mb-20 items-end">
            <div className="md:w-3/4">
              <h2 className="font-display-lg text-4xl md:text-6xl text-on-surface mb-6 leading-tight">
                <span className="font-bold">{project.title}</span>
                <span className="block font-normal text-on-surface-variant text-body-lg mt-2">
                  {project.subtitle}
                </span>
              </h2>
              <p className="text-on-surface-variant text-body-lg">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-surface-elevated text-secondary font-label-mono text-xs px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col relative group items-end justify-center md:w-1/4">
              <div className="text-center">
                <a
                  className="inline-block bg-primary text-on-primary px-8 py-3 rounded hover:bg-primary-fixed-dim neon-glow transition-all duration-300 font-bold uppercase text-sm tracking-tighter"
                  href={"https://mg-fit.netlify.app/"}
                >
                  View Project
                </a>
              </div>
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
