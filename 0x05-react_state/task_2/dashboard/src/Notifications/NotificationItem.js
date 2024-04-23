import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  li: {
    "@media (max-width: 900px)": {
      padding: "10px 8px",
      borderBottom: "solid 1px black",
    },
  },
  urgent: {
    color: "red",
  },

  default: {
    color: "blue",
  },
});

class NotificationItem extends PureComponent {
  render() {
    const { id, type, html, value, markAsRead } = this.props;

    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
        className={css(
          styles.li,
          type === "default" ? styles.default : styles.urgent
        )}
      >
        {value}
      </li>
    );
  }
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
