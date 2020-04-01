import React from 'react';
import { Button, Image } from 'react-bootstrap';
import Header from '../../header';
import Footer from '../../footer/footer';
import teamLogo from '../../../assets/images/team.jpg';
import '../../../stylesheets/landing.scss';

const LandingPage = () => (
  <>
    <Header />
    {/* <div>
    <h5>We offer you the right platform to collaborate and build the right things, find out how.</h5>
    <Button variant="success"> Explore </Button>
  </div> */}
    <section className="LandingHero">
      <div className="ContentArea">
        <h5>Manage Your Team Seamlessly With SlimBoard</h5>
      </div>
      <img src={teamLogo}></img>
    </section>
    <section className="business-decisions">
      <div className="business-decisions__container">
        <h2>Collaborate and build great tools with SlimBoard</h2>
        <h4>Get Started:</h4>
        <div className="business-decisions__funded">
          <div className="RoundedCircle"> Plan</div>
          {/* <img
              src="testimonials/application-icon.png"
              alt="form application"
              className="business-decisions__icon"
            /> */}
          {/* <Image roundedCircle/> */}
          <div className="arrow-icon" />
          {/* <img
              src="testimonials/compareloans-icon.png"
              alt="options"
              className="business-decisions__icon"
            /> */}
          <div className="RoundedCircle">Track</div>
          <div className="arrow-icon" />
          <div className="RoundedCircle">Deliver</div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default LandingPage;
