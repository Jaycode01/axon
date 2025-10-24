import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <img src="assets/axon.png" alt="axon logo" />
      <div className="cta">
        <button type="button" className="login_btn">
          Login
        </button>
        <button type="button" className="signup_btn">
          <img src="assets/zap.svg" alt="zap" />
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
