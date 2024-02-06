import { Link } from "react-router-dom";
import "../assets/scss/component/_header.scss";
import github from "../assets/images/github.svg";
import twitter from "../assets/images/twitter.svg";
import linkdin from "../assets/images/social_linkedin.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <h1>
              <Link to="/">Logo</Link>
            </h1>

            <ul className="nav-list">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/mystack">Tech Stack</Link>
              </li>
              <li>
                <a href="https://github.com/Joybosu456" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="github" className="header-img" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Joybosu456" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="twitter" className="header-img" />
                </a>

              </li>
              <li>
                <a href="https://www.linkedin.com/in/joy-bosu-59a7b2183/" target="_blank" rel="noopener noreferrer">
                  <img src={linkdin} alt="linkdin" className="header-img" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
