import "../styles/Gallery.css";
import pic4 from '../assets/pic4.JPG';
function Gallery() {
  return (
    <div  className="Gallery-main">
      <h1 id="gallery">
        <b id="fisrt-word">G</b>alle<b id="last-word">ry</b>
      </h1>

      <div className="gallary-main">
        <img src={pic4} alt="gallary-pic" id="gallery-first"/>
        {/* <div id="firstPic"> </div> */}
        <img src={pic4} alt="gallary-pic" />
        <img src={pic4} alt="gallary-pic" />
        <img src={pic4} alt="gallary-pic" />
        <img src={pic4} alt="gallary-pic" />
        <img src={pic4} alt="gallary-pic" id="gallery-last"/>
        {/* <div id="lastPic"> </div> */}
      </div>
    </div>
  );
}
export default Gallery;
