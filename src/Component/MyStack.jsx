import html from "../assets/images/html-img.svg";
import css from "../assets/images/css-img.svg";
import js from "../assets/images/js-img.svg";
import react from "../assets/images/react-img.svg";
import info from "../assets/images/info.svg";
import bootstrap from "../assets/images/logos_bootstrap.svg";
import tailwind from "../assets/images/tailwind.svg";
import sass from "../assets/images/logos_sass.svg";
import git from "../assets/images/logos_git-icon.svg";
import cib_greensock from "../assets/images/cib_greensock.svg";
import vscode from "../assets/images/vscode.svg";
import github from "../assets/images/github.svg";
import profileimg from "../assets/images/profile.png";


function MyStack() {
  return (
    <>
      {window.location.pathname == "/mystack" ? <>
        <section className="container">
          <div className="hero-banner">
            <div className="hero-banner-content">
              <div>
                <h2 className="hero-banner-title">
                  Hi, <br />
                  My Name is ,<br />
                  <span>Joy</span>
                  <br />I build things for web
                </h2>
              </div>
              <div>
                <img src={profileimg} alt="profileimg" className="hero-banner_profileimg" />
              </div>
            </div>

          </div>
        </section>
        <div className="mystack">
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            Technologies I’ve been working with recently{" "}
          </p>
          <ul className="mystack-list">
            <li>
              <img src={html} alt="" />
            </li>
            <li>
              <img src={css} alt="" />
            </li>
            <li>
              <img src={js} alt="" />
            </li>
            <li>
              <img src={react} alt="" />
            </li>
            <li>
              <img src={info} alt="" />
            </li>
            <li>
              <img src={bootstrap} alt="" />
            </li>
          </ul>
          <ul className="mystack-list">
            <li>
              <img src={tailwind} alt="" />
            </li>
            <li>
              <img src={sass} alt="" />
            </li>
            <li>
              <img src={git} alt="" />
            </li>
            <li>
              <img src={cib_greensock} alt="" />
            </li>
            <li>
              <img src={vscode} alt="" />
            </li>
            <li>
              <img src={github} alt="" />
            </li>
          </ul>
        </div>

      </> : <>
        <div className="mystack">
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle">
            Technologies I’ve been working with recently{" "}
          </p>
          <ul className="mystack-list">
            <li>
              <img src={html} alt="" />
            </li>
            <li>
              <img src={css} alt="" />
            </li>
            <li>
              <img src={js} alt="" />
            </li>
            <li>
              <img src={react} alt="" />
            </li>
            <li>
              <img src={info} alt="" />
            </li>
            <li>
              <img src={bootstrap} alt="" />
            </li>
          </ul>
          <ul className="mystack-list">
            <li>
              <img src={tailwind} alt="" />
            </li>
            <li>
              <img src={sass} alt="" />
            </li>
            <li>
              <img src={git} alt="" />
            </li>
            <li>
              <img src={cib_greensock} alt="" />
            </li>
            <li>
              <img src={vscode} alt="" />
            </li>
            <li>
              <img src={github} alt="" />
            </li>
          </ul>
        </div>
      </>}

    </>
  );
}

export default MyStack;
