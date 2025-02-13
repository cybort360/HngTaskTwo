import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Attendee from "./Attendee"
import TicketCheckout from "./Checkout";
import "./index.css";

function Home() {
  return (
    <div>
      <nav>
        <img src="images/Frame 1618871078.png" alt="" className="logo" />
        <div className="nav-links">
          <a href="#event">Event</a>
          <a href="#ticket">My Tickets</a>
          <a href="#about">About Project</a>
        </div>
        <a href="#" className="nav-right">
          My Ticket{" "}
          <img src="images/Line 5.png" alt="arrow-btn" className="arrow-btn" />
        </a>
      </nav>
      <main>
        <div className="header">
          <div className="ticket-selection">
            <h1>Ticket Selection</h1>
            <p>Step 1/3</p>
          </div>
          <div className="progress-container">
            <p className="bar"></p>
            <p className="progress-bar"></p>
          </div>
        </div>

        <section>
          <aside>
            <div className="event-details">
              <h1 className="event-title">Techember Fest "25</h1>
              <p className="event-para">
                Join us for an unforgettable experience at Techember Fest! Secure
                your spot now.
              </p>
            </div>

            <div className="location-details">
              <p className="location">
                Lagos | | March 15,2025 | 7:00PM
              </p>
            </div>
          </aside>
          <p className="second-bar"></p>

          <div className="select-ticket">
            <p>Select Ticket Type:</p>
            <div className="radio-input">
              <div className="radio-container">
                <input
                  type="radio"
                  id="regular"
                  name="fav_language"
                  value="regular"
                  className="btn"
                />
                <label htmlFor="regular" className="radio-label regular">
                  <div className="regular-access radio-content">
                    <h2>Free</h2>
                    <p className="access-type">REGULAR ACCESS</p>
                    <p className="date">20/52</p>
                  </div>
                </label>
                <br />
                <input
                  type="radio"
                  id="vip"
                  name="fav_language"
                  value="vip"
                  className="btn"
                />
                <label htmlFor="vip" className="radio-label">
                  <div className="vip radio-content">
                    <h2>$150</h2>
                    <p className="access-type">VIP ACCESS</p>
                    <p className="date">20/52</p>
                  </div>
                </label>
                <br />
                <input
                  type="radio"
                  id="vvip"
                  name="fav_language"
                  value="vvip"
                  className="btn"
                />
                <label htmlFor="vvip" className="radio-label">
                  <div className="vvip radio-content">
                    <h2>$150</h2>
                    <p className="access-type">VVIP ACCESS</p>
                    <p className="date">20/52</p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="dropdown-input">
            <p className="dropdown-text">Number of Tickets</p>
            <div className="dropdown">
              <select id="ticket-count" name="ticket-count">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <div className="buttons">
            <button className="btn-cancel">Cancel</button>
            <Link to="/attendee-details">
    <button className="btn-next">Next</button>
  </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendee-details" element={<Attendee />} />
        <Route path="/ticket-checkout" element={<TicketCheckout />} />
      </Routes>
    </Router>
  );
}

export default App;
