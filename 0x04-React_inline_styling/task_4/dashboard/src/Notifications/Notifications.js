import React, { Component } from "react";
import PropTypes from "prop-types";
import close_icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const opacityKeyframes = {
  "50%": {
    opacity: 0.5,
  },

  // to: {
  //   opacity: 1,
  // },
};

const bounceKeyframes = {
  "0%": {
    transform: "translateY(0px)",
  },
  "25%": {
    transform: "translateY(-5px)",
  },
  "50%": {
    transform: "translateY(0)",
  },
  "75%": {
    transform: "translateY(5px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
};

const styles = StyleSheet.create({
  Notifications: {
    position: "relative",
    border: "thin dotted #e0344a",
    backgroundColor: "#fff8f8",

    padding: "16px",
    "@media (max-width: 900px)": {
      fontSize: "20px",
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1,
    },
  },
  ul: {
    "@media (max-width: 900px)": {
      listStyle: "none",
      padding: 0,
    },
  },
  closeButton: {
    display: "inline-block",
    position: "absolute",
    top: "16px",
    right: "16px",
    background: 0,
    border: 0,
    outline: "none",
    cursor: "pointer",
  },

  closeIcon: { width: "8px", height: "8px" },
  menuItem: {
    cursor: "pointer",
    ":hover": {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: "0.33s, 0.166s",
      animationIterationCount: "3",
    },
  },
});

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const { listNotifications, displayDrawer } = this.props;
    return (
      <div>
        {!displayDrawer && (
          <div className={`${css(styles.menuItem)} menuItem`}>
            Your notifications
          </div>
        )}
        {displayDrawer ? (
          <div className={`${css(styles.Notifications)} Notifications`}>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
              {listNotifications.length === 0 ? (
                <NotificationItem
                  type="default"
                  value="No new notification for now"
                  markAsRead={this.markAsRead}
                  id={0}
                />
              ) : (
                listNotifications.map(({ id, html, type, value }) => (
                  <NotificationItem
                    key={id}
                    id={id}
                    html={html}
                    type={type}
                    value={value}
                    markAsRead={this.markAsRead}
                  />
                ))
              )}
            </ul>
            <button
              type="button"
              aria-label="Close"
              onClick={() => console.log("Close button has been clicked")}
              className={css(styles.closeButton)}
            >
              <img src={close_icon} alt="" className={css(styles.closeIcon)} />
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
