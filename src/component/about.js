import React from "react";
import "./AboutUs.css";

const About = () => {
  return (
    <div className="about-us-container">
        <header className="header">
        <nav className="navbar">
          <div className="logo">REAL ESTATE</div>
          <ul className="nav-links">
            <li>
              <CustomLink href="/home">
                <i class="fa-solid fa-house"></i>Home
              </CustomLink>
            </li>
            <li>About</li>
            <li>
              <CustomLink href="/login">
                <i class="fa-solid fa-right-to-bracket"></i>Login
              </CustomLink>
            </li>
            <li>Contact</li>
          </ul>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </nav>
      </header>  

      <main className="main-content">
        <section className="intro-section">
          <div className="welcome-text">WELCOME</div>
          <div className="how-to-text">How To Use The App</div>
          <div className="learn-more-text">Learn More About The App</div>
          <div className="lose-payment-text">
            What To Do If You Lose Payment Your Receipt
          </div>
          <div className="profile-container">
            <img src="aboutus.png" alt="Profile" className="profile-image" />
            <div className="about-us-text">
              <h2>ABOUT US</h2>
              <p>
                I'm Emmanuel, committed to leading with vision and passion. I
                focus on creating a positive work environment and ensuring
                quality.
              </p>
              <p>
                I take pride in inspiring my team and earning respect. My aim is
                to continuously improve and innovate.
              </p>
            </div>
          </div>
        </section>

        <section className="how-to-section">
          <div className="how-to-container">
            <h2>How To Use The App</h2>
            <ul>
              <li>Browse Available Rooms And Properties</li>
              <li>Add Items To Your Cart For Rental Or Purchase</li>
              <li>Proceed To Checkout And Make Payment</li>
              <li>View And Manage Bookings Through Our Profile</li>
            </ul>
          </div>
          <div className="lost-receipt-container">
            <h2>Lost Receipt Information?</h2>
            <ul>
              <li>Please Contact Our Support Team Immediately.</li>
              <li>
                We'll Help Retrieve Your Payment Details Or Find Another
                Solution.
              </li>
              <li>
                Ensure To Keep A Copy Of Your Receipt To Avoid Any
                Inconvenience.
              </li>
              <li>Office Line: 0559157391</li>
              <li>Email: Bgrant001@St.Ug.Edu.Gh</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};
function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <li>
        <a href={href} {...props}>
          {children}
        </a>
      </li>
    </li>
  );
}

export default About;
