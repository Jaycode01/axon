import "./tickets.css";
import { useState, useEffect } from "react";
import Navbar from "../components/layout/navbar";
import CreateTicket from "../components/tickets/createticket";
import TicketCard from "../components/tickets/ticketcard";
import EditTicket from "../components/tickets/editticket";

function Tickets() {
  const [tickets, settickets] = useState([]);
  const [createmodal, setcreatemodal] = useState(false);
  const [editmodal, seteditmodal] = useState(false);
  const [selectedticket, setselectedticket] = useState(null);

  useEffect(() => {
    const savedtickets = JSON.parse(localStorage.getItem("tickets")) || [];
    settickets(savedtickets);
  }, []);

  const addticket = (ticket) => {
    settickets((prev) => [...prev, ticket]);
    setcreatemodal(false);
  };

  const updateticket = (updatedTicket) => {
    settickets((prev) =>
      prev.map((t) => (t.id === updatedTicket.id ? updatedTicket : t))
    );
  };

  const handleedit = (ticket) => {
    setselectedticket(ticket);
    seteditmodal(true);
  };
  return (
    <>
      <Navbar />
      <section className="tickets_management">
        <div className="actions">
          <h1>Tickets Management</h1>

          {/* Buttons to manage tickets */}
          <div className="buttons">
            <button type="button" onClick={() => setcreatemodal(true)}>
              Create New Ticket
            </button>
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
              <TicketCard key={ticket.id} ticket={ticket} onedit={handleedit} />
            ))
          )}
        </div>

        {createmodal && <CreateTicket onAddTicket={addticket} />}
        {editmodal && selectedticket && (
          <EditTicket
            ticket={selectedticket}
            onUpdate={updateticket}
            onclose={() => seteditmodal(false)}
          />
        )}
      </section>
    </>
  );
}

export default Tickets;
