import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./RecCard1.scss";

export type RecCard1Type = {
  className?: string;
  unsplash5MV818tzxeo?: string;
  bali?: string;
  d3N?: string;
  holidayOldPrice?: string;

  /** Style props */
  holidayLocationMinWidth?: CSSProperties["minWidth"];
};

const RecCard1: FunctionComponent<RecCard1Type> = ({
  className = "",
  unsplash5MV818tzxeo,
  holidayLocationMinWidth,
  bali,
  d3N,
  holidayOldPrice,
}) => {
  const holidayLocationStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: holidayLocationMinWidth,
    };
  }, [holidayLocationMinWidth]);

  return (
    <div className="rec-card-1">
      <img
        className="unsplash5mv818tzxeo-icon"
        loading="lazy"
        alt=""
        src={unsplash5MV818tzxeo}
      />
      <div className="holiday-details">
        <div className="holiday-content">
          <div className="holiday-location" style={holidayLocationStyle}>
            <div className="bali">{bali}</div>
            <div className="d3n">{d3N}</div>
          </div>
          <div className="holiday-old-price">{holidayOldPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default RecCard1;
