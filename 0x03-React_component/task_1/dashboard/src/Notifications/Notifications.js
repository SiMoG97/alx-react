import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import close_icon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ displayDrawer, listNotifications }) => {
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
              />
            ) : (
              listNotifications.map(({ id, html, type, value }) => (
                <NotificationItem
                  key={id}
                  html={html}
                  type={type}
                  value={value}
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
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
