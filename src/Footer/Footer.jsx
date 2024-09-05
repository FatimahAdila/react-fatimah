import './Footer.css'
import Logo_flip from './Logo_flip.png'

const Footer = () => {
    return(
      <div className='Footer'>
        <img src={Logo_flip} alt="" className='LogoBawah'/>
        <div className='Footer_1'>
            <h3>Tentang Flip</h3>
            <a href="">Blog</a>
            <a href="">Promo</a>
            <a href="">Komunitas</a>
            <a href="">Bantuan</a>
        </div>
        <div className='Footer_2'>
            <h3>Hubungi Flip</h3>
            <h5>Layanan Pengaduan Konsumen Flip</h5>
            <a href="">+62 21 - 320967</a>
            <h5>Email</h5>
            <a href="">Helo@flip.id</a>
        </div>
      </div>
    )
  }
  
  export default Footer