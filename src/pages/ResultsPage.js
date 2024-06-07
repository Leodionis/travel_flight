import { useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import "./ResultsPage.css";

const ResultsPage = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="results-page">
        <header className="top-header1">
          <div className="top-container1">
            <button
              className="fickleflight-logo1"
              onClick={onFickleflightLogoClick}
            >
              <img className="symbols-icon1" alt="" src="/symbols.svg" />
            </button>
            <div className="navigation-right1">
              <div className="navigation-menu1">
                <div className="explore1" onClick={onExploreTextClick}>
                  Explore
                </div>
                <button className="search1">Search</button>
                <div className="hotels1" onClick={onHotelsTextClick}>
                  Hotels
                </div>
                <button className="offers1">Offers</button>
              </div>
              <div className="account-section1">
                <img
                  className="hamburger-menu-icon1"
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className="notification-bell-icon1"
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className="unsplashd1upkifd04a-icon"
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="search-form-section">
          <div className="search-container1">
            <div className="banner-gradient1" />
            <img
              className="banner-background-icon"
              alt=""
              src="/banner-background@2x.png"
            />
            <div className="search-section1">
              <div className="title1">
                <div className="where-are-you">Where are you off too?</div>
              </div>
              <div className="search-form1">
                <div className="inputs-row1">
                  <div className="input-group">
                    <Autocomplete
                      className="departure-field1"
                      size="medium"
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)Sanya (SYX)",
                      ]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                    />
                  </div>
                  <div className="input-group1">
                    <Autocomplete
                      className="arrival-field1"
                      size="medium"
                      sx={{ width: "100%" }}
                      disablePortal
                      options={[
                        "Clark (CRK)",
                        "Launceston (LST)",
                        "Kalibo (KLO)",
                        "Colombo CMB",
                        "Melbourne (AVV)",
                        "Los Angeles (LA)",
                      ]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Arrival"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Los Angeles (LA)"
                    />
                  </div>
                  <div className="input-group2">
                    <div className="date-field">
                      <DatePicker
                        label="Date"
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue) => {
                          setDateFieldDateTimePickerValue(newValue);
                        }}
                        sx={{}}
                        slotProps={{
                          textField: {
                            variant: "outlined",
                            size: "medium",
                            fullWidth: true,
                            required: false,
                            autoFocus: false,
                            error: false,
                            color: "primary",
                            placeholder: "Date",
                          },
                          openPickerIcon: {
                            component: () => <></>,
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="button-group1">
                  <button className="search-flights-button1">
                    <div className="button9">Search flights</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-results">
          <div className="search-filters">
            <div className="results-summary">
              <div className="results-parent">
                <div className="results">10 out of 177 Results</div>
                <img className="frame-child19" alt="" src="/vector-21.svg" />
              </div>
            </div>
            <div className="stops">
              <b className="results1">Stops</b>
              <FormControlLabel
                className="component-1formcheckbox"
                label="1 Stop"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox1"
                label="2 Stops"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className="booking-options">
              <b className="results2">Booking Options</b>
              <FormControlLabel
                className="component-1formcheckbox2"
                label="Book on Fickleflight"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox3"
                label="Official Airline Websites"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className="flight-experience">
              <b className="results3">Flight Experience</b>
              <FormControlLabel
                className="component-1formcheckbox4"
                label="No overnight flights"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox5"
                label="No long stop-overs"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <img className="seperator-icon" alt="" src="/vector-21.svg" />
            <div className="airlines">
              <b className="results4">Airlines</b>
              <FormControlLabel
                className="component-1formcheckbox6"
                label="Singapore Airlines"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="component-1formcheckbox7"
                label="Qatar Airways"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
          </div>
          <div className="results-section">
            <div className="flight-cards">
              <div className="results5">10 out of 177 Results</div>
              <div className="flight-card">
                <div className="airline-section">
                  <img className="turkish-icon" alt="" src="/turkish.svg" />
                  <div className="singapore-airlines">Turkish Airlines</div>
                </div>
                <div className="flight-details-section">
                  <div className="departure-details">
                    <div className="am">11:35 PM</div>
                    <div className="sin1">SIN</div>
                  </div>
                  <div className="flightduration">
                    <img className="flighticon" alt="" src="/flighticon.svg" />
                    <div className="h-55m-non-stop">33H 10M, 1-stop</div>
                  </div>
                  <div className="arrival-details">
                    <div className="am1">4:45 PM</div>
                    <div className="sin2">LAX</div>
                  </div>
                </div>
                <div className="price-section">
                  <img
                    className="price-section-child"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className="s-730">S$ 723</b>
                </div>
              </div>
              <div className="flight-card1">
                <div className="airline-section1">
                  <img className="sia-icon" alt="" src="/sia.svg" />
                  <div className="singapore-airlines1">Singapore Airlines</div>
                </div>
                <div className="flight-details-section1">
                  <div className="departure-details1">
                    <div className="am2">8:45 PM</div>
                    <div className="sin3">SIN</div>
                  </div>
                  <div className="flightduration1">
                    <img className="flighticon1" alt="" src="/flighticon.svg" />
                    <div className="h-55m-non-stop1">15H 10M, 2-stops</div>
                  </div>
                  <div className="arrival-details1">
                    <div className="am3">7:55 PM</div>
                    <div className="sin4">LAX</div>
                  </div>
                </div>
                <div className="price-section1">
                  <img
                    className="price-section-item"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className="s-7301">S$ 900</b>
                </div>
              </div>
              <div className="flight-card2">
                <div className="airline-section2">
                  <img className="japan-icon" alt="" src="/japan.svg" />
                  <div className="singapore-airlines2">Japan Airlines</div>
                </div>
                <div className="flight-details-section2">
                  <div className="departure-details2">
                    <div className="am4">8:20 PM</div>
                    <div className="sin5">SIN</div>
                  </div>
                  <div className="flightduration2">
                    <img className="flighticon2" alt="" src="/flighticon.svg" />
                    <div className="h-55m-non-stop2">17H 30M, 1-stop</div>
                  </div>
                  <div className="arrival-details2">
                    <div className="am5">9:50 PM</div>
                    <div className="sin6">LAX</div>
                  </div>
                </div>
                <div className="price-section2">
                  <img
                    className="price-section-inner"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className="s-7302">S$ 859</b>
                </div>
              </div>
              <div className="flight-card3">
                <div className="airline-section3">
                  <img className="ana-icon" alt="" src="/ana.svg" />
                  <div className="singapore-airlines3">ANA</div>
                </div>
                <div className="flight-details-section3">
                  <div className="departure-details3">
                    <div className="am6">6:35 PM</div>
                    <div className="sin7">SIN</div>
                  </div>
                  <div className="flightduration3">
                    <img className="flighticon3" alt="" src="/flighticon.svg" />
                    <div className="h-55m-non-stop3">19H 15M, 1-stop</div>
                  </div>
                  <div className="arrival-details3">
                    <div className="am7">9:50 PM</div>
                    <div className="sin8">LAX</div>
                  </div>
                </div>
                <div className="price-section3">
                  <img
                    className="price-section-child1"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className="s-7303">S$ 936</b>
                </div>
              </div>
              <div className="flight-card4">
                <div className="airline-section4">
                  <img
                    className="american-airlines-icon"
                    alt=""
                    src="/americanairlines.svg"
                  />
                  <div className="singapore-airlines4">American Airlines</div>
                </div>
                <div className="flight-details-section4">
                  <div className="departure-details4">
                    <div className="am8">8:20 PM</div>
                    <div className="sin9">SIN</div>
                  </div>
                  <div className="flightduration4">
                    <img className="flighticon4" alt="" src="/flighticon.svg" />
                    <div className="h-55m-non-stop4">17H 30M, 1-stop</div>
                  </div>
                  <div className="arrival-details4">
                    <div className="am9">9:50 PM</div>
                    <div className="sin10">LAX</div>
                  </div>
                </div>
                <div className="price-section4">
                  <img
                    className="price-section-child2"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className="s-7304">S$ 936</b>
                </div>
              </div>
              <div className="flight-card5">
                <div className="airline-section5">
                  <img className="turkish-icon1" alt="" src="/turkish.svg" />
                  <div className="singapore-airlines5">Turkish Airlines</div>
                </div>
                <div className="flight-details-section5">
                  <div className="departure-details5">
                    <div className="am10">11:35 PM</div>
                    <div className="sin11">SIN</div>
                  </div>
                  <div className="flightduration5">
                    <img className="flighticon5" alt="" src="/flighticon.svg" />
                    <div className="h-55m-non-stop5">33H 10M, 1-stop</div>
                  </div>
                  <div className="arrival-details5">
                    <div className="am11">4:45 PM</div>
                    <div className="sin12">LAX</div>
                  </div>
                </div>
                <div className="price-section5">
                  <img
                    className="price-section-child3"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className="s-7305">S$ 673</b>
                </div>
              </div>
              <div className="flight-card6">
                <div className="airline-section6">
                  <img className="japan-icon1" alt="" src="/japan.svg" />
                  <div className="singapore-airlines6">Japan Airlines</div>
                </div>
                <div className="flight-details-section6">
                  <div className="departure-details6">
                    <div className="am12">10:25 PM</div>
                    <div className="sin13">SIN</div>
                  </div>
                  <div className="flightduration6">
                    <img className="flighticon6" alt="" src="/flighticon.svg" />
                    <div className="h-55m-non-stop6">26H 45M, 1-stop</div>
                  </div>
                  <div className="arrival-details6">
                    <div className="am13">9:10 AM</div>
                    <div className="sin14">LAX</div>
                  </div>
                </div>
                <div className="price-section6">
                  <img
                    className="price-section-child4"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <b className="s-7306">S$ 859</b>
                </div>
              </div>
              <div className="primary-button">
                <div className="primary-button-child" />
                <div className="search-flights1">Show more results</div>
              </div>
            </div>
            <div className="recently-booked">
              <div className="recently-booked-title">
                <b className="results6">Recently booked</b>
                <img
                  className="recently-booked-title-child"
                  alt=""
                  src="/vector-22.svg"
                />
              </div>
              <div className="booking-cards">
                <div className="booking-card">
                  <div className="airline-price">
                    <div className="airline">
                      <img
                        className="airlinelogo-icon"
                        alt=""
                        src="/icon1.svg"
                      />
                      <div className="singapore-airlines7">
                        Singapore Airlines
                      </div>
                    </div>
                    <div className="price">$1128</div>
                  </div>
                  <div className="locations">
                    <div className="departure">
                      <div className="depcode">SIN</div>
                      <div className="depname">Singapore</div>
                    </div>
                    <img
                      className="flight-icon"
                      alt=""
                      src="/flight-icon.svg"
                    />
                    <div className="arrival">
                      <div className="arrcode">LAX</div>
                      <div className="arrname">Los Angeles</div>
                    </div>
                  </div>
                  <div className="details6">
                    <div className="class">
                      <img
                        className="class-icon"
                        alt=""
                        src="/class-icon.svg"
                      />
                      <div className="flightclass">Economy</div>
                    </div>
                    <div className="calender-parent">
                      <img
                        className="calender-icon"
                        alt=""
                        src="/calender.svg"
                      />
                      <div className="numpeople">2 Adults</div>
                    </div>
                  </div>
                  <div className="provider">
                    <div className="provider1">
                      <span>{`Booked on `}</span>
                      <span className="expedia">Expedia</span>
                    </div>
                    <div className="timeago">1s ago!</div>
                  </div>
                </div>
                <div className="booking-card1">
                  <div className="airline-price1">
                    <div className="airline1">
                      <img className="icon4" alt="" src="/icon2.svg" />
                      <div className="american-airlines">American Airlines</div>
                    </div>
                    <div className="price1">$1024</div>
                  </div>
                  <div className="locations1">
                    <div className="departure1">
                      <div className="depcode1">SFO</div>
                      <div className="depname1">San Francisco</div>
                    </div>
                    <img
                      className="flight-icon1"
                      alt=""
                      src="/flight-icon.svg"
                    />
                    <div className="arrival1">
                      <div className="arrcode1">SIN</div>
                      <div className="arrname1">Singapore</div>
                    </div>
                  </div>
                  <div className="details7">
                    <div className="class1">
                      <img
                        className="class-icon1"
                        alt=""
                        src="/class-icon.svg"
                      />
                      <div className="flightclass1">First Class</div>
                    </div>
                    <div className="calender-group">
                      <img
                        className="calender-icon1"
                        alt=""
                        src="/calender.svg"
                      />
                      <div className="numpeople1">1 Adults</div>
                    </div>
                  </div>
                  <div className="provider2">
                    <div className="provider3">
                      <span>{`Booked on `}</span>
                      <span className="kayak">Kayak</span>
                    </div>
                    <div className="timeago1">2s ago!</div>
                  </div>
                </div>
                <div className="booking-card2">
                  <div className="airline-price2">
                    <div className="airline2">
                      <img className="icon5" alt="" src="/icon3.svg" />
                      <div className="japan-airlines">Japan Airlines</div>
                    </div>
                    <div className="div40">$2996</div>
                  </div>
                  <div className="locations2">
                    <div className="departure2">
                      <div className="phx">PHX</div>
                      <div className="phoenix">Phoenix</div>
                    </div>
                    <img
                      className="flight-icon2"
                      alt=""
                      src="/flight-icon.svg"
                    />
                    <div className="arrival2">
                      <div className="dxb">DXB</div>
                      <div className="dubai">Dubai</div>
                    </div>
                  </div>
                  <div className="details8">
                    <div className="class2">
                      <img
                        className="class-icon2"
                        alt=""
                        src="/class-icon.svg"
                      />
                      <div className="economy">Economy</div>
                    </div>
                    <div className="calender-container">
                      <img
                        className="calender-icon2"
                        alt=""
                        src="/calender.svg"
                      />
                      <div className="adults">3 Adults</div>
                    </div>
                  </div>
                  <div className="provider4">
                    <div className="booked-on-skyscanner-container">
                      <span>{`Booked on `}</span>
                      <span className="skyscanner">Skyscanner</span>
                    </div>
                    <div className="s-ago">3s ago!</div>
                  </div>
                </div>
                <div className="show-more">
                  <div className="show-more1">Show more</div>
                  <img className="icon-back" alt="" src="/icon--back@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-section1">
          <div className="footer-section2">
            <div className="newsletter-form-section">
              <img
                className="newsletter-section-background"
                alt=""
                src="/newsletter-section-background@2x.png"
              />
              <div className="subscribe-form">
                <div className="form-header1">
                  <b className="form-title-subtext1">
                    subscribe to our newsletter
                  </b>
                  <b className="form-title1">Get weekly updates</b>
                </div>
                <div className="form1">
                  <div className="form-text1">
                    <div className="fill-in-your1">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="form-fields1">
                    <div className="destination-name-input1">
                      <TextField
                        className="input2"
                        color="primary"
                        label="Your name"
                        size="medium"
                        variant="outlined"
                        type="text"
                        sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                      />
                    </div>
                    <div className="name-input1">
                      <TextField
                        className="input3"
                        color="primary"
                        label="Email address"
                        size="medium"
                        variant="outlined"
                        type="text"
                        sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                      />
                    </div>
                  </div>
                  <button className="button10">
                    <div className="unstyledbutton1">
                      <div className="button11">submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="footer2">
              <div className="fickleflight-bio1">
                <img className="logo-icon2" alt="" src="/logo.svg" />
                <div className="fickle-flight-is1">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <div className="social-icons1">
                  <img
                    className="facebook-icon"
                    alt=""
                    src="/entyposocialfacebookwithcircle.svg"
                  />
                  <img
                    className="twitter-icon"
                    alt=""
                    src="/entyposocialtwitterwithcircle.svg"
                  />
                  <img
                    className="instagram-icon"
                    alt=""
                    src="/entyposocialinstagramwithcircle.svg"
                  />
                </div>
              </div>
              <div className="seperator" />
              <div className="footer-links1">
                <div className="company4">
                  <div className="about-us2">About Us</div>
                  <div className="company5">Company</div>
                  <div className="news1">News</div>
                  <div className="careers1">Careers</div>
                  <div className="how-we-work2">How we work</div>
                </div>
                <div className="support2">
                  <div className="account1">Account</div>
                  <div className="support3">Support</div>
                  <div className="support-center1">Support Center</div>
                  <div className="faq2">FAQ</div>
                  <div className="accessibility1">Accessibility</div>
                </div>
                <div className="more2">
                  <div className="covid-advisory1">Covid Advisory</div>
                  <div className="more3">More</div>
                  <div className="airline-fees1">Airline Fees</div>
                  <div className="tips1">Tips</div>
                  <div className="quarantine-rules1">Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ResultsPage;
