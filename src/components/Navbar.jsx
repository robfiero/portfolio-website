import signature from '../assets/signature.png'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <img src={signature} alt="Rob Fiero" className="logo" />
      </div>
    </header>
  )
}
