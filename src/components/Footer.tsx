import { FunctionComponent } from "react";
import "./Footer.scss";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className="footer">
      <div className="fickleflight-bio">
        <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
        <div className="fickle-flight-is">
          Fickle Flight is your one-stop travel portal. We offer hassle free
          flight and hotel bookings. We also have all your flight needs in you
          online shop.
        </div>
        <div className="social-icons">
          <img
            className="entypo-socialfacebook-with-ci-icon"
            loading="lazy"
            alt=""
            src="/entyposocialfacebookwithcircle.svg"
          />
          <img
            className="entypo-socialfacebook-with-ci-icon"
            loading="lazy"
            alt=""
            src="/entyposocialinstagramwithcircle.svg"
          />
          <img
            className="entypo-socialfacebook-with-ci-icon"
            loading="lazy"
            alt=""
            src="/entyposocialtwitterwithcircle.svg"
          />
        </div>
      </div>
      <div className="separator" />
      <div className="footer-links">
        <div className="company">
          <div className="company1">Company</div>
          <div className="about-us-parent">
            <div className="about-us">About Us</div>
            <div className="news">News</div>
            <div className="careers">Careers</div>
            <div className="how-we-work">How we work</div>
          </div>
        </div>
        <div className="company">
          <div className="support1">Support</div>
          <div className="about-us-parent">
            <div className="account">Account</div>
            <div className="how-we-work">Support Center</div>
            <div className="faq">FAQ</div>
            <div className="accessibility">Accessibility</div>
          </div>
        </div>
        <div className="company">
          <div className="more1">More</div>
          <div className="about-us-parent">
            <div className="covid-advisory">Covid Advisory</div>
            <div className="airline-fees">Airline Fees</div>
            <div className="tips">Tips</div>
            <div className="how-we-work">Quarantine Rules</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
