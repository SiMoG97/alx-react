import React from "react";
import PropTypes from "prop-types";
import WidthLogging from "../HOC/WithLogging";

function NotificationItem({ id, type, html, value, markAsRead }) {
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    _html: PropTypes.string,
  }),

  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  id: 0,
  type: "default",
  markAsRead: () => {},
};

export default NotificationItem;
