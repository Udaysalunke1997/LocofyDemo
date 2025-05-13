import { FunctionComponent } from "react";
import FlightMainContainer from "./FlightMainContainer";
import "./UpcomingFlightSection.scss";

export type UpcomingFlightSectionType = {
  className?: string;
};

const UpcomingFlightSection: FunctionComponent<UpcomingFlightSectionType> = ({
  className = "",
}) => {
  return (
    <div className="upcoming-flight-section">
      <div className="upcoming-flight-section1">
        <b className="recent-searches">Recent Searches</b>
        <div className="flight-details">
          <div className="recent-searches1">
            <FlightMainContainer
              sIN="SIN"
              duration="/duration.svg"
              lAX="LAX"
              departOn="Depart on: "
              sep2021="7 Sep 2021"
            />
            <FlightMainContainer
              sIN="MY"
              duration="/duration.svg"
              lAX="DUB"
              departOn="Depart on:"
              sep2021=" 9 Sep 2021"
            />
          </div>
          <div className="prepare-menu">
            <div className="recent-searches">Prepare for your trip</div>
            <div className="trip-menus">
              <div className="hotel">
                <img
                  className="hotel-icon"
                  loading="lazy"
                  alt=""
                  src="/hotel-icon.svg"
                />
                <div className="hotel1">Hotel</div>
              </div>
              <div className="attractions">
                <div className="attractions-icon">
                  <div className="background" />
                  <img className="ticket-icon" alt="" src="/ticket.svg" />
                </div>
                <div className="hotel1">Attractions</div>
              </div>
              <div className="attractions">
                <img
                  className="hotel-icon"
                  loading="lazy"
                  alt=""
                  src="/eats-icon.svg"
                />
                <div className="hotel1">Eats</div>
              </div>
              <div className="attractions">
                <div className="hotel-icon">
                  <div className="background1" />
                  <img className="train-icon" alt="" src="/train.svg" />
                </div>
                <div className="hotel1">Commute</div>
              </div>
              <div className="attractions">
                <div className="taxi-icon">
                  <div className="background2" />
                  <img className="taxi-icon1" alt="" src="/taxi.svg" />
                </div>
                <div className="taxi1">Taxi</div>
              </div>
              <div className="attractions">
                <div className="hotel-icon">
                  <div className="background3" />
                  <img className="movie-icon" alt="" src="/movie.svg" />
                </div>
                <div className="hotel1">Movies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFlightSection;
