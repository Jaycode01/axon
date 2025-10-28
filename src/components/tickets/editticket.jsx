import { useState } from "react";

const EditTicket = ({ ticket, onUpdate, onclose }) => {
  const [title, settitle] = useState(ticket.title);
  const [status, setstatus] = useState(ticket.status);
  const [date, setdate] = useState(ticket.date);
  const [description, setdescription] = useState(ticket.description);

  const updateticket = (e) => {
    e.preventDefault();
    if (!ticket) return;

    const updatedticket = { ...ticket, title, status, date, description };

    const existing = JSON.parse(localStorage.getItem("tickets")) || [];
    const updatedlist = existing.map((t) =>
      t && t.id === ticket.id ? updatedticket : t
    );

    localStorage.setItem("tickets", JSON.stringify(updatedlist));
    onUpdate(updatedticket);
    onclose();
  };

  return (
    <form className="create_ticket" onSubmit={updateticket}>
      <input
        type="text"
        name="title"
        placeholder="Ticket title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <select
        name="status"
        value={status}
        onChange={(e) => setstatus(e.target.value)}
      >
        <option value="open">Open</option>
        <option value="resolved">Resolved</option>
        <option value="ongoing">Ongoing</option>
      </select>
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setdate(e.target.value)}
      />
      <textarea
        name="description"
        placeholder="Ticket description..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      />
      <button type="submit">Update Ticket</button>
    </form>
  );
};

export default EditTicket;
