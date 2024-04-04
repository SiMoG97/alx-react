import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

export function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        aria-label="Close"
        style={{
          float: "right",
          backgroundColor: "transparent",
          border: "none",
          padding: "0 1rem",
        }}
        onClick={() => {
          console.log("Close button has been clicked");
        }}
      >
        <img width={16} height={16} src={closeIcon} alt="close img icon" />
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}
