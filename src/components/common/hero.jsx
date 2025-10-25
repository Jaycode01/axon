import "./hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="text_section">
        <h1 className="heading">
          Your Perfect Solution for Managing Your Amazing Events Tickets.
        </h1>
        <p className="description">
          Designed for modern event creators, our platform helps you bring order
          to the chaos of ticket management. Track your events, monitor
          attendance, and deliver a seamless experience from start to finish.
          Every detail is built to make managing your tickets simpler, smarter,
          and beautifully efficient.
        </p>
        <button type="button" className="cta" onClick={() => navigate("/auth")}>
          Try out <img src="assets/caret.svg" alt="right_caret" />
        </button>
      </div>
      <img src="assets/ticket.png" alt="ticket" className="ticket" />
      <img
        src="assets/ticket_glow.png"
        alt="victory ticket"
        className="ticket_glow"
      />
    </section>
  );
}

export default Hero;
