import React from "react";
// import { Link } from "react-router-dom";
import "./Checkout.css";

function TicketCheckout() {
  return (
    <div>
      <nav>
        <img
          src="images/Frame 1618871078.png"
          alt=""
          className="logo"
        />
        <div className="nav-links">
          <a href="#event">Event</a>
          <a href="#ticket">My Tickets</a>
          <a href="#about">About Project</a>
        </div>
        <a href="#" className="nav-right">
          My Ticket{" "}
          <img
            src="images/Line 5.png"
            alt="arrow-btn"
            className="arrow-btn"
          />
        </a>
      </nav>
      <main>
        <div className="header">
          <div className="ticket-ready">
            <h1>Ready</h1>
            <p>Step 3/3</p>
          </div>
          <div className="progress-container">
            <p className="bar"></p>
            <p className="progress-bar"></p>
          </div>
        </div>
        <section>
          <aside>
            <h1>Your Ticket is Booked!</h1>
            <p>Check your email for a copy or you can download</p>
          </aside>
          <div className="ticket-details">
            <div className="ticket-container">
              <img src="images/TICKET.png" alt="ticket" />
            </div>
            <div className="barcode">
              <img src="images/Bar Code.png" alt="" />
            </div>
          </div>
          <div className="buttons">
            <button className="btn-another-ticket">
              Book Another Ticket
            </button>
            <button className="btn-download-ticket">
              Download Ticket
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default TicketCheckout;
