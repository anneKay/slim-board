import React from 'react';
import '../../stylesheets/footer.scss';

const Footer = () => (
  <footer className="ContentFooter">
    <div className="head">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>What is SlimBoard?</h5>
            <ul>
              <li>
                <a href="/about">About SlimBoard</a>
              </li>
              <li>
                <a href="/explore">Explore</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <ul>
              <li>
                <a href="/testimonials">Submit a testimonial</a>
              </li>
              <li>
                <a href="mailto:@slimboard.com">
                  <span className="envelope">✉️ @slimboard.com</span>
                </a>
              </li>
              <li>
                <a href="tel:18003863372">(234) 80 12345678</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 secure">
            <h5>More</h5>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>|</li>
              <li>
                <a href="/tos">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="tail">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            &copy; {new Date().getFullYear()} SlimBoard Inc., All Rights Reserved. Made with{' '}
            <span className="footer-heart"> 💛</span>by Annekay.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
