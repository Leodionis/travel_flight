import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./HotelsPage.css";

const HotelsPage = () => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onWebScreenClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className="hotels-page">
        <header className="top-header2">
          <div className="top-container2">
            <div
              className="fickleflight-logo2"
              onClick={onFickleflightLogoContainerClick}
            >
              <div className="symbols">
                <img
                  className="web-screen-icon"
                  alt=""
                  src="/webscreen.svg"
                  onClick={onWebScreenClick}
                />
              </div>
            </div>
            <div className="navigation-right2">
              <div className="navigation-menu2">
                <div className="explore2" onClick={onExploreTextClick}>
                  Explore
                </div>
                <div className="search2" onClick={onSearchTextClick}>
                  Search
                </div>
                <button className="hotels2">Hotels</button>
                <button className="offers2">Offers</button>
              </div>
              <div className="account-section2">
                <img
                  className="hamburger-menu-icon2"
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className="notification-bell-icon2"
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className="unsplashd1upkifd04a-icon1"
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="header">
          <div className="banner">
            <img
              className="banner-background1"
              alt=""
              src="/banner-background@2x.png"
            />
            <div className="title2">
              <div className="stays-in-los">Stays in Los Angeles</div>
              <div className="options">
                <div className="pilldefault">
                  <div className="beds">Recommended</div>
                </div>
                <div className="pilldefault1">
                  <div className="beds1">Price</div>
                </div>
                <div className="pilldefault2">
                  <div className="beds2">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-results">
          <div className="results-sumamry">
            <div className="results7">200+ results</div>
            <div className="filters">
              <img className="filters-icon" alt="" src="/filters.svg" />
              <div className="filters1">Filters</div>
            </div>
          </div>
          <div className="results-section1">
            <div className="result-cards-col">
              <div className="results-card">
                <img
                  className="results-image-icon"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="results-details">
                  <div className="results-title">
                    <div className="result-and-video">
                      <div className="king-bed-standard">
                        1 king bed standard
                      </div>
                      <b className="holiday-inn-expre">Holiday Inn Expre...</b>
                      <div className="review">
                        <div className="reviews4">(1,136 reviews)</div>
                        <div className="stars">
                          <div className="div41">4.7</div>
                          <img
                            className="vector-icon16"
                            alt=""
                            src="/vector14.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img className="video-icon4" alt="" src="/video1.svg" />
                  </div>
                  <div className="price-and-cta">
                    <div className="pricing2">
                      <b className="s-286">$S 286</b>
                      <div className="night4">/night</div>
                    </div>
                    <button className="view-details-button">
                      <div className="view-details-button-child" />
                      <div className="search-flights2">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="results-card1">
                <img
                  className="results-image-icon1"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="results-details1">
                  <div className="results-title1">
                    <div className="result">
                      <b className="freehand-los-angeles">
                        Freehand Los Angeles
                      </b>
                      <div className="bed-in-quad">Bed in Quad</div>
                      <div className="review1">
                        <div className="reviews5">(1,941 reviews)</div>
                        <div className="stars1">
                          <div className="div42">4.2</div>
                          <img
                            className="vector-icon17"
                            alt=""
                            src="/vector15.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price-and-cta1">
                    <div className="pricing3">
                      <b className="s-198">$S 198</b>
                      <div className="night5">/night</div>
                    </div>
                    <button className="view-details-button1">
                      <div className="view-details-button-item" />
                      <div className="search-flights3">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="results-card2">
                <img
                  className="results-image-icon2"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="results-details2">
                  <div className="results-title2">
                    <div className="location-and-reviews">
                      <b className="the-westin-bonavent">
                        The Westin Bonavent...
                      </b>
                      <div className="king-city-view">1 King, City view</div>
                      <div className="reviews6">
                        <div className="reviews7">(1,002 reviews)</div>
                        <div className="stars2">
                          <div className="div43">4.1</div>
                          <img
                            className="vector-icon18"
                            alt=""
                            src="/vector15.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price-and-cta2">
                    <div className="pricing4">
                      <b className="s-289">$S 289</b>
                      <div className="night6">/night</div>
                    </div>
                    <button className="view-details-button2">
                      <div className="view-details-button-inner" />
                      <div className="search-flights4">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="results-card3">
                <img
                  className="results-image-icon3"
                  alt=""
                  src="/results-image@2x.png"
                />
                <div className="results-details3">
                  <div className="results-with-video">
                    <div className="results-title3">
                      <div className="deluxe-king">Deluxe King</div>
                      <b className="the-ritz-carlton-l">
                        The Ritz-Carlton, L...
                      </b>
                      <div className="reviews8">
                        <div className="reviews9">(1,136 reviews)</div>
                        <div className="stars3">
                          <div className="div44">4.7</div>
                          <img
                            className="vector-icon19"
                            alt=""
                            src="/vector14.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="feature-video-icon"
                      alt=""
                      src="/video1.svg"
                      onClick={openMatterhornPopup}
                    />
                  </div>
                  <div className="price-and-cta3">
                    <div className="s-286-parent">
                      <b className="s-2861">$S 286</b>
                      <div className="night7">/night</div>
                    </div>
                    <button className="primary-button1">
                      <div className="primary-button-item" />
                      <div className="search-flights5">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <iframe
                className="map"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
              />
            </div>
            <iframe
              className="map1"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
        </div>
        <div className="footer-section3">
          <div className="newsletter-form-section1">
            <img
              className="newsletter-section-background1"
              alt=""
              src="/newsletter-section-background@2x.png"
            />
            <div className="subscribe-form1">
              <div className="form-header2">
                <b className="form-title-subtext2">
                  subscribe to our newsletter
                </b>
                <b className="form-title2">Get weekly updates</b>
              </div>
              <div className="form2">
                <div className="form-text2">
                  <div className="fill-in-your2">
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className="form-fields2">
                  <div className="destination-name-input2">
                    <TextField
                      className="input4"
                      color="primary"
                      label="Your name"
                      size="medium"
                      variant="outlined"
                      type="text"
                      sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                    />
                  </div>
                  <div className="name-input2">
                    <TextField
                      className="input5"
                      color="primary"
                      label="Email address"
                      size="medium"
                      variant="outlined"
                      type="text"
                      sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                    />
                  </div>
                </div>
                <button className="button12">
                  <div className="unstyledbutton2">
                    <div className="button13">submit</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className="footer3">
            <div className="fickleflight-bio2">
              <img className="logo-icon3" alt="" src="/logo.svg" />
              <div className="fickle-flight-is2">
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <div className="social-icons2">
                <img
                  className="facebook-icon1"
                  alt=""
                  src="/entyposocialfacebookwithcircle.svg"
                />
                <img
                  className="twitter-icon1"
                  alt=""
                  src="/entyposocialtwitterwithcircle.svg"
                />
                <img
                  className="instagram-icon1"
                  alt=""
                  src="/entyposocialinstagramwithcircle.svg"
                />
              </div>
            </div>
            <div className="seperator1" />
            <div className="footer-links2">
              <div className="company6">
                <div className="about-us3">About Us</div>
                <div className="company7">Company</div>
                <div className="news2">News</div>
                <div className="careers2">Careers</div>
                <div className="how-we-work3">How we work</div>
              </div>
              <div className="support4">
                <div className="account2">Account</div>
                <div className="support5">Support</div>
                <div className="support-center2">Support Center</div>
                <div className="faq3">FAQ</div>
                <div className="accessibility2">Accessibility</div>
              </div>
              <div className="more4">
                <div className="covid-advisory2">Covid Advisory</div>
                <div className="more5">More</div>
                <div className="airline-fees2">Airline Fees</div>
                <div className="tips2">Tips</div>
                <div className="quarantine-rules2">Quarantine Rules</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelsPage;
