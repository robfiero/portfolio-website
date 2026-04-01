import overview from '../assets/overview.png'
import creative from '../assets/creative.png'
import ghost from '../assets/ghost.png'
import flatrock from '../assets/flatrock.png'

const cards = [
  {
    image: overview,
    title: "TODAY'S OVERVIEW",
    text:
      "I designed and built Today’s Overview as a full-stack engineering project to explore modern development patterns and real-time data systems. It aggregates news, weather, markets, and local events into a single dashboard using an event-driven architecture, live updates, and AWS deployment.",
    button: 'TRY IT OUT',
    link: 'https://todaysoverview.robfiero.net',
    fit: 'cover',
  },
  {
    image: creative,
    title: 'CREATIVE',
    text:
      'As a side hobby I have been taking some of the artistic photos from my collection and re-imagining them in artistic styles that I enjoy. Please check out some of my work, and check back as I add more art to the collection.',
    button: 'VIEW MY CREATIVE WORKS',
    link: 'https://sites.google.com/view/robfierocreative/home',
    fit: 'cover',
  },
  {
    image: ghost,
    title: 'GHOST TRAIN TRAIL RACE',
    text:
      'Ghost Train is a fundraising trail race that benefits the Conservation Commissions of both Brookline and Milford, NH. There are 5 races totalling over 700 participants each October, and has raised over $350,000 since its inception! I’ve been blessed to be the Race Director since 2022 and love the race and the community.',
    button: 'LEARN MORE',
    link: 'https://sites.google.com/site/ghosttrainrailtrailrace/',
    fit: 'contain',
  },
  {
    image: flatrock,
    title: 'FLAT ROCK TRAIL RACE',
    text:
      'Flat Rock Trail Race is a fundraising trail race that benefits the Humane Society for Greater Nashua, where I have volunteered with and fundraised for since 2009. I started this race in lovely Dunstable, MA in 2025 and I’m excited to see where it grows.',
    button: 'LEARN MORE',
    link: 'https://sites.google.com/view/flatrocktrailrace/home',
    fit: 'contain',
  },
]

function ProjectCard({ image, title, text, button, link, fit }) {
  const cardContent = (
    <>
      <div className="card-image-wrap">
        <img src={image} alt={title} className={`card-image ${fit === 'contain' ? 'contain' : 'cover'}`} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="button-like">{button}</span>
    </>
  )

  const cardClass = `card ${fit === 'contain' ? (title.includes('GHOST') ? 'card--ghost' : 'card--flat') : ''}`

  return link && link !== '#' ? (
    <a className={cardClass} href={link} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    <div className={cardClass}>{cardContent}</div>
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
