import "../assets/scss/component/_contactus.scss";
import profileimg from "../assets/images/profile.png";

function Contactus() {

  // useEffect(() => {
  //   console.log(window.location.pathname);
  // }, [])
  return (
    <>
      <main className="main-content">
        <section className="container">
          {window.location.pathname == "/contactus" && <>
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
                {/* <div onClick={downloadCv}>
              Download CV
            </div> */}
              </div>

            </section>
            <div className="contactus">
              <p className="contactus-mailText">For any questions please mail us::</p>
              <p className="contactus-email">joybosu456@gmail.com</p>
            </div>
            <div className="contactus">
              <p className="contactus-mailText">My Mobile Numbers:</p>
              <p className="contactus-email">+91 6296582055</p>
              <p className="contactus-email">+91 8391906640</p>
            </div>
          </>}

        </section>
      </main>
    </>
  );
}

export default Contactus;
