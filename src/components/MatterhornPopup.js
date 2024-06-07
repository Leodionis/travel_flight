import PropTypes from "prop-types";
import "./MatterhornPopup.css";

const MatterhornPopup = ({ className = "", onClose }) => {
  return (
    <div className={`matterhorn-popup ${className}`}>
      <iframe
        className="video"
        src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

MatterhornPopup.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default MatterhornPopup;
