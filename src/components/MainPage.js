// Home.js
import React from 'react';
import '../Styles/Home.css';
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const history = useHistory();

  return (
    <div>
      <header className='main-header'>
        <a href="#">
          <img className="logo" style={{ height: "70px", maxWidth: "100%" }} src='https://cdn.dribbble.com/users/2669701/screenshots/5421476/media/1e906db083fb08f2e7d118c556444e9b.png' alt="cart logo" />
        </a>
        <nav className="nav-bar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#" onClick={(e) => gotoPage(e, history, 'home')}>Shop with us</a></li>
            <li><a href="#" onClick={(e) => gotoPage(e, history, 'about')}>About us</a></li>
            <li><a href="#" onClick={(e) => gotoPage(e, history, 'contact')}>Contact us</a></li>
          </ul>
          <ul>
            <li><a href="#" onClick={(e) => gotoPage(e, history, 'donate')} className="btn btn-primary" style={{ backgroundColor: "#ee2362", border: "none", fontWeight: "700" }}>Donate</a></li>
            <li><a href="#" onClick={(e) => gotoPage(e, history, 'login')} className="btn btn-primary" style={{ backgroundColor: "#50b1d3", border: "none", fontWeight: "700" }}>Sign in / Register</a></li>
          </ul>
        </nav>
      </header>
      <div className="main">
        <section className="section">
          <div className="section-item">
            <h1>Hopeful Treasures charity online shop</h1>
            <p className='text-theme'>
              Hopeful treasures provides care and support for terminally ill people, and people with life limiting illnesses. And we’ve been doing it for more than 35 years. Our patients’ needs are our priority, and our care is designed to make the best of their lives. At our Hospice, at home, and in our community.      </p>
            <p className="sub-text"> Our care is rated 'Good' by the Care Quality Commission.</p>
          </div>
          <div className="section-item">
            <img src='https://stleonardshospice.org.uk/wp-content/uploads/2021/05/STL29-9-17-69walking-with-patient.jpg' />
          </div>
        </section>

        <section className="section">
          <div className="section-item">
            <img src='https://stleonardshospice.org.uk/wp-content/uploads/2021/04/Doreen-e1617741360176.jpg' />
          </div>
          <div className="section-item">
            <h1>Donate Now</h1>
            <p className='donate-theme'>
              We provide care for free, but it is not free to provide.
              <br></br>
              We need to raise dollar 7.9 million a year, and we make sure as much as possible goes directly to patient care and facilities.

            </p>
            <div>
              <p className='donate-sub-text'>
                Now more than ever, we need your help. So please donate now, <span style={{ color: "#ee2362" }}>visit one of our shops or join a fundraising initiative.</span>
              </p>
              <a href="https://ggogle.org.uk/donate/" className="btn btn-primary" style={{ backgroundColor: "#ee2362", border: "none", fontWeight: "700", width: "150px" }}>Donate</a>

            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-item">
            <h1>What do we do</h1>
            <p className='text-theme'>
              Hopeful treasures is an independent charity, providing specialist palliative care, and support for local people with life-limiting illnesses.
            </p>
            <p className='text-theme'>
              We are dedicated to providing support tailored to the specific needs of patients, and their families and carers, with a wide range of services offered in a relaxed and friendly environment where care is taken personally.
            </p>
            <p className='text-theme'>
              In addition to a team of highly experienced doctors and nurses, we have specialists in a wide range of roles including physiotherapy, social work, bereavement, occupational therapy and spiritual care.
            </p>
            <p className='text-theme'>
              Though our care is free, it is not free to provide. We rely on donations from the public, our shops, and a small amount of public funding, as well as legacies from Wills.
            </p>

          </div>
          <div className="section-item">
            <img src='https://stleonardshospice.org.uk/wp-content/uploads/2023/04/Peanut-Steph.jpg' />
          </div>
        </section>
        <section>
          <div className='container' style={{ marginBottom: "2rem" }}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://stleonardshospice.org.uk/wp-content/uploads/2023/04/Testimonials-James-Rushby-1.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://loremflickr.com/cache/resized/65535_53060421930_e0bc904cdb_c_640_480_nofilter.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://stleonardshospice.org.uk/wp-content/uploads/2023/04/Testimonials-James-Rushby-1.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://loremflickr.com/cache/resized/65535_53060421930_e0bc904cdb_c_640_480_nofilter.jpg" class="d-block w-100" alt="..." />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
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

export default MainPage;
