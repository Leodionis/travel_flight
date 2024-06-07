import { useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const onButtonGroupContainerClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  const openMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(true);
  }, []);

  const closeMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(false);
  }, []);

  const openMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(true);
  }, []);

  const closeMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className="homepage">
          <div className="hero-section">
            <header className="top-header">
              <div className="top-container">
                <button className="fickleflight-logo">
                  <img className="symbols-icon" alt="" src="/symbols.svg" />
                </button>
                <div className="navigation-right">
                  <div className="navigation-menu">
                    <button className="explore">Explore</button>
                    <div className="search" onClick={onSearchTextClick}>
                      Search
                    </div>
                    <div className="hotels" onClick={onHotelsTextClick}>
                      Hotels
                    </div>
                    <button className="offers">Offers</button>
                  </div>
                  <div className="account-section">
                    <img
                      className="hamburger-menu-icon"
                      alt=""
                      src="/notification.svg"
                    />
                    <img
                      className="notification-bell-icon"
                      alt=""
                      src="/notification1.svg"
                    />
                    <img
                      className="profile-picture-icon"
                      alt=""
                      src="/top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="search-section">
              <div className="banner-gradient" />
              <img
                className="banner-background"
                alt=""
                src="/banner--background@2x.png"
              />
              <div className="search-container">
                <div className="title">
                  <div className="lets-explore">{`Let’s explore & travel the world`}</div>
                  <div className="find-the-best">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className="search-form">
                  <div className="form-title-group">
                    <b className="search-flights">Search flights</b>
                    <div className="flight-options">
                      <div className="flight-type">
                        <FormControlLabel
                          className="radio"
                          label="Return"
                          labelPlacement="end"
                          control={<Radio size="medium" />}
                        />
                        <FormControlLabel
                          className="radio1"
                          label="One-way"
                          labelPlacement="end"
                          control={
                            <Radio color="primary" checked size="medium" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-inputs-row">
                    <div className="inputs-row">
                      <Autocomplete
                        className="departure-field"
                        size="medium"
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)",
                          "Sanya (SYX)",
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
                      <Autocomplete
                        className="arrival-field"
                        sx={{ width: "100%" }}
                        disablePortal
                        options={[
                          "Clark (CRK)",
                          "Lauceston (LST)",
                          "Kalibo (KLO)",
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
                      <div className="selectoutlined">
                        <DatePicker
                          label="Date"
                          value={selectOutlinedDateTimePickerValue}
                          onChange={(newValue) => {
                            setSelectOutlinedDateTimePickerValue(newValue);
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
                    <div
                      className="button-group"
                      onClick={onButtonGroupContainerClick}
                    >
                      <button className="search-flights-button">
                        <div className="button2">Search flights</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-contents">
            <div className="upcoming-flight-section">
              <div className="upcoming-flight-section1">
                <b className="recent-searches">Recent Searches</b>
                <div className="flight-details">
                  <div className="recent-searches1">
                    <div className="flight-main-container">
                      <div className="to-and-from">
                        <div className="from-details">
                          <b className="sin">SIN</b>
                        </div>
                        <img
                          className="duration-icon"
                          alt=""
                          src="/duration.svg"
                        />
                        <div className="to-details">
                          <b className="lax">LAX</b>
                        </div>
                      </div>
                      <div className="depart-on-7-container">
                        <b>{`Depart on: `}</b>
                        <span>7 Sep 2021</span>
                      </div>
                    </div>
                    <div className="flight-main-container1">
                      <div className="to-and-from1">
                        <div className="from-details1">
                          <b className="my">MY</b>
                        </div>
                        <img
                          className="duration-icon1"
                          alt=""
                          src="/duration.svg"
                        />
                        <div className="to-details1">
                          <b className="dub">DUB</b>
                        </div>
                      </div>
                      <div className="depart-on-9-container">
                        <b>Depart on:</b>
                        <span> 9 Sep 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className="prepare-menu">
                    <div className="prepare-for-your">
                      Prepare for your trip
                    </div>
                    <div className="trip-menus">
                      <div className="hotel">
                        <img
                          className="hotel-icon"
                          alt=""
                          src="/hotel-icon.svg"
                        />
                        <div className="hotel1">Hotel</div>
                      </div>
                      <div className="attractions">
                        <div className="attractions-icon">
                          <div className="background" />
                          <img
                            className="ticket-icon"
                            alt=""
                            src="/ticket.svg"
                          />
                        </div>
                        <div className="attractions1">Attractions</div>
                      </div>
                      <div className="eats">
                        <img
                          className="eats-icon"
                          alt=""
                          src="/eats-icon.svg"
                        />
                        <div className="eats1">Eats</div>
                      </div>
                      <div className="commute">
                        <div className="commute-icon">
                          <div className="background1" />
                          <img className="train-icon" alt="" src="/train.svg" />
                        </div>
                        <div className="commute1">Commute</div>
                      </div>
                      <div className="taxi">
                        <div className="taxi-icon">
                          <div className="background2" />
                          <img className="taxi-icon1" alt="" src="/taxi.svg" />
                        </div>
                        <div className="taxi1">Taxi</div>
                      </div>
                      <div className="movies">
                        <div className="movies-icon">
                          <div className="background3" />
                          <img className="movie-icon" alt="" src="/movie.svg" />
                        </div>
                        <div className="movies1">Movies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pop-destinations-main">
              <div className="destinations-titles">
                <div className="title-container">
                  <b className="plan-your-next">Plan your next trip</b>
                  <b className="most-popular-destinations">
                    Most Popular Destinations
                  </b>
                </div>
                <button className="view-all-top">
                  <div className="view-all-destinations">
                    View all destinations
                  </div>
                  <img
                    className="arrow-right-icon"
                    alt=""
                    src="/arrowright.svg"
                  />
                </button>
              </div>
              <div className="cards-container">
                <button className="col-1">
                  <div className="pariscard">
                    <img
                      className="parisimage-icon"
                      alt=""
                      src="/parisimage@2x.png"
                    />
                    <div className="destination-details">
                      <b className="paris">Paris</b>
                      <div className="details">
                        <div className="div28">$699</div>
                        <div className="from">from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="col-2">
                  <div className="greececard">
                    <img
                      className="greeceimage-icon"
                      alt=""
                      src="/greeceimage@2x.png"
                    />
                    <div className="destination-details1">
                      <b className="greece">Greece</b>
                      <div className="details1">
                        <div className="div29">$1079</div>
                        <div className="from1">from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="col-3">
                  <div className="norwaycard">
                    <img
                      className="norwayimage-icon"
                      alt=""
                      src="/norwayimage@2x.png"
                    />
                    <div className="destination-details2">
                      <b className="norway">Norway</b>
                      <div className="details2">
                        <div className="div30">$895</div>
                        <div className="from2">from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="col-4">
                  <div className="tuscanycard">
                    <img
                      className="tuscanyimage-icon"
                      alt=""
                      src="/tuscanyimage@2x.png"
                    />
                    <div className="destination-details3">
                      <b className="tuscany">Tuscany</b>
                      <div className="details3">
                        <div className="div31">$1245</div>
                        <div className="from3">from</div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="view-all-bottom">
                <div className="view-all-destinations1">
                  View all destinations
                </div>
                <img
                  className="arrow-right-icon1"
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
            <div className="recommended-holidays-container">
              <div className="rec-title">
                <b className="recommended-holidays">Recommended Holidays</b>
                <button className="view-all-holidays-parent">
                  <div className="view-all-holidays">View all holidays</div>
                  <img
                    className="arrow-right-icon2"
                    alt=""
                    src="/arrowright1.svg"
                  />
                </button>
              </div>
              <div className="rec-cards-container">
                <button className="rec-card-1">
                  <img
                    className="unsplash5mv818tzxeo-icon"
                    alt=""
                    src="/unsplash5mv818tzxeo@2x.png"
                  />
                  <div className="holiday-details">
                    <div className="frame-parent22">
                      <div className="bali-parent">
                        <div className="bali">Bali</div>
                        <div className="d3n">4D3N</div>
                      </div>
                      <div className="div32">$899</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-2">
                  <img
                    className="switzerlandimage-icon"
                    alt=""
                    src="/switzerlandimage@2x.png"
                  />
                  <div className="holiday-details1">
                    <div className="card-info">
                      <div className="swiss-parent">
                        <div className="swiss">Swiss</div>
                        <div className="d5n">6D5N</div>
                      </div>
                      <div className="div33">$900</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-3">
                  <img
                    className="boracayimage-icon"
                    alt=""
                    src="/boracayimage@2x.png"
                  />
                  <div className="holiday-details2">
                    <div className="card-info1">
                      <div className="details4">
                        <div className="boracay">Boracay</div>
                        <div className="d4n">5D4N</div>
                      </div>
                      <div className="div34">$699</div>
                    </div>
                  </div>
                </button>
                <button className="rec-card-4">
                  <img
                    className="palawanimage-icon"
                    alt=""
                    src="/palawanimage@2x.png"
                  />
                  <div className="holiday-details3">
                    <div className="card-info2">
                      <div className="details5">
                        <div className="palawan">Palawan</div>
                        <div className="d3n1">4D3N</div>
                      </div>
                      <div className="div35">$789</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="view-all-bottom1">
                <div className="view-all-holidays1">View all holidays</div>
                <img
                  className="arrow-right-icon3"
                  alt=""
                  src="/arrowright1.svg"
                />
              </div>
            </div>
            <div className="popular-stays">
              <div className="popular-stays-header">
                <div className="popular-stays-title">
                  <b className="popular-stays1">Popular Stays</b>
                </div>
                <button
                  className="view-all-stays-button"
                  onClick={onViewAllStaysButtonClick}
                >
                  <div className="view-all-stays">View all stays</div>
                  <img
                    className="arrow-right-icon4"
                    alt=""
                    src="/arrowright2.svg"
                  />
                </button>
              </div>
              <div className="hotel-cards">
                <div className="hotel-card-1">
                  <div className="hotel-card">
                    <img
                      className="matterhorn-suites-image"
                      alt=""
                      src="/matterhorn-suites-image@2x.png"
                    />
                    <div className="stay-details">
                      <div className="stay-details-rows">
                        <div className="entire-bungalow">Entire bungalow</div>
                        <b className="matterhorn-suites">Matterhorn Suites</b>
                        <div className="night">$575/night</div>
                      </div>
                      <img
                        className="video-icon"
                        alt=""
                        src="/video.svg"
                        onClick={openMatterhornPopup}
                      />
                    </div>
                    <div className="rating">
                      <div className="reviews">(60 reviews)</div>
                      <div className="parent5">
                        <div className="div36">4.9</div>
                        <img
                          className="vector-icon12"
                          alt=""
                          src="/vector12.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button">
                      <div className="button3">More details</div>
                    </button>
                  </div>
                </div>
                <div className="hotel-card-2">
                  <div className="hotel-card1">
                    <img
                      className="discovery-shores-image"
                      alt=""
                      src="/discovery-shores-image@2x.png"
                    />
                    <div className="stay-details1">
                      <div className="stay-details-rows1">
                        <div className="story-beachfront-suite">
                          2-Story beachfront suite
                        </div>
                        <b className="discovery-shores">Discovery Shores</b>
                        <div className="night1">$360/night</div>
                      </div>
                      <img
                        className="video-icon1"
                        alt=""
                        src="/video.svg"
                        onClick={openMatterhornPopup1}
                      />
                    </div>
                    <div className="rating1">
                      <div className="reviews1">(116 reviews)</div>
                      <div className="parent6">
                        <div className="div37">4.8</div>
                        <img
                          className="vector-icon13"
                          alt=""
                          src="/vector12.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button1">
                      <div className="button4">More details</div>
                    </button>
                  </div>
                </div>
                <div className="hotel-card-3">
                  <div className="hotel-card2">
                    <img
                      className="arctic-hut-image"
                      alt=""
                      src="/arctic-hut-image@2x.png"
                    />
                    <div className="stay-details2">
                      <div className="stay-details-rows2">
                        <div className="single-deluxe-hut">
                          Single deluxe hut
                        </div>
                        <b className="arctic-hut">{`Arctic Hut `}</b>
                        <div className="night2">$420/night</div>
                      </div>
                      <img
                        className="video-icon2"
                        alt=""
                        src="/video.svg"
                        onClick={openMatterhornPopup2}
                      />
                    </div>
                    <div className="rating2">
                      <div className="reviews2">(78 reviews)</div>
                      <div className="parent7">
                        <div className="div38">4.7</div>
                        <img
                          className="vector-icon14"
                          alt=""
                          src="/vector13.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button2">
                      <div className="button5">More details</div>
                    </button>
                  </div>
                </div>
                <div className="hotel-card-4">
                  <div className="hotel-card3">
                    <img
                      className="lake-louise-image"
                      alt=""
                      src="/lake-louise-image@2x.png"
                    />
                    <div className="stay-details3">
                      <div className="stay-details-rows3">
                        <div className="deluxe-king-room">Deluxe King Room</div>
                        <b className="lake-louise-inn">Lake Louise Inn</b>
                        <div className="night3">$244/night</div>
                      </div>
                      <img
                        className="video-icon3"
                        alt=""
                        src="/video.svg"
                        onClick={openMatterhornPopup3}
                      />
                    </div>
                    <div className="rating3">
                      <div className="reviews3">(63 reviews)</div>
                      <div className="parent8">
                        <div className="div39">4.6</div>
                        <img
                          className="vector-icon15"
                          alt=""
                          src="/vector12.svg"
                        />
                      </div>
                    </div>
                    <button className="more-details-button3">
                      <div className="button6">More details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mobile-view-all-stays">
                <div className="view-all-stays1">View all stays</div>
                <img
                  className="arrow-right-icon5"
                  alt=""
                  src="/arrowright2.svg"
                />
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="subscribe-section">
              <img
                className="subscribe-section-background"
                alt=""
                src="/subscribe-section-background@2x.png"
              />
              <div className="share-your-travels-form">
                <div className="form-header">
                  <b className="form-title-subtext">
                    subscribe to our newsletter
                  </b>
                  <b className="form-title">Get weekly updates</b>
                </div>
                <form className="form">
                  <div className="form-text">
                    <div className="fill-in-your">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="form-fields">
                    <div className="destination-name-input">
                      <div className="input">
                        <div className="inactive">
                          <div className="muiautocompletetag">
                            <div className="chip">
                              <div className="container1">
                                <div className="avatar">
                                  <div className="op">F</div>
                                </div>
                                <div className="typography">
                                  <div className="chip1">Chip</div>
                                </div>
                                <img
                                  className="cancel-icon"
                                  alt=""
                                  src="/cancel.svg"
                                />
                              </div>
                            </div>
                            <div className="chip2">
                              <div className="container2">
                                <div className="avatar1">
                                  <div className="op1">F</div>
                                </div>
                                <div className="typography1">
                                  <div className="chip3">Chip</div>
                                </div>
                                <img
                                  className="cancel-icon1"
                                  alt=""
                                  src="/cancel.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="your-name">Your name</div>
                          <div className="mui-autocomplete-indicator">
                            <div className="iconbutton">
                              <div className="unstylediconbutton">
                                <img
                                  className="close-icon"
                                  alt=""
                                  src="/close.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="arrow">
                            <img className="arrowdropdown-icon" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="name-input">
                      <div className="input1">
                        <div className="inactive1">
                          <div className="muiautocompletetag1">
                            <div className="chip4">
                              <div className="container3">
                                <div className="avatar2">
                                  <div className="op2">F</div>
                                </div>
                                <div className="typography2">
                                  <div className="chip5">Chip</div>
                                </div>
                                <img
                                  className="cancel-icon2"
                                  alt=""
                                  src="/cancel.svg"
                                />
                              </div>
                            </div>
                            <div className="chip6">
                              <div className="container4">
                                <div className="avatar3">
                                  <div className="op3">F</div>
                                </div>
                                <div className="typography3">
                                  <div className="chip7">Chip</div>
                                </div>
                                <img
                                  className="cancel-icon3"
                                  alt=""
                                  src="/cancel.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="email-address">Email address</div>
                          <div className="mui-autocomplete-indicator1">
                            <div className="iconbutton1">
                              <div className="unstylediconbutton1">
                                <img
                                  className="close-icon1"
                                  alt=""
                                  src="/close.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="arrow1">
                            <img className="arrowdropdown-icon1" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="button7">
                    <div className="unstyledbutton">
                      <div className="button8">submit</div>
                    </div>
                  </button>
                </form>
              </div>
            </div>
            <div className="footer1">
              <div className="fickleflight-bio">
                <img className="logo-icon1" alt="" src="/logo.svg" />
                <div className="fickle-flight-is">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <div className="social-icons">
                  <img
                    className="entypo-socialfacebook-with-ci-icon"
                    alt=""
                    src="/entyposocialfacebookwithcircle.svg"
                  />
                  <img
                    className="entypo-socialinstagram-with-c-icon"
                    alt=""
                    src="/entyposocialinstagramwithcircle.svg"
                  />
                  <img
                    className="entypo-socialtwitter-with-cir-icon"
                    alt=""
                    src="/entyposocialtwitterwithcircle.svg"
                  />
                </div>
              </div>
              <div className="footer-child" />
              <div className="footer-links">
                <div className="company2">
                  <div className="about-us1">About Us</div>
                  <div className="company3">Company</div>
                  <div className="news">News</div>
                  <div className="careers">Careers</div>
                  <div className="how-we-work1">How we work</div>
                </div>
                <div className="support">
                  <div className="account">Account</div>
                  <div className="support1">Support</div>
                  <div className="support-center">Support Center</div>
                  <div className="faq1">FAQ</div>
                  <div className="accessibility">Accessibility</div>
                </div>
                <div className="more">
                  <div className="covid-advisory">Covid Advisory</div>
                  <div className="more1">More</div>
                  <div className="airline-fees">Airline Fees</div>
                  <div className="tips">Tips</div>
                  <div className="quarantine-rules">Quarantine Rules</div>
                </div>
              </div>
            </div>
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
        {isMatterhornPopup1Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup1}
          >
            <MatterhornPopup onClose={closeMatterhornPopup1} />
          </PortalPopup>
        )}
        {isMatterhornPopup2Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup2}
          >
            <MatterhornPopup onClose={closeMatterhornPopup2} />
          </PortalPopup>
        )}
        {isMatterhornPopup3Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup3}
          >
            <MatterhornPopup onClose={closeMatterhornPopup3} />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};

export default Homepage;
