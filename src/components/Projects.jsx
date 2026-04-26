import { memo, useMemo, useState } from 'react'
import overview from '../assets/overview.png'
import creative from '../assets/creative.jpg'
import creativeWebsite from '../assets/creative-website.png'
import ghost from '../assets/ghost.png'
import flatrock from '../assets/flatrock.png'
import website from '../assets/website.png'
import raceperformance from '../assets/raceperformance.png'
import peopleproject from '../assets/peopleproject.png'

const CREATIVE_WEBSITE_REPOSITORY_URL = 'https://github.com/robfiero/creative-website' // TODO: Replace with the final repository URL.

const projects = [
  {
    id: 'todays-overview',
    title: "Today’s Overview",
    description: 'Full-stack dashboard for news, weather, markets, and events with real-time updates and AWS deployment.',
    image: overview,
    buttonLabel: 'TRY IT OUT',
    buttonHref: 'https://todaysoverview.robfiero.net',
    category: 'Engineering',
    status: 'Live',
    tags: ['Java', 'React', 'AWS', 'Full-Stack'],
    imageFit: 'contain',
  },
  {
    id: 'race-data-analysis',
    title: 'Race Analytics',
    description: 'Surface the data so race directors can understand their events clearly.',
    image: raceperformance,
    buttonLabel: 'TRY IT OUT',
    buttonHref: 'https://racestats.robfiero.net/',
    category: 'Engineering',
    status: 'Coming Soon',
    tags: ['Node.js', 'React', 'AWS', 'Analytics'],
    imageFit: 'contain',
  },
  {
    id: 'creative-website',
    title: 'Creative Website',
    description:
      'A metadata-driven React site for showcasing creative image collections, with content managed through structured YAML data.',
    image: creativeWebsite,
    buttonLabel: 'VIEW PROJECT',
    buttonHref: CREATIVE_WEBSITE_REPOSITORY_URL,
    category: 'Engineering',
    status: 'In Progress',
    tags: ['React', 'TypeScript', 'Metadata-Driven'],
    imageFit: 'cover',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern portfolio built for clarity, speed, and a clean presentation of work.',
    image: website,
    buttonLabel: 'VIEW PROJECT',
    buttonHref: 'https://github.com/robfiero/portfolio-website',
    category: 'Engineering',
    status: 'Live',
    tags: ['React', 'Frontend', 'UI', 'AWS'],
    imageFit: 'cover',
  },
  {
    id: 'people-service',
    title: 'People Service',
    description: 'Service that manages people records with persisted storage and a clean API surface.',
    image: peopleproject,
    buttonLabel: 'VIEW PROJECT',
    buttonHref: 'https://github.com/robfiero/project-people-file-persistence',
    category: 'Engineering',
    status: 'In Progress',
    tags: ['Java', 'Persistence', 'API', 'Backend'],
    imageFit: 'contain',
  },
  {
    id: 'reusable-cli-toolkit',
    title: 'Reusable CLI Toolkit',
    description: 'Reusable CLI tooling to streamline developer workflows and automate common tasks.',
    image: peopleproject,
    buttonLabel: 'VIEW PROJECT',
    buttonHref: 'https://github.com/robfiero/project-cli',
    category: 'Engineering',
    status: 'In Progress',
    tags: ['CLI', 'Java', 'Tooling', 'Developer Experience'],
    imageFit: 'contain',
  },
  {
    id: 'creative',
    title: 'Creative Works',
    description:
      'A personal portfolio of original photographs transformed into illustrated, artistic, and historically inspired interpretations.',
    image: creative,
    buttonLabel: 'EXPLORE MY ARTWORK',
    buttonHref: 'https://creative.robfiero.net/',
    category: 'Creative',
    status: 'Active',
    tags: ['Photography', 'Art'],
    imageFit: 'cover',
  },
  {
    id: 'ghost-train',
    title: 'Ghost Train Trail Race',
    description:
      'Fundraising trail race with five distances and 700+ runners each October.',
    image: ghost,
    buttonLabel: 'LEARN MORE',
    buttonHref: 'https://sites.google.com/site/ghosttrainrailtrailrace/',
    category: 'Community',
    status: 'Annual',
    tags: ['Fundraising', 'Race Director', 'Conservation'],
    imageFit: 'contain',
  },
  {
    id: 'flat-rock',
    title: 'Flat Rock Trail Race',
    description:
      'Fundraising trail race supporting the Humane Society for Greater Nashua.',
    image: flatrock,
    buttonLabel: 'LEARN MORE',
    buttonHref: 'https://sites.google.com/view/flatrocktrailrace/home',
    category: 'Community',
    status: 'Annual',
    tags: ['Fundraising', 'Race Director', 'Humane Society'],
    imageFit: 'contain',
  },
]

const ProjectCard = memo(function ProjectCard({ image, title, description, buttonLabel, buttonHref, imageFit, imageFrame, imagePosition, tags }) {
  const isDisabled = !buttonHref || buttonHref === '#'
  const cardContent = (
    <div className="card-content">
      <div className={`card-image-wrap${imageFrame ? ` ${imageFrame}` : ''}`}>
        <img
          src={image}
          alt={title}
          className={`card-image ${imageFit === 'contain' ? 'contain' : 'cover'}`}
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
          loading="lazy"
        />
      </div>
      <h3 className="card-title">{title}</h3>
      <div className="card-tags">
        {tags.map((tag) => (
          <span key={tag} className="card-tag">{tag}</span>
        ))}
      </div>
      <p>{description}</p>
      <div className="card-action">
        <span className={`button-like${isDisabled ? ' disabled' : ''}`}>{buttonLabel}</span>
      </div>
    </div>
  )

  return !isDisabled ? (
    <a className="card" href={buttonHref} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    <div className="card">{cardContent}</div>
  )
})

export default function Projects() {
  const filters = ['All', 'Engineering', 'Creative', 'Community']
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects
    }
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <section className="projects">
      <div className="container">
        <h2>Recent Projects</h2>
        <p className="subtitle">
          A selection of engineering, creative, and community projects. More coding projects are available on{' '}
          <a href="https://github.com/robfiero" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>

        <div className="project-filters" role="group" aria-label="Project categories">
          {filters.map((filter) => {
            const isActive = filter === activeFilter
            return (
              <button
                key={filter}
                type="button"
                className={`filter-button${isActive ? ' active' : ''}`}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
