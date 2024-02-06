// import React from 'react'
import "../assets/scss/_style.scss";
import "../assets/scss/component/_base.scss";
import "../assets/scss/_homePage.scss";
import profileimg from "../assets/images/profile.png";
import MyStack from "../Component/MyStack";
import Project from "../Component/Project";
import AboutMe from "../Component/AboutMe";
import Footer from "../Component/Footer";
import download from "../assets/images/download.png";

function HomePage() {
  const downloadCv = () => {
    // Create a dynamic download link
    const link = document.createElement('a');
    link.href = '../assets/images/Resume.pdf';
    link.download = 'YourCVFileName.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };
  return (
    <>
      <main className="main-content">
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
            <div className="hero-banner-resumee" onClick={downloadCv}>
              <p>Download CV</p>
              <img src={download} alt="download" className="header-img" />
            </div>
          </div>
          <MyStack />
          <Project />
          <AboutMe />
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default HomePage;
