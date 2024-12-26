import { useState } from "react";
import "./Signup.css";
import photo from "../assets/login.png";
import googleLogo from "../assets/googlw.png"; // Add the Google logo image

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false); // State to toggle between Signup and Login forms

  const handleToggleForm = () => {
    setIsLogin(!isLogin); // Toggle between Login and Signup
  };

  return (
    <div className="signup-container">
      <img
        src={photo}
        className="signup-img"
        alt="Shopping Cart and Mobile"
      />

      <div className="signup-form">
        {isLogin ? (
          // Login Form
          <>
            <h1>Log in to your account</h1>
            <p>Enter your details below</p>
            <form>
              <input type="email" placeholder="Email or Phone Number" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="signup-button">
                Log in
              </button>
            </form>
            <button className="google-signup">
              <img src={googleLogo} alt="Google Logo" className="google-logo" />
              Log in with Google
            </button>
            <p className="signup-link">
              Don&apos;t have an account?{" "}
              <span onClick={handleToggleForm} style={{ color: "red", cursor: "pointer" }}>
                Sign up
              </span>
            </p>
          </>
        ) : (
          // Signup Form
          <>
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email or Phone Number" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="signup-button">
                Create Account
              </button>
            </form>
            <button className="google-signup">
              <img src={googleLogo} alt="Google Logo" className="google-logo" />
              Sign up with Google
            </button>
            <p className="login-link">
              Already have an account?{" "}
              <span onClick={handleToggleForm} style={{ color: "red", cursor: "pointer" }}>
                Log in
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
