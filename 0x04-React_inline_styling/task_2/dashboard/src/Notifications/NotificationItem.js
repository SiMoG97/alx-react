import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css } from "aphrodite";

class NotificationItem extends PureComponent {
  render() {
    const { id, type, html, value, markAsRead, styles } = this.props;

    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
        className={css(styles)}
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
