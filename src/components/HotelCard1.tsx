import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./HotelCard1.scss";

export type HotelCard1Type = {
  className?: string;
  matterhornSuitesImage?: string;
  entireBungalow?: string;
  matterhornSuites?: string;
  night?: string;
  star?: string;
  emptyStar?: string;
  reviews?: string;

  /** Style props */
  stayDetailsFlex?: CSSProperties["flex"];
  stayDetailsGap?: CSSProperties["gap"];
  stayDetailsRowsMinWidth?: CSSProperties["minWidth"];
  starIconWidth?: CSSProperties["width"];
  reviewsWidth?: CSSProperties["width"];
  moreDetailsButtonBorder?: CSSProperties["border"];
};

const HotelCard1: FunctionComponent<HotelCard1Type> = ({
  className = "",
  matterhornSuitesImage,
  stayDetailsFlex,
  stayDetailsGap,
  stayDetailsRowsMinWidth,
  entireBungalow,
  matterhornSuites,
  night,
  star,
  starIconWidth,
  emptyStar,
  reviews,
  reviewsWidth,
  moreDetailsButtonBorder,
}) => {
  const stayDetailsStyle: CSSProperties = useMemo(() => {
    return {
      flex: stayDetailsFlex,
      gap: stayDetailsGap,
    };
  }, [stayDetailsFlex, stayDetailsGap]);

  const stayDetailsRowsStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: stayDetailsRowsMinWidth,
    };
  }, [stayDetailsRowsMinWidth]);

  const starIconStyle: CSSProperties = useMemo(() => {
    return {
      width: starIconWidth,
    };
  }, [starIconWidth]);

  const reviewsStyle: CSSProperties = useMemo(() => {
    return {
      width: reviewsWidth,
    };
  }, [reviewsWidth]);

  const moreDetailsButtonStyle: CSSProperties = useMemo(() => {
    return {
      border: moreDetailsButtonBorder,
    };
  }, [moreDetailsButtonBorder]);

  return (
    <div className="hotel-card-1">
      <div className="hotel-card">
        <img
          className="matterhorn-suites-image"
          loading="lazy"
          alt=""
          src={matterhornSuitesImage}
        />
        <div className="stay-details" style={stayDetailsStyle}>
          <div className="stay-details-rows" style={stayDetailsRowsStyle}>
            <div className="entire-bungalow">{entireBungalow}</div>
            <h3 className="matterhorn-suites">{matterhornSuites}</h3>
            <div className="night">{night}</div>
          </div>
          <img className="video-icon" loading="lazy" alt="" src="/video.svg" />
        </div>
        <div className="rating">
          <div className="star-parent">
            <img
              className="star-icon"
              alt=""
              src={star}
              style={starIconStyle}
            />
            <div className="empty-star">{emptyStar}</div>
          </div>
          <div className="reviews" style={reviewsStyle}>
            {reviews}
          </div>
        </div>
        <button className="more-details-button" style={moreDetailsButtonStyle}>
          <div className="button1">More details</div>
        </button>
      </div>
    </div>
  );
};

export default HotelCard1;
