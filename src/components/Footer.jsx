import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <h3>Rob Fiero</h3>
          <p className="footer-role">Senior Software Engineering Manager</p>
          <p className="footer-role">Cloud Platforms • Distributed Systems • UI Development</p>
          <p className="footer-summary">
            I build reliable, scalable systems and intuitive user experiences, combining cloud architecture, modern UI development, and a focus on quality, observability, and long-term maintainability.
          </p>
        </div>

        <div className="footer-col">
          <h3>CONNECT</h3>
          <a href="mailto:rob_fiero@yahoo.com?subject=Introduction" className="footer-link">
            <FaEnvelope /> <span>Email</span>
          </a>
          <a href="https://github.com/robfiero" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaGithub /> <span>GitHub</span>
          </a>
          <a href="https://github.com/robfiero?tab=repositories" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaGithub /> <span>GitHub Projects</span>
          </a>
          <a href="https://www.linkedin.com/in/robert-fiero/" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="copyright">© 2026 Rob Fiero • Built with React</div>
    </footer>
  )
}
