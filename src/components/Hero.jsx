import hero from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero-overlay">
        <div className="container hero-content">
          <h1>ROB FIERO</h1>
          <p className="hero-tagline">Building Systems, Community, and Creative Work</p>

          <div className="hero-sub">
            <div>
              Software Engineering Manager | UI Development | Java | Cloud Platforms | Distributed Systems
            </div>
            <div>
              Team And Community Builder | Runner | Ultramarathoner | Race Director | Charity Fundraiser | Photographer |
              Creative Artwork | Volunteer
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
