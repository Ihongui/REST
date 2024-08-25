import React from "react";

import Home from "./component/home";
import Login from "./component/login";
import Payment from "./component/payment";
import OwnerDashboard from "./component/OwnerDashboard";
import UsersignIn from "./component/UsersignIn";
import OwnerHome from "./component/ownerHome";
import About from "./component/about";

import "./component/login.css";
import "./component/style.css";
import Navbar from "./component/Navbar";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/home":
      component = <Home />;
      break;
    case "/login":
      component = <Login />;
      break;
    case "/payment":
      component = <Payment />;
      break;
    case "/OwnerDashboard":
      component = <OwnerDashboard />;
      break;

    case "/about":
      component = <About />;
      break;
    case "/UsersignIn":
      component = <UsersignIn />;
      break;
    case "/ownerHome":
      component = <OwnerHome />;
      break;
  }
  return (
    <>
      <Navbar />
      <home />

      <div>{component}</div>
    </>
  );
}

export default App;
