import { useState } from "react";

function CreateTicket({ onAddTicket }) {
  const [title, settitle] = useState("");
  const [status, setstatus] = useState("");
  const [date, setdate] = useState("");
  const [description, setdescription] = useState("");

  const createticket = (e) => {
    e.preventDefault();

    if (!title || !status || !date || !description) {
      alert("All fields required");
      return;
    }

    const newticket = {
      id: Date.now(),
      title,
      description,
      date,
      status,
    };

    const existing = JSON.parse(localStorage.getItem("tickets")) || [];
    existing.push(newticket);
    localStorage.setItem("tickets", JSON.stringify(existing));

    onAddTicket(newticket);

    settitle("");
    setdescription("");
    setdate("");
    setstatus("");
  };

  return (
    <form className="add_ticket" onSubmit={createticket}>
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
      <button type="submit">Create Ticket</button>
    </form>
  );
}

export default CreateTicket;
