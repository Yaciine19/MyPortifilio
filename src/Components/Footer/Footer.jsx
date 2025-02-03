import './footer.css'
import { SiGithub } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <footer>
      <div>© {getYear} | All rights reserved</div>
      <div>Designed & Developed by Yacine Ragueb</div>
      <div className="social-icons">
          <div className="social-icon">
           <a href="https://github.com/Yaciine19" target='_blank'> <SiGithub /></a>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/yaciine_xr/" target='_blank'><FaInstagram /></a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/yacine-ragueb-8033a9302/" target='_blank'><FaLinkedin /></a>
          </div>
          <div className="social-icon">
            <a href="https://www.facebook.com/19Yacine" target='_blank'><FaFacebook /></a>
          </div>
      </div>
    </footer>
  )
}
