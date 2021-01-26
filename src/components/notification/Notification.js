import React from "react";
import PropTypes from "prop-types";
import { NotificationStyled } from "./NotificationStyled";

const Notification = ({ message }) => {
  return (
    <NotificationStyled >
      Whoops, something went wrong: {message}
    </NotificationStyled>
  );
};
export default Notification;


Notification.defaultProps = {
  message: "Network Error",
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
