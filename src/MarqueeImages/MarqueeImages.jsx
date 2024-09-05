import './MarqueeImages.css'
import img1 from './mandiri.jpg'; 
import img2 from './cn.png';
import img3 from './bsi.jpg';
import img4 from './bri.jpg';
import img5 from './bni.jpg';
import img6 from './bca.png';
import img7 from './danamon.jpg';
import img8 from './dbs.jpg';

const MarqueeImages = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <img src={img1} alt="Img 1" className="marquee-image" />
        <img src={img2} alt="Img 2" className="marquee-image" />
        <img src={img3} alt="Img 3" className="marquee-image" />
        <img src={img4} alt="Img 4" className="marquee-image" />
        <img src={img5} alt="Img 5" className="marquee-image" />
        <img src={img6} alt="Img 6" className="marquee-image" />
        <img src={img7} alt="Img 7" className="marquee-image" />
        <img src={img8} alt="Img 8" className="marquee-image" />
      </div>
    </div>
  );
};

export default MarqueeImages;