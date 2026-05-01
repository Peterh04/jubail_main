import "../styles/footer.css";
import FacebookIcon from "../assets/icons/facebook.svg?react";
import InstagramIcon from "../assets/icons/instagram.svg?react";
import LinkelnIcon from "../assets/icons/linkeln.svg?react";
import YoutubeIcon from "../assets/icons/youtube.svg?react";
import GoogleIcon from "../assets/icons/google.svg?react";
import TwitterIcon from "../assets/icons/twitter.svg?react";

export default function Footer() {
  return (
    <div className="footer" aria-label="footer">
      <div className="location_contacts" aria-label="location & contacts">
        <h2>Heaad Office</h2>
        <p>NairobI Ngara,</p>
        <p>5th Floor, </p>
        <p>P.O Box 12080-00100,</p>
        <p>Nairobi, Kenya</p>
        <p>info@jubailadvocates.com</p>
        <p>+254 0703-120120</p>
      </div>

      <div className="social-media" aria-label="social media">
        <a>
          {" "}
          <FacebookIcon className="icon" />
        </a>
        <a>
          <InstagramIcon className="icon" />
        </a>
        <a href="s">
          <LinkelnIcon className="icon" />
        </a>

        <a>
          <YoutubeIcon className="icon" />
        </a>
        <a href="">
          <GoogleIcon className="icon" />
        </a>
        <a href="">
          <TwitterIcon className="icon" />
        </a>
      </div>
      <div className="shortcut-links" aria-label="shortcut-links">
        <h2>Quick Links</h2>
        <a href="">Team</a>
        <a href="">Articles</a>
        <a href="">Expertise</a>
        <a href="">Resources</a>
        <a href="">Media</a>
      </div>
      <div className="social-links" aria-label="social links"></div>
    </div>
  );
}
