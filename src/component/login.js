import React, { useState } from "react";
import OwnerDashboard from "./OwnerDashboard"; // Adjust path as per your project structure

export default function LoginForm() {
  const [userType, setUserType] = useState("user"); // Default to 'user' type
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [ownerExists, setOwnerExists] = useState(false); // Track if an owner already exists

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate login logic
    // Here you would typically send a request to your backend for authentication
    // For demo purposes, we're using a simulated login logic
    if (userType === "user" || userType === "owner") {
      setLoggedIn(true);
    }
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleBackToLogin = () => {
    setShowSignUp(false);
  };
  const styles = {
    container: {
      textAlign: "center",
      padding: "50px",
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      maxWidth: "800px",
      margin: "auto",
    },
    welcomeText: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "18px",
      color: "#6c757d",
      marginBottom: "30px",
    },
    button: {
      backgroundColor: "#000",
      color: "#fff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "40px",
      border: "none",
    },
    featuresContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginTop: "30px",
    },
    featuresLeft: {
      flex: "1",
      textAlign: "left",
    },
    featuresRight: {
      flex: "1",
      textAlign: "left",
    },
    featuresTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    featuresSubtitle: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    featuresDescription: {
      fontSize: "16px",
      color: "#6c757d",
      marginBottom: "20px",
    },
    featuresList: {
      listStyle: "none",
      paddingLeft: "0",
    },
    featureItem: {
      fontSize: "18px",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
    },
    featureIcon: {
      marginRight: "10px",
    },
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Simulate sign-up logic
    // Here you would typically send a request to your backend to create a new account
    // For demo purposes, we're using a simulated signup logic
    if (userType === "owner") {
      if (ownerExists) {
        alert("An owner already exists. Only one owner is allowed.");
        return;
      } else {
        setOwnerExists(true);
      }
    }
    setShowSignUp(false);
  };

  if (showSignUp) {
    return (
      <>
        <section className="back">
          <img src="./woood.jpg" alt="" />

          <div className="heros-container">
            <div className="form-left2">
              <form onSubmit={handleSignUpSubmit}>
                <h1>Registration</h1>

                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="user"
                      checked={userType === "user"}
                      onChange={() => setUserType("user")}
                      required
                    />{" "}
                    User
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="userType"
                      value="owner"
                      checked={userType === "owner"}
                      onChange={() => setUserType("owner")}
                      required
                    />{" "}
                    Owner
                  </label>
                </div>

                <div className="inputss-box">
                  <div className="inputss-field">
                    <input type="text" placeholder="Full Name" required />
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div className="inputss-field">
                    <input type="text" placeholder="Username" required />
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="inputss-box">
                  <div className="inputss-field">
                    <input type="email" placeholder="Email" required />
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="inputss-field">
                    <input type="number" placeholder="Phone Number" required />
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="inputss-box">
                  <div className="inputss-field">
                    <input type="password" placeholder="Password" required />
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                  <div className="inputss-field">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      required
                    />
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </div>
                </div>

                <label>
                  <input type="checkbox" /> I hereby affirm that the information
                  above is true and correct.
                </label>
                <button type="submit" className="btn">
                  SignUp
                </button>

                <div className="register-link">
                  <p>
                    Already have an account?{" "}
                    <a href="#" onClick={handleBackToLogin}>
                      Back to Login
                    </a>
                  </p>
                </div>
              </form>
            </div>

            <div className="form-right">
              <div className="come">
                <h1>Sign Up</h1>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (loggedIn) {
    if (userType === "user") {
      return (
        <div style={styles.container}>
          <h1 style={styles.welcomeText}>Welcome back! FABRICE IHONGUI</h1>
          <p style={styles.subtitle}>
            You've successfully authenticated. Let's get started.
          </p>
          <button style={styles.button}>
            <CustomLink href="/UsersignIn">
              <i class="fa-solid fa-address-card"></i>Continue to App
            </CustomLink>
          </button>
          <div style={styles.featuresContainer}>
            <div style={styles.featuresLeft}>
              <h2 style={styles.featuresTitle}>Key Features</h2>
              <h3 style={styles.featuresSubtitle}>
                Powerful features to boost your productivity
              </h3>
              <p style={styles.featuresDescription}>
                Our application offers a suite of powerful features to help you
                work smarter and more efficiently.
              </p>
            </div>
            <div style={styles.featuresRight}>
              <ul style={styles.featuresList}>
                <li style={styles.featureItem}>
                  <i class="fa-solid fa-bolt-lightning"></i> Blazing Fast
                </li>
                <li style={styles.featureItem}>
                  <i class="fa-solid fa-robot"></i> Streamlined Workflows
                </li>
                <li style={styles.featureItem}>
                  <i class="fa-solid fa-shield"></i> Enterprise-grade Security
                </li>
                <li style={styles.featureItem}>
                  <i class="fa-solid fa-expand"></i> Scalable and Extensible
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else if (userType === "owner") {
      // Check if an owner exists to allow access to OwnerDashboard
      if (ownerExists) {
        return <OwnerDashboard />;
      } else {
        return (
          <div style={styles.container}>
            <h1 style={styles.welcomeText}>Welcome back! Emmanuel Pobee</h1>
            <p style={styles.subtitle}>
              You've successfully authenticated. Let's get started.
            </p>
            <button style={styles.button}>
              <CustomLink href="/ownerHome">
                <i class="fa-solid fa-address-card"></i>Continue to App
              </CustomLink>
            </button>
            <div style={styles.featuresContainer}>
              <div style={styles.featuresLeft}>
                <h2 style={styles.featuresTitle}>Key Features</h2>
                <h3 style={styles.featuresSubtitle}>
                  Powerful features to boost your productivity
                </h3>
                <p style={styles.featuresDescription}>
                  Our application offers a suite of powerful features to help
                  you work smarter and more efficiently.
                </p>
              </div>
              <div style={styles.featuresRight}>
                <ul style={styles.featuresList}>
                  <li style={styles.featureItem}>
                    <i class="fa-solid fa-bolt-lightning"></i> Blazing Fast
                  </li>
                  <li style={styles.featureItem}>
                    <i class="fa-solid fa-robot"></i> Streamlined Workflows
                  </li>
                  <li style={styles.featureItem}>
                    <i class="fa-solid fa-shield"></i> Enterprise-grade Security
                  </li>
                  <li style={styles.featureItem}>
                    <i class="fa-solid fa-expand"></i> Scalable and Extensible
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      }
    }
  }

  // Default login form
  return (
    <>
      <section className="back">
        <img src="./woood.jpg" alt="" />
        <div className="heros-container">
          <div className="form-left">
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>

              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="user"
                    checked={userType === "user"}
                    onChange={() => setUserType("user")}
                    required
                  />{" "}
                  User
                </label>
                <label>
                  <input
                    type="radio"
                    name="userType"
                    value="owner"
                    checked={userType === "owner"}
                    onChange={() => setUserType("owner")}
                  />{" "}
                  Owner
                </label>
              </div>

              <div className="inputs-box">
                <input type="text" placeholder="Email" required />
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="inputs-box">
                <input type="password" placeholder="Password" required />
                <i className="fa fa-lock" aria-hidden="true"></i>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Keep Me Login
                </label>
                <a href="#">Forgot Password?</a>
              </div>

              <button type="submit" className="btn">
                Login
              </button>
              <div className="register-link">
                <p>
                  Don't have an account?{" "}
                  <a href="#" onClick={handleSignUpClick}>
                    Create Account
                  </a>
                </p>
              </div>

              <div className="btn2">
                <h3 className="line">Login With</h3>
              </div>

              <div className="social">
                <i className="fa-brands fa-google"></i>
              </div>
            </form>
          </div>

          <div className="form-right">
            <div className="come">
              <h1>Welcome Back!</h1>
            </div>
          </div>
        </div>
      </section>
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
