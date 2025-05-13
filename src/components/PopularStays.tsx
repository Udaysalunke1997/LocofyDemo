import { FunctionComponent, useCallback } from "react";
import HotelCard1 from "./HotelCard1";
import "./PopularStays.scss";

export type PopularStaysType = {
  className?: string;
};

const PopularStays: FunctionComponent<PopularStaysType> = ({
  className = "",
}) => {
  const onViewAllStaysButtonClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div className="popular-stays">
      <div className="popular-stays-header">
        <div className="popular-stays-title">
          <h2 className="popular-stays1">Popular Stays</h2>
        </div>
        <div
          className="view-all-stays-button"
          onClick={onViewAllStaysButtonClick}
        >
          <div className="view-all-stays">View all stays</div>
          <img className="arrow-right-icon4" alt="" src="/arrowright-4.svg" />
        </div>
      </div>
      <div className="hotel-cards">
        <HotelCard1
          matterhornSuitesImage="/matterhorn-suites-image@2x.png"
          entireBungalow="Entire bungalow"
          matterhornSuites="Matterhorn Suites"
          night="$575/night"
          star="/star.svg"
          emptyStar="4.9"
          reviews="(60 reviews)"
        />
        <HotelCard1
          matterhornSuitesImage="/discovery-shores-image@2x.png"
          stayDetailsFlex="1"
          stayDetailsGap="var(--gap-2xs)"
          stayDetailsRowsMinWidth="9.5rem"
          entireBungalow="2-Story beachfront suite"
          matterhornSuites="Discovery Shores"
          night="$360/night"
          star="/star.svg"
          starIconWidth="1.038rem"
          emptyStar="4.8"
          reviews="(116 reviews)"
          reviewsWidth="13.525rem"
          moreDetailsButtonBorder="1px solid var(--color-lavender-200)"
        />
        <HotelCard1
          matterhornSuitesImage="/arctic-hut-image@2x.png"
          stayDetailsFlex="1"
          stayDetailsGap="var(--gap-8xs)"
          stayDetailsRowsMinWidth="9.75rem"
          entireBungalow="Single deluxe hut"
          matterhornSuites="Arctic Hut "
          night="$420/night"
          star="/vector-2.svg"
          starIconWidth="1.044rem"
          emptyStar="4.7"
          reviews="(78 reviews)"
          reviewsWidth="13.519rem"
          moreDetailsButtonBorder="1px solid var(--color-lavender-200)"
        />
        <HotelCard1
          matterhornSuitesImage="/lake-louise-image@2x.png"
          stayDetailsFlex="unset"
          stayDetailsGap="var(--gap-2xs)"
          stayDetailsRowsMinWidth="9.5rem"
          entireBungalow="Deluxe King Room"
          matterhornSuites="Lake Louise Inn"
          night="$244/night"
          star="/star.svg"
          starIconWidth="1.038rem"
          emptyStar="4.6"
          reviews="(63 reviews)"
          reviewsWidth="13.525rem"
          moreDetailsButtonBorder="1px solid var(--color-lavender-100)"
        />
      </div>
      <div className="mobile-view-all-stays">
        <div className="view-all-stays">View all stays</div>
        <img className="arrow-right-icon4" alt="" src="/arrowright-4.svg" />
      </div>
    </div>
  );
};

export default PopularStays;
