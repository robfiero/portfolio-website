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
              SENIOR SOFTWARE ENGINEERING MANAGER | CLOUD PLATFORMS | DISTRIBUTED SYSTEMS |
              ENTERPRISE INFRASTRUCTURE
            </div>
            <div>FUNDRAISER | EVENT DIRECTOR | CREATIVE ARTWORK</div>
          </div>
        </div>
      </div>
    </section>
  )
}
