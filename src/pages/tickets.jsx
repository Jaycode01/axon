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

  const deleteticket = (id) => {
    if (!window.confirm("Are you sure you want to delete this ticket.")) return;

    const updatedtickets = tickets.filter((t) => t.id != id);
    settickets(updatedtickets);
    localStorage.setItem("tickets", JSON.stringify(updatedtickets));
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
          </div>
        </div>

        {/* Tickets card section */}
        <div className="tickets">
          {tickets.length === 0 ? (
            <p className="no_ticket_mssg">No tickets yet.</p>
          ) : (
            tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onedit={handleedit}
                ondelete={deleteticket}
              />
            ))
          )}
        </div>

        {createmodal && <CreateTicket onAddTicket={addticket} />}
        {editmodal &&
          selectedticket(
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
