import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { css } from "aphrodite";
import { AppContext } from "../App/AppContext";

function Footer({ styles }) {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <footer className={css(styles)}>
            <p>
              Copyright {getFullYear()} - {getFooterCopy(true)}{" "}
              {context.user.isLoggedIn && <a href="#">Contact us</a>}
            </p>
          </footer>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Footer;
