import './Navbar.css'
import Logo_flip from './Logo_flip.png'

const Navbar = () => {
  return(
    <div className="header">
        <img src={Logo_flip} alt="" className='logo'/>

        <div className="navbar">
            <a href="/">Transfer Uang</a>
            <a href="/">Top Up & Tagihan</a>
            <a href="/">Lainnya</a>
        </div>
    </div>

  )
}

export default Navbar