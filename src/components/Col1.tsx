import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Col1.scss";

export type Col1Type = {
  className?: string;
  parisImage?: string;
  paris?: string;
  destinationOldPrice?: string;

  /** Style props */
  detailsWidth?: CSSProperties["width"];
  destinationOldPriceWidth?: CSSProperties["width"];
};

const Col1: FunctionComponent<Col1Type> = ({
  className = "",
  parisImage,
  paris,
  detailsWidth,
  destinationOldPrice,
  destinationOldPriceWidth,
}) => {
  const detailsStyle: CSSProperties = useMemo(() => {
    return {
      width: detailsWidth,
    };
  }, [detailsWidth]);

  const destinationOldPriceStyle: CSSProperties = useMemo(() => {
    return {
      width: destinationOldPriceWidth,
    };
  }, [destinationOldPriceWidth]);

  return (
    <div className="col-1">
      <div className="pariscard">
        <img
          className="parisimage-icon"
          loading="lazy"
          alt=""
          src={parisImage}
        />
        <div className="destination-details">
          <b className="paris">{paris}</b>
          <div className="details" style={detailsStyle}>
            <div className="from">from</div>
            <div
              className="destination-old-price"
              style={destinationOldPriceStyle}
            >
              {destinationOldPrice}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Col1;
