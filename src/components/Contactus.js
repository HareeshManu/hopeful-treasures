// Contact.js
import React from 'react';
import '../Styles/Home.css';
import { useHistory } from "react-router-dom";
import "../Styles/contactus.css";

const Contactus = () => {
  const history = useHistory();

  return (
    <div>
      <header className='main-header'>
        <a href="#">
          <img className="logo" style={{ height: "70px", maxWidth: "100%" }} src='https://cdn.dribbble.com/users/2669701/screenshots/5421476/media/1e906db083fb08f2e7d118c556444e9b.png' alt="cart logo" />
        </a>
        <nav>
          <ul>
            <li><a href="#" onClick={(e) => gotoPage(e, history, '/')}>Home</a></li>
            <li><a href="#" onClick={(e) => gotoPage(e, history, 'home')}>Shop with us</a></li>
            <li><a href="#" onClick={(e) => gotoPage(e, history, 'about')}>About us</a></li>
            <li><a href="#" onClick={(e) => gotoPage(e, history, 'contact')}>Contact us</a></li>
            <li><a href="#" onClick={(e) => gotoPage(e, history, 'donate')} className="btn btn-primary" style={{ backgroundColor: "#ee2362", border: "none", fontWeight: "700" }}>Donate</a></li>
            <li><a href="#" onClick={(e) => gotoPage(e, history, 'login')} className="btn btn-primary" style={{ backgroundColor: "#f9c11b", border: "none", fontWeight: "700" }}>Sign in / Register</a></li>

          </ul>
        </nav>
      </header>
      <div className="main">
      <div class="contact-container">
    <h1>Contact Us</h1>
    <div class="contact-form">
      <form className="contact-form-main">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" id="name" name="name" required/>
        </div>
        <div class="form-group">
          <label for="email">Your Email:</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
      </div>
      <footer>
        <div className="container">
          <div class="footer-content">
            <img style={{ height: "70px", maxWidth: "100%" }} src='https://stleonardshospice.org.uk/wp-content/uploads/2021/09/cropped-logo_729c7d63e08235a5c4d690a6cfa4e967.png' alt="cart logo" />
            <div class="flex flex-col">
              <div class="mgb-5">
                <h3>Telephone</h3>
                <a href="tel:0987 660 897" class="footer-bold">
                  0987 660 897          </a>
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:enquiries@stleonardshospice.org.uk" class="footer-bold">
                  enquiries@charityuk.org.uk</a>
              </div>
            </div>
            <div class="flex flex-col">
              <div>
                <h3>Find Us</h3>
                <p class="footer-bold find-us">
                  Charity Home<br />
                  25 York Road<br />
                  York<br />
                  YO317XE       </p>
              </div>
            </div>
          </div>
          <p>&copy; 2024 Charity Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
const gotoPage = (e, history, page) => {
  e.preventDefault();
  history.push(page)
}

export default Contactus;
