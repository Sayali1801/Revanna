import "../styles/Press.css";
import InitiativesPhoto from "../assets/InitiativesPhoto.JPG";
function Press() {
  return (
    <div className="press-main">
      <h1>
        <b id="first-letter">N</b>ew<b id="last-word">s</b>
      </h1>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.agna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </p>
      <div className="img-main">
        <a href="https://www.youtube.com/" target="_blank">
          <img src={InitiativesPhoto} alt="news-1" className="news-1" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={InitiativesPhoto} alt="news-1" className="news-2" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={InitiativesPhoto} alt="news-1" className="news-3" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={InitiativesPhoto} alt="news-1" className="news-4" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={InitiativesPhoto} alt="news-1" className="news-5" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={InitiativesPhoto} alt="news-1" className="news-6" />
        </a>
      </div>
      <div>
      {/* <img src={halfCircle} alt="bacground-img" className="background-img"/> */}

      </div>
    </div>
  );
}
export default Press;
