import { FunctionComponent } from "react";
import UnstyledButton from "./UnstyledButton";
import "./SubscribeSection.scss";

export type SubscribeSectionType = {
  className?: string;
};

const SubscribeSection: FunctionComponent<SubscribeSectionType> = ({
  className = "",
}) => {
  return (
    <div className="subscribe-section">
      <img
        className="subscribe-section-background"
        alt=""
        src="/subscribe-section-background@2x.png"
      />
      <div className="share-your-travels-form">
        <div className="form-header">
          <b className="form-title-subtext">subscribe to our newsletter</b>
          <h2 className="form-title">Get weekly updates</h2>
        </div>
        <form className="form">
          <div className="form-text">
            <div className="fill-in-your">
              Fill in your details to join the party!
            </div>
          </div>
          <div className="form-fields">
            <div className="form-text">
              <div className="input3">
                <div className="inactive">
                  <div className="muiautocompletetag1">
                    <div className="chip4">
                      <div className="container2">
                        <div className="avatar2">
                          <div className="op2">F</div>
                        </div>
                        <div className="typography2">
                          <div className="chip5">Chip</div>
                        </div>
                        <img
                          className="cancel-icon2"
                          alt=""
                          src="/cancel-4.svg"
                        />
                      </div>
                    </div>
                    <div className="chip4">
                      <div className="container2">
                        <div className="avatar2">
                          <div className="op2">F</div>
                        </div>
                        <div className="typography2">
                          <div className="chip5">Chip</div>
                        </div>
                        <img
                          className="cancel-icon2"
                          alt=""
                          src="/cancel-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    className="your-name"
                    placeholder="Your name"
                    type="text"
                  />
                  <div className="mui-autocomplete-indicator">
                    <div className="iconbutton">
                      <div className="unstylediconbutton">
                        <img className="close-icon" alt="" src="/close.svg" />
                      </div>
                    </div>
                  </div>
                  <img className="arrow-icon" alt="" />
                </div>
              </div>
            </div>
            <div className="form-text">
              <div className="input3">
                <div className="inactive">
                  <div className="muiautocompletetag1">
                    <div className="chip4">
                      <div className="container2">
                        <div className="avatar2">
                          <div className="op2">F</div>
                        </div>
                        <div className="typography2">
                          <div className="chip5">Chip</div>
                        </div>
                        <img
                          className="cancel-icon2"
                          alt=""
                          src="/cancel-4.svg"
                        />
                      </div>
                    </div>
                    <div className="chip4">
                      <div className="container2">
                        <div className="avatar2">
                          <div className="op2">F</div>
                        </div>
                        <div className="typography2">
                          <div className="chip5">Chip</div>
                        </div>
                        <img
                          className="cancel-icon2"
                          alt=""
                          src="/cancel-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <input
                    className="your-name"
                    placeholder="Email address"
                    type="text"
                  />
                  <div className="mui-autocomplete-indicator">
                    <div className="iconbutton">
                      <div className="unstylediconbutton">
                        <img className="close-icon" alt="" src="/close.svg" />
                      </div>
                    </div>
                  </div>
                  <img className="arrow-icon" alt="" />
                </div>
              </div>
            </div>
          </div>
          <button className="button3">
            <UnstyledButton
              iconLeft={false}
              iconRight={false}
              size="Large"
              variant="Contained"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
