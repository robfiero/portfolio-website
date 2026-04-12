import headshot from '../assets/me.jpeg';

const About = () => {
  return (
    <section className="about">
      <div className="about-content container">
        <h2>About Me</h2>
        <div className="about-body">
          <div className="about-photo">
            <img src={headshot} alt="Portrait of Robert Fiero" />
          </div>
          <div className="about-text">
            <p>
              I'm a Senior Software Engineering Manager with over 25 years of experience building and leading teams that deliver reliable, scalable systems. My work spans cloud platforms, distributed systems, and enterprise infrastructure, with a strong focus on engineering quality, observability, and long-term maintainability.
            </p>
            <p>
              A significant part of my work has been focused on user-facing applications and UI development, where I've worked closely with product and design to build intuitive, accessible, and well-structured interfaces that connect complex systems to real users.
            </p>
            <p>
              I am passionate about inclusivity and creating welcoming environments where engineers feel empowered to contribute and do their best work. I focus on building reliable, maintainable systems designed to perform effectively in real-world conditions.
            </p>
            <p>
              I'm currently exploring new opportunities where I can help teams grow and build meaningful, well-designed systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
