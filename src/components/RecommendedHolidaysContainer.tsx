import { FunctionComponent } from "react";
import RecCard1 from "./RecCard1";
import "./RecommendedHolidaysContainer.scss";

export type RecommendedHolidaysContainerType = {
  className?: string;
};

const RecommendedHolidaysContainer: FunctionComponent<
  RecommendedHolidaysContainerType
> = ({ className = "" }) => {
  return (
    <div className="recommended-holidays-container">
      <div className="rec-title">
        <h2 className="recommended-holidays">Recommended Holidays</h2>
        <div className="view-all-holidays">
          <div className="view-all-holidays1">View all holidays</div>
          <img className="arrow-right-icon2" alt="" src="/arrowright-2.svg" />
        </div>
      </div>
      <div className="rec-cards-container">
        <RecCard1
          unsplash5MV818tzxeo="/unsplash5mv818tzxeo@2x.png"
          bali="Bali"
          d3N="4D3N"
          holidayOldPrice="$899"
        />
        <RecCard1
          unsplash5MV818tzxeo="/switzerlandimage@2x.png"
          holidayLocationMinWidth="7.375rem"
          bali="Swiss"
          d3N="6D5N"
          holidayOldPrice="$900"
        />
        <RecCard1
          unsplash5MV818tzxeo="/boracayimage@2x.png"
          holidayLocationMinWidth="7.5rem"
          bali="Boracay"
          d3N="5D4N"
          holidayOldPrice="$699"
        />
        <RecCard1
          unsplash5MV818tzxeo="/palawanimage@2x.png"
          holidayLocationMinWidth="7.563rem"
          bali="Palawan"
          d3N="4D3N"
          holidayOldPrice="$789"
        />
      </div>
      <div className="view-all-bottom1">
        <div className="view-all-holidays1">View all holidays</div>
        <img className="arrow-right-icon2" alt="" src="/arrowright-2.svg" />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
