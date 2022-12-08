import "../styles/Home.css";
import Circleslines from "../assets/Circleslines.png";
import homePoster from "../assets/homePoster.png";
import Half_Circle from "../assets/Half_Circle.png";
import About from "../components/About";
import Press from "../components/Press";
import Gallery from "../components/Gallery";
import Initiatives from "../components/Initiatives";
import GetTouch from '../components/GetTouch';
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <div>
        <div className="home-main">
          <div className="home-left">
            <img src={Circleslines} alt="background-img-left" />
          </div>
          <div className="home-center">
            <img
              src="https://images.pexels.com/photos/11535003/pexels-photo-11535003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="background"
            />
          </div>
          <div className="home-right">
            <img src={Half_Circle} alt="background-img-left" />
          </div>
        </div>
        <div className="home-front-main">
          <h6 id="meet-word"> MEET</h6>
          <h1>
            Dr. Suraj <br />
            Revanna
          </h1>
          <p>MLC Hassan District</p>
        </div>
        <div className="home-main-img">
          <img src={homePoster} alt="Revanna's pic" />
        </div>
      </div>
      <About />
      <Press />
      <Gallery />

      <Initiatives />
      {/* <Touch /> */}
      <GetTouch/>
<div>        <Footer />
</div>      
    </>
  );
}
export default Home;
