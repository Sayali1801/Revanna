import '../styles/About.css';
import about1 from '../assets/about1.jpg';
import gallaryPic from '../assets/gallaryPic.JPG';
import galleryPic2 from '../assets/galleryPic2.JPG';
import about2 from '../assets/about2.JPG';
function About(){
    return(
        <div className="about-main">
        <div className="about-text">
            <h1><b>A</b>bout Suraj Revan<b id="last-word">na</b></h1>
            <p>
            Talents sports academy, specialized in all games, helps in inducing,
          improvising and intelligently driving the passion towards game. With
          the involvement shown by students, participants and players, Talents
          sports academy transforms people to excel in their fields. Be it
          motivating a toddler towards sports or helping an elderly to get
          involved in sports, We at talent sports take the utmost care to bring
          out the best in people. We provide the best in class infrastructure,
          highly standardized guidelines and flexible timing for the courses we
          offer. We know this is passion for you and so we ensure your personal
          interests are respected by the sporting community across the city.

            </p>
        </div>
        <div className="about-img">
            <img src={gallaryPic} alt="front1" id="about1"
            />
            <img src={galleryPic2} alt="front2" id="about2"/>
            <div id='about3'></div>
        </div>
            
        </div>
    )
}
export default About;