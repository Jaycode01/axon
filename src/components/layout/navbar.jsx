import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [menu, setmenu] = useState(true);

  const navigate = useNavigate();

  return (
    <nav>
      <img src="assets/axon.png" alt="axon logo" />
      {menu && (
        <div className="cta">
          <button
            type="button"
            className="login_btn"
            onClick={() => navigate("/auth")}
          >
            Login
          </button>
          <button type="button" className="signup_btn">
            <img src="assets/zap.svg" alt="zap" />
            Get Started
          </button>
        </div>
      )}
      <button className="menu" onClick={() => setmenu(!menu)}>
        <img src="assets/bars.svg" alt="menu" />
      </button>
    </nav>
  );
}

export default Navbar;
