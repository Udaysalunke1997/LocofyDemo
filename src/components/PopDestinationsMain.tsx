import { FunctionComponent } from "react";
import Col1 from "./Col1";
import "./PopDestinationsMain.scss";

export type PopDestinationsMainType = {
  className?: string;
};

const PopDestinationsMain: FunctionComponent<PopDestinationsMainType> = ({
  className = "",
}) => {
  return (
    <div className="pop-destinations-main">
      <div className="destinations-titles">
        <div className="title-container">
          <b className="plan-your-next">Plan your next trip</b>
          <h2 className="most-popular-destinations">
            Most Popular Destinations
          </h2>
        </div>
        <div className="view-all-top">
          <div className="view-all-destinations">View all destinations</div>
          <img className="arrow-right-icon" alt="" src="/arrowright.svg" />
        </div>
      </div>
      <div className="cards-container">
        <Col1
          parisImage="/parisimage@2x.png"
          paris="Paris"
          destinationOldPrice="$699"
        />
        <Col1
          parisImage="/greeceimage@2x.png"
          paris="Greece"
          detailsWidth="6.244rem"
          destinationOldPrice="$1079"
          destinationOldPriceWidth="6.188rem"
        />
        <Col1
          parisImage="/norwayimage@2x.png"
          paris="Norway"
          detailsWidth="5.681rem"
          destinationOldPrice="$895"
          destinationOldPriceWidth="5.681rem"
        />
        <Col1
          parisImage="/tuscanyimage@2x.png"
          paris="Tuscany"
          detailsWidth="6.288rem"
          destinationOldPrice="$1245"
          destinationOldPriceWidth="6.288rem"
        />
      </div>
      <div className="view-all-bottom">
        <div className="view-all-destinations">View all destinations</div>
        <img className="arrow-right-icon" alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default PopDestinationsMain;
