import signature from '../assets/signature.png'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <img src={signature} alt="Rob Fiero" className="logo" />
      </div>
    </header>
  )
}
