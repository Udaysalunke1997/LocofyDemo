import { FunctionComponent } from "react";
import "./FlightMainContainer.scss";

export type FlightMainContainerType = {
  className?: string;
  sIN?: string;
  duration?: string;
  lAX?: string;
  departOn?: string;
  sep2021?: string;
};

const FlightMainContainer: FunctionComponent<FlightMainContainerType> = ({
  className = "",
  sIN,
  duration,
  lAX,
  departOn,
  sep2021,
}) => {
  return (
    <div className="flight-main-container">
      <div className="to-and-from">
        <div className="from-details">
          <h3 className="sin">{sIN}</h3>
        </div>
        <img className="duration-icon" alt="" src={duration} />
        <div className="to-details">
          <h3 className="lax">{lAX}</h3>
        </div>
      </div>
      <div className="depart-on-7-container">
        <b>{departOn}</b>
        <span>{sep2021}</span>
      </div>
    </div>
  );
};

export default FlightMainContainer;
