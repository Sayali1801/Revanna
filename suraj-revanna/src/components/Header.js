import { Link } from "react-router-dom";
import "../styles/Header.css";
function Header() {
  return (
    <div className="header-main">
      <div className="header-left">
        <p>Dr.Suraj Revanna</p>
      </div>
      <div className="header-center">
        <ul className="menu-list">
        <Link to="/">
          <li>Home </li>
          </Link>
          <li>/</li>
          <Link to='/About'>

          <li>About </li>
          </Link>
          <li>/</li>
          <Link to='/Press'>

          <li>Press </li>
          </Link>
          <li>/</li>
          <Link to='/Gallery'>

          <li>Gallery </li>
          </Link>
          <li>/</li>
          <Link to='/Initiatives'>

          <li>Initiatives </li>
          </Link>
        </ul>
      </div>
      <div className="header-right">
      {/* <Link to='/Touch'>          */}
      <Link to='/Touch'>
      <button>Get In Touch</button>
</Link>
        <select className="langauge-drop">
          <option>English</option>
          <option>Kanadda</option>
        </select>
      </div>
    </div>
  );
}
export default Header;
