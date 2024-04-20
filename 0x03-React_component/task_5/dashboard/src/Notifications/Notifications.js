import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import close_icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

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
        <div className="menuItem">Your notifications</div>
        {displayDrawer ? (
          <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
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
              style={{
                display: "inline-block",
                position: "absolute",
                top: "16px",
                right: "16px",
                background: 0,
                border: 0,
                outline: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={close_icon}
                alt=""
                style={{ width: "8px", height: "8px" }}
              />
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