import backendIcon from '../assets/backend-icon.png'
import BackgroundCube from './BackgroundCube'


const expertiseCards = [
  {
    id: 'backend',
    icon: 'image',
    iconSrc: backendIcon,
    title: (
      <>
        <span className="text-primary">Backend</span>
        <br />
        Engineering
      </>
    ),
    subtitle: 'Spring Boot, Java',
    description:
      'Building scalable backend applications, REST APIs, authentication systems, and production-ready services using Spring Boot and Java.',
    tags: ['Spring Boot', 'Java', 'REST APIs', 'MySQL', 'JWT'],
  },
  {
    id: 'security',
    icon: 'security',
    title: (
      <>
        <span className="text-primary">Security &amp;</span>
        <br />
        AI
      </>
    ),
    subtitle: 'Spring Security, Spring AI',
    description:
      'Implementing authentication and authorization using Spring Security and exploring AI integration in backend applications using Spring AI.',
    tags: ['Spring Security', 'JWT', 'OAuth2', 'Spring AI'],
  },
  {
    id: 'cloud',
    icon: 'cloud_done',
    title: (
      <>
        <span className="text-primary">Cloud &amp;</span>
        <br />
        Deployment
      </>
    ),
    subtitle: 'AWS, Docker',
    description:
      'Familiar with essential AWS services like EC2, IAM, S3, and RDS for application deployment, storage, and cloud-based backend development.',
    tags: ['AWS', 'EC2', 'IAM', 'S3', 'RDS', 'Docker'],
  },
]

const Expertise = () => {
  return (
    <section className="py-section-gap px-6 bg-[#131313] relative z-10 overflow-hidden" id="expertise">
      {/* Left Cube */}
      <BackgroundCube className="top-[20%] -left-[60px] md:-left-[100px] w-[120px] h-[120px] md:w-[180px] md:h-[180px] opacity-30 md:opacity-40" />
      {/* Right Cube */}
      <BackgroundCube className="bottom-[20%] -right-[60px] md:-right-[100px] w-[120px] h-[120px] md:w-[180px] md:h-[180px] opacity-30 md:opacity-40" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="h-[1px] w-12 bg-primary/30"></div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface text-center">My Expertise</h2>
          <div className="h-[1px] w-12 bg-primary/30"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseCards.map((card) => (
            <div
              key={card.id}
              className="bg-surface-card border border-border-subtle p-card-padding neon-glow transition-all duration-300"
            >
              {card.iconSrc ? (
                <img
                  src={card.iconSrc}
                  alt="Backend Engineering Icon"
                  className="w-12 h-12 mb-6 block object-contain"
                />
              ) : (
                <span className="material-symbols-outlined text-primary mb-6 text-4xl">{card.icon}</span>
              )}
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{card.title}</h3>
              <p className="font-label-mono text-xs text-secondary mb-2 uppercase tracking-wider">{card.subtitle}</p>
              <p className="text-on-surface-variant mb-6">{card.description}</p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span key={tag} className="bg-surface-elevated text-secondary font-label-mono text-xs px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
