import React, { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rooms, setRooms] = useState([
    { id: "room1", image: "./image1.jpg", likes: 1452, dislikes: 0 },
    { id: "room2", image: "./image2.jpg", likes: 1452, dislikes: 0 },
    { id: "room3", image: "./image3.jpg", likes: 1754, dislikes: 0 },
  ]);

  const [agents, setAgents] = useState([
    {
      name: "Grant",
      email: "bgrant001@st.ug.edu.gh",
      phone: "0559157391",
      address: "amatwetwegue",
    },
    {
      name: "Fabrice ",
      email: "ihonguifabrice@gmail.com",
      phone: "0595162633",
      address: "Accra Mall",
    },
    {
      name: "Melissa",
      email: "otoomelissa@gmail.com",
      phone: "0270150144",
      address: "East Legon",
    },
  ]);

  const [agentInfoVisible, setAgentInfoVisible] = useState(false);

  const handleLike = (roomId) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId ? { ...room, likes: room.likes + 1 } : room
      )
    );
  };

  const handleDislike = (roomId) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId ? { ...room, dislikes: room.dislikes + 1 } : room
      )
    );
  };

  const handleRent = () => {
    if (!isLoggedIn) {
      alert("Please log in first");
      return;
    }
    window.location.href = "./component/payment";
  };

  const handleBuy = () => {
    if (!isLoggedIn) {
      alert("Please log in first");
      return;
    }
    window.location.href = "./component/payment";
  };

  return (
    <>
      <nav className="nav">
        <img src="./logo.jpg" alt="/" />
        <ul>
          <CustomLink href="/home">
            <i class="fa-solid fa-house"></i>Home
          </CustomLink>
          <CustomLink href="/login">
            <i class="fa-solid fa-right-to-bracket"></i>Loginout
          </CustomLink>
          <CustomLink href="/payment">
            <i class="fa-solid fa-user-plus"></i>PaymentView
          </CustomLink>
          <CustomLink href="/OwnerDashboard">
            <i class="fa-regular fa-user"></i>OwnerDashboard
          </CustomLink>
          <CustomLink href="/about">
            <i class="fa-solid fa-address-card"></i>About
          </CustomLink>
        </ul>
        <div className="search-bar">
          <input type="search" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
      </nav>

      <div className="rooms">
        <div className="room-box">
          {rooms.map((room) => (
            <div
              className={`room ${room.id === "room1" ? "big-room" : ""}`}
              key={room.id}
            >
              <a
                href={`https://webobook.com/tour/8IIz9O11unB2n6XS--1LIr7xLZlUJ3Ju/RWY-z8IWKCKMOGx9uP8HcXt6l2Io-4Ez`}
              >
                <img src={room.image} alt={`Room ${room.id}`} />
                <div className="list-icon-content">
                  <div className="list-icon">
                    <img
                      src="images/vr.svg"
                      alt="VR icon"
                      height="30"
                      width="30"
                    />
                    <img
                      src="images/play.svg"
                      alt="Play icon"
                      height="30"
                      width="30"
                    />
                    <p>360°</p>
                  </div>
                </div>
              </a>
              <h6>Virtual tour of {room.id}</h6>
              <div className="lk">
                <button
                  className="like-button"
                  onClick={() => handleLike(room.id)}
                >
                  👍 Like ({room.likes})
                </button>
                <button
                  className="dislike-button"
                  onClick={() => handleDislike(room.id)}
                >
                  👎 Dislike ({room.dislikes})
                </button>
                <button className="buy-button">🏡 Delete</button>
                <button className="rent-button">🏡 Update</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <div className="icons">
        <div className="icon">
          <button>
            <i className="fa fa-home" aria-hidden="true"></i> Enter House
          </button>
        </div>
        <div className="icon">
          <button>
            <i className="fa fa-sitemap" aria-hidden="true"></i> Site Map
          </button>
        </div>
        <div className="icon">
          <button>
            <i className="fa fa-bed" aria-hidden="true"></i> Bed
          </button>
        </div>
        <div className="icon">
          <button>
            <i className="fa fa-product-hunt" aria-hidden="true"></i> Car Park
            Free
          </button>
        </div>
        <div className="icon">
          <button>
            <i className="fa fa-bath" aria-hidden="true"></i> Hot Tub
          </button>
        </div>
        <div className="icon">
          <button>
            <i className="fa fa-street-view" aria-hidden="true"></i> Street View
          </button>
        </div>
        <div className="icon">
          <button>
            <i className="fa fa-eye" aria-hidden="true"></i> Vision
          </button>
        </div>
        <div className="icon">
          <button>
            <i className="fa fa-users" aria-hidden="true"></i> Family Room
          </button>
        </div>
        <div className="icon">
          <button>
            <i className="fa fa-air-conditioner" aria-hidden="true"></i> Air
            Condition
          </button>
        </div>
        <div className="icon">
          <button>
            <i className="fa fa-wifi" aria-hidden="true"></i> Free Wifi
          </button>
        </div>
      </div>
      <section className="video-tours">
        <h2>Video Tours</h2>
        <div className="videos-grid">
          <div className="video-item">
            <iframe
              width="560"
              height="315"
              src={
                process.env.PUBLIC_URL +
                "/videos/4307347-hd_1920_1080_30fps.mp4"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Video tour of a luxury apartment</p>
          </div>
          <div className="video-item">
            <iframe
              width="560"
              height="315"
              src={
                process.env.PUBLIC_URL +
                "/videos/3444433-hd_1920_1080_30fps.mp4"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Video tour of a modern house</p>
          </div>

          <div className="video-item">
            <iframe
              width="560"
              height="315"
              src={
                process.env.PUBLIC_URL +
                "/videos/3773486-hd_1920_1080_30fps.mp4"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Video tour of a beachfront villa</p>
          </div>
          <div className="video-item">
            <iframe
              width="560"
              height="315"
              src={
                process.env.PUBLIC_URL +
                "/videos/3769966-hd_1920_1080_25fps.mp4"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Video tour of a city apartment</p>
          </div>
          <div className="video-item">
            <iframe
              width="560"
              height="315"
              src={
                process.env.PUBLIC_URL +
                "/videos/3770033-hd_1920_1080_25fps.mp4"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Video tour of a city apartment</p>
          </div>
        </div>
      </section>
      <div className="footer">
        <div className="social">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-square-snapchat"></i>
        </div>

        <div className="container-f">
          <div className="col">
            <h3>About</h3>
            <p>Company</p>
            <p>Details</p>
            <p>Planning</p>
            <p>About Us</p>
          </div>

          <div className="col">
            <h3>Company</h3>
            <p>Company</p>
            <p>Details</p>
            <p>Planning</p>
            <p>About Us</p>
          </div>

          <div className="col">
            <h3>Company</h3>
            <p>Company</p>
            <p>Details</p>
            <p>Planning</p>
            <p>About Us</p>
          </div>
        </div>

        <hr />
        <h5>All Rights Reserved &copy; 2024</h5>
      </div>
    </>
  );
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
}
