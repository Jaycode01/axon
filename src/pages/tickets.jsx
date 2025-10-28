import "./tickets.css";
import { useState, useEffect } from "react";
import Navbar from "../components/layout/navbar";
import CreateTicket from "../components/tickets/createticket";
import TicketCard from "../components/tickets/ticketcard";

function Tickets() {
  const [tickets, settickets] = useState([]);

  useEffect(() => {
    const savedtickets = JSON.parse(localStorage.getItem("tickets")) || [];
    settickets(savedtickets);
  }, []);

  const addticket = (ticket) => {
    settickets((prev) => [...prev, ticket]);
  };
  return (
    <>
      <Navbar />
      <section className="tickets_management">
        <div className="actions">
          <h1>Tickets Management</h1>

          {/* Buttons to manage tickets */}
          <div className="buttons">
            <button type="button">Create New Ticket</button>
            <select className="tickets_filter">
              <option value="all">All</option>
              <option value="open">Open</option>
              <option value="ongoing">Ongoing</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Tickets card section */}
        <div className="tickets">
          {tickets.length === 0 ? (
            <p className="no_ticket_mssg">No tickets yet.</p>
          ) : (
            tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))
          )}
        </div>

        <CreateTicket onAddTicket={addticket} />
      </section>
    </>
  );
}

export default Tickets;
