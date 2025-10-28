import { useState, useEffect } from "react";
import Navbar from "../components/layout/navbar";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const [stats, setstats] = useState({
    total: 0,
    open: 0,
    closed: 0,
  });

  useEffect(() => {
    const savedtickets = JSON.parse(localStorage.getItem("tickets")) || [];

    const total = savedtickets.length;
    const open = savedtickets.filter((t) => t.status === "open").length;
    const closed = savedtickets.filter((t) => t.status === "closed").length;

    setstats({ total, open, closed });
  }, []);
  const summaries = [
    {
      label: "Total tickets",
      icon: "assets/tickets.svg",
      value: stats.total,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi animi quo reprehenderit adipisci cum dolor earum in recusandae quos illum atque possimus veritatis delectus fugit iure, qui, harum rerum?",
    },
    {
      label: "Open tickets",
      icon: "assets/open_ticket.svg",
      value: stats.open,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi animi quo reprehenderit adipisci cum dolor earum in recusandae quos illum atque possimus veritatis delectus fugit iure, qui, harum rerum?",
    },
    {
      label: "Closed tickets",
      icon: "assets/resolved_ticket.svg",
      value: stats.closed,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi animi quo reprehenderit adipisci cum dolor earum in recusandae quos illum atque possimus veritatis delectus fugit iure, qui, harum rerum?",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="dashboard">
        <div className="top_section">
          {summaries.map((summary, index) => (
            <div className="summary_card" key={index}>
              <p className="label">
                <img src={summary.icon} alt="card icon" />
                <span>{summary.label}</span>
              </p>
              <h2 className="value">{summary.value}</h2>
              <p className="description">{summary.description}</p>
            </div>
          ))}
        </div>
        <div className="bottom_section">
          <div className="cta">
            <button type="button" onClick={() => navigate("/tickets")}>
              View All Tickets
            </button>
          </div>

          <div className="center_image">
            <img src="assets/ticket_collection.png" alt="tickets collection" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
