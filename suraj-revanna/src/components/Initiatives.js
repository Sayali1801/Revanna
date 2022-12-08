// import "../styles/Initiatives.css";
import '../styles/Initiatives2.css';
import InitiativesPhoto from "../assets/InitiativesPhoto.JPG";
import Circleslines from '../assets/Circleslines.png';
import Half_Circle from '../assets/Half_Circle.png'
function Initiatives() {
  return (
    <div className="Initiatives-main">
      <h1 className="title">
        <b id="first-word">In</b>itiativ<b id="last-word">es</b>
      </h1>
      <div className="Initives-top">
        <img src={InitiativesPhoto} alt="top-carasoul" id="left-carasoul" />
        <p id="top-text">
        <div>
          <img src={Half_Circle} alt="circle-background" className='background-img-top'/>
        </div>
          <h1>Lorem ipsum</h1>
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
        {/* <img src={Half_Circle} alt="background" id="left-background"/> */}
      </div>
       <div className="Initives-bottom">
        <img src={InitiativesPhoto} alt="bottom-carasoul" id="right-carasoul" />
        <p id='bottom-text'>
          <h1>Lorem ipsum</h1>
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
        <img src={Circleslines} alt="background" id="right-background"/>

      </div> 
    </div>
  );
}
export default Initiatives;
