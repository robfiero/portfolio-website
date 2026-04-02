import overview from '../assets/overview.png'
import creative from '../assets/creative.png'
import ghost from '../assets/ghost.png'
import flatrock from '../assets/flatrock.png'

const cards = [
  {
    image: overview,
    title: "TODAY'S OVERVIEW",
    text:
      <span>I designed and built Today’s Overview as a full-stack engineering project focused on modern development patterns and real-time data systems. It brings together news, weather, markets, and local events in a single dashboard using an event-driven architecture, live updates, and AWS deployment.  Check out my other projects on <a href="https://github.com/robfiero?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>!</span>,
    button: 'TRY IT OUT',
    link: 'https://todaysoverview.robfiero.net',
    fit: 'cover',
  },
  {
    image: creative,
    title: 'CREATIVE',
    text:
      'As a creative side project, I have been reimagining photographs from my collection in artistic styles that I enjoy. Please check out some of my work, and check back as I add more to the collection.',
    button: 'VIEW MY CREATIVE WORKS',
    link: 'https://sites.google.com/view/robfierocreative/home',
    fit: 'cover',
  },
  {
    image: ghost,
    title: 'GHOST TRAIN TRAIL RACE',
    text:
      'Ghost Train is a fundraising trail race that benefits the Conservation Commissions of Brookline and Milford, NH. The event includes five races, draws more than 700 participants each October, and has raised over $350,000 since its inception. I’ve been proud to serve as Race Director since 2022 and love the race and the community around it.',
    button: 'LEARN MORE',
    link: 'https://sites.google.com/site/ghosttrainrailtrailrace/',
    fit: 'contain',
  },
  {
    image: flatrock,
    title: 'FLAT ROCK TRAIL RACE',
    text:
      'Flat Rock Trail Race is a fundraising trail race that benefits the Humane Society for Greater Nashua, an organization I’ve supported through volunteering and fundraising since 2009. I launched the race in Dunstable, MA in 2025 and am excited to see how it grows.',
    button: 'LEARN MORE',
    link: 'https://sites.google.com/view/flatrocktrailrace/home',
    fit: 'contain',
  },
]

function ProjectCard({ image, title, text, button, link, fit }) {
  const cardContent = (
    <div className="card-content">
      <div className="card-image-wrap">
        <img src={image} alt={title} className={`card-image ${fit === 'contain' ? 'contain' : 'cover'}`} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="card-action">
        <span className="button-like">{button}</span>
      </div>
    </div>
  )

  return link && link !== '#' ? (
    <a className="card" href={link} target="_blank" rel="noreferrer">
      {cardContent}
    </a>
  ) : (
    <div className="card">{cardContent}</div>
  )
}

export default function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <h2>Recent Projects</h2>
        <p className="subtitle">A selection of technical, creative, and community work.</p>

        <div className="grid">
          {cards.map((card) => (
            <ProjectCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
