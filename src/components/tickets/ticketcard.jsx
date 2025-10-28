function TicketCard({ ticket }) {
  <>
    <div className="ticket_card">
      <h2 className="ticket_title">{ticket.title}</h2>
      <small className="status_and_date">
        <p className="status">{ticket.status}</p>
        <p className="date">{ticket.date}</p>
      </small>
      <p className="ticket_description">{ticket.description}</p>
      <div className="ticket_cta">
        <button type="button" className="edit">
          Edit
        </button>
        <button type="button" className="delete">
          Delete
        </button>
      </div>
    </div>
  </>;
}

export default TicketCard;
