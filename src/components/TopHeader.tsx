import { FunctionComponent, useCallback } from "react";
import "./TopHeader.scss";

export type TopHeaderType = {
  className?: string;
};

const TopHeader: FunctionComponent<TopHeaderType> = ({ className = "" }) => {
  const onSearchTextClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  const onHotelsTextClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <header className="top-header">
      <div className="top-container">
        <div className="fickleflight-logo">
          <img
            className="symbols-icon"
            loading="lazy"
            alt=""
            src="/symbols.svg"
          />
        </div>
        <div className="navigation-right">
          <div className="navigation-menu">
            <div className="explore">Explore</div>
            <div className="search" onClick={onSearchTextClick}>
              Search
            </div>
            <div className="search" onClick={onHotelsTextClick}>
              Hotels
            </div>
            <div className="offers">Offers</div>
          </div>
          <div className="account-section">
            <img
              className="hamburger-menu-icon"
              alt=""
              src="/hamburgermenu@2x.png"
            />
            <img
              className="notification-bell-icon"
              loading="lazy"
              alt=""
              src="/notification-bell@2x.png"
            />
            <img
              className="profile-picture-icon"
              loading="lazy"
              alt=""
              src="/profile-picture@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
