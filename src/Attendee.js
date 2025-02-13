import React from "react";
import { Link } from "react-router-dom";
import "./Attendee.css";

function Attendee() {
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
          <div className="attendee-details">
            <h1>Attendee Details</h1>
            <p>Step 2/3</p>
          </div>
          <div className="progress-container">
            <p className="bar"></p>
            <p className="progress-bar"></p>
          </div>
        </div>

        <section>
          <aside>
            <p className="upload-text">Upload Profile Photo</p>
            <div className="upload-wrapper">
              <div className="upload">
                <form action="/upload" method="post" encType="multipart/form-data">
                  <input
                    type="file"
                    id="fileInput"
                    name="image"
                    className="custom-input"
                  />
                  <button type="submit" className="upload-button">
                    <img src="images/icon.png" alt="" className="cloud" />
                    <p className="upload-btn-text">
                      Drag &amp; drop or click to upload
                    </p>
                  </button>
                </form>
              </div>
            </div>
          </aside>

          <p className="second-bar"></p>

          <div className="user-details">
            <form action="/submit" method="post" className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Enter your name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Enter your email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="hello@avioflagos.io"
                  required
                />
              </div>
            </form>
          </div>

          <div className="textarea-container">
            <form action="/submit" method="post">
              <label htmlFor="email">Special request?</label>
              <input
                type="text"
                id="request"
                name="email"
                className="textarea"
                required
              />
            </form>
          </div>

          <div className="buttons">
            <button className="btn-back">Back</button>
            <Link to="/ticket-checkout">
    <button className="btn-get-ticket">Get My Free Ticket</button>
  </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Attendee;
