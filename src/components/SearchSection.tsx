import { FunctionComponent } from "react";
import "./SearchSection.scss";

export type SearchSectionType = {
  className?: string;
};

const SearchSection: FunctionComponent<SearchSectionType> = ({
  className = "",
}) => {
  return (
    <div className="search-section">
      <div className="banner-gradient" />
      <img
        className="banner-background"
        alt=""
        src="/banner--background@2x.png"
      />
      <div className="search-container">
        <div className="title">
          <h1 className="lets-explore">{`Let’s explore & travel the world`}</h1>
          <h3 className="find-the-best">
            Find the best destinations and the most popular stays!
          </h3>
        </div>
        <div className="search-form">
          <div className="form-title-group">
            <b className="search-flights">Search flights</b>
            <div className="flight-options">
              <div className="flight-type">
                <div className="radio">
                  <img
                    className="padding-icon"
                    loading="lazy"
                    alt=""
                    src="/padding.svg"
                  />
                  <div className="label">Return</div>
                </div>
                <div className="radio">
                  <img className="padding-icon" alt="" src="/padding-1.svg" />
                  <div className="label1">One-way</div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-inputs-row">
            <div className="inputs-row">
              <div className="departure-field">
                <div className="input">
                  <div className="label-container">
                    <div className="departure">Departure</div>
                  </div>
                  <input
                    className="active"
                    placeholder="Singapore (SIN)"
                    type="text"
                  />
                </div>
              </div>
              <div className="departure-field">
                <div className="input">
                  <div className="label-container">
                    <div className="departure">Arrival</div>
                  </div>
                  <input
                    className="active"
                    placeholder="Los Angeles (LA)"
                    type="text"
                  />
                </div>
              </div>
              <div className="departure-field">
                <div className="input">
                  <div className="label-container2">
                    <div className="departure">Date</div>
                  </div>
                  <div className="active2">
                    <div className="muiautocompletetag">
                      <div className="chip">
                        <div className="container">
                          <div className="avatar">
                            <div className="op">F</div>
                          </div>
                          <div className="typography">
                            <div className="chip1">Chip</div>
                          </div>
                          <img
                            className="cancel-icon"
                            alt=""
                            src="/cancel-4.svg"
                          />
                        </div>
                      </div>
                      <div className="chip">
                        <div className="container">
                          <div className="avatar">
                            <div className="op">F</div>
                          </div>
                          <div className="typography">
                            <div className="chip1">Chip</div>
                          </div>
                          <img
                            className="cancel-icon"
                            alt=""
                            src="/cancel-4.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="div">01/05/2022</div>
                    <img className="cancel-icon" alt="" src="/date.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="button-group">
              <button className="search-flights-button">
                <div className="button">Search flights</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
