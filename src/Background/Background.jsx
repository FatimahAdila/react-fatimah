import './Background.css'
import flip from './flip.webp'
import phone from './rear-phone.png'
import phonee from './front-phone.png'


const Background = () => {
  return(
    <div className='Background'>
        <div className='background-putih'>
          <div className='textAwal'>
          <h3>Bebas transaksi, ke siapa saja.</h3>
          <p>Transfer beda bank, top up e-wallet, kirim uang ke luar negeri,</p>
          <p>dan beli produk digital. Semua lebih terjangkau!</p>
          <img src={flip} alt="" className='flip'/>
          </div>
        </div>

        <div className='background-orange'>
          <div className='text'>
          <h3>Transfer gratis ke 100+ bank</h3>
          <h6>Transfer bebas biaya admin ke lebih dari 100 bank yang ada di Indonesia!</h6>
          <button className='btn1'>Selengkapnya</button>
        <div className='img'>
          <img src={phone} alt="" className='phone' />
          <img src={phonee} alt="" className='phonee'/>

          </div>
          </div>
  
        </div>
    </div>
  

  )
}

export default Background