// Contact.js
import React from 'react';
import '../Styles/Home.css';
import { useHistory } from "react-router-dom";
import "../Styles/contactus.css";

const Aboutus = () => {
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
      
      <img src="https://stleonardshospice.org.uk/wp-content/uploads/2021/04/STL15-7-20-4-e1617624067774.jpg"/>
      
    
    
    
      <h2 style={{color: "#50b1d3", fontSize: "3rem"}}>Our Story.</h2>
      <h3>10 Years of Hopeful Treasures</h3>
      <p>We have been providing care and support for our local community for 38 years, ever since the idea of a Hospice in York was suggested by four Royal College of Nursing members. </p>
      <p>There have been plenty of challenges along the way, from meeting funding requirements, to developing new ways to care and support terminally ill people, those with life limiting conditions, and their families and carers.</p>
      <p>Meeting the challenges set by the next 38 years depends on your fundraising, legacies and your donations. So please contribute if you can, and help write the next chapter in our story.</p>
    
    
      <h2 style={{color: "#50b1d3", fontSize: "3rem"}}>Our Mission.</h2>
      <p>Our mission is to help more people across York and North Yorkshire by:</p>
      <ul>
        <li>Developing accessible services based on the diverse and changing needs of our population.</li>
        <li>Campaigning for better public policy and awareness of palliative and end-of-life issues.</li>
        <li>Encouraging partnership working to improve the quality of care for patients and secure the future of hospice care.</li>
      </ul>

      <h2 style={{color: "#50b1d3", fontSize: "3rem"}}>Our Vision.</h2>
      <p>Everyone living with a life-limiting illness has access to the best possible care and will be supported to die well.</p>
   

  
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

export default Aboutus;
