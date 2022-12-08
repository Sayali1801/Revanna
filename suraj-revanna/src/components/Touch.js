// import "../styles/Touch.css";
import "../styles/touch2.css";
import background from "../assets/background.JPG";
import touch_poster from "../assets/touch-_poster.JPG";
import Circleslines from "../assets/Circleslines.png";
function Touch() {
  return (
    <section>
      <div className="touch-main">
        <img src={background} alt="background" id="background-img" />
        <h1 className="touch-heading">
          <b id="first-letter">G</b>et In Tou<b id="last-letter">ch</b>
        </h1>

        <div className="touch-div">
          <div className="form-div">
            <img src={touch_poster} alt="touch" className="touch-photo" />

            <form className="touch-form">
              <input type="text" placeholder="Hey,Tell us your name" />
              <br />
              <input type="text" placeholder="What's your Mail ID ?" />
              <br />
              <input type="text" placeholder="Your number?" />
              <br />
              <input type="text" placeholder="Message" />
              <br />
              <img src={Circleslines} alt="rings" className="ring-img" />

              <button className="submit-btn">
                Submit <b>→</b>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Touch;
