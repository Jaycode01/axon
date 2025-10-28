import { useState } from "react";
import "./createticket.css";

function CreateTicket({ onAddTicket }) {
  const [title, settitle] = useState("");
  const [status, setstatus] = useState("");
  const [date, setdate] = useState("");
  const [description, setdescription] = useState("");
  const [message, setmessage] = useState("");

  const countwords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  const createticket = (e) => {
    e.preventDefault();

    if (!title || !status || !date || !description) {
      setmessage("All fields required.");
      return;
    }

    if (countwords(description) < 20) {
      setmessage("Description must be at least 20 words.");
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
    <form className="create_ticket" onSubmit={createticket}>
      {message && <p>{message}</p>}
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
        <option value="in_progress">In Progress</option>
        <option value="closed">Closed</option>
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
