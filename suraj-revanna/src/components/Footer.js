import "../styles/Footer.css";
function Footer() {
  return (
    <section>
      <div className="footer-main">
        <div className="footer-left">
          <p>Dr.Suraj Revanna</p>
        </div>
        <div className="footer-center">
          <ul className="center-list">
            <li>Copyright © 2022 Suraj Revanna</li>
            <li> All Rights Reserved.</li>
            <li>Terms and Conditions | Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <ul className="right-list">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Footer;
