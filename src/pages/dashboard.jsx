import Navbar from "../components/layout/navbar";
import "./dashboard.css";

function Dashboard() {
  const summaries = [
    {
      label: "Total tickets",
      icon: "assets/tickets.svg",
      value: 300,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi animi quo reprehenderit adipisci cum dolor earum in recusandae quos illum atque possimus veritatis delectus fugit iure, qui, harum rerum?",
    },
    {
      label: "Open tickets",
      icon: "assets/open_ticket.svg",
      value: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi animi quo reprehenderit adipisci cum dolor earum in recusandae quos illum atque possimus veritatis delectus fugit iure, qui, harum rerum?",
    },
    {
      label: "Resolved tickets",
      icon: "assets/resolved_ticket.svg",
      value: 280,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi animi quo reprehenderit adipisci cum dolor earum in recusandae quos illum atque possimus veritatis delectus fugit iure, qui, harum rerum?",
    },
  ];
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
            <button type="button">View All Tickets</button>
            <button type="button">
              Create Ticket <img src="assets/plus.svg" alt="add ticket" />
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
