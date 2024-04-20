import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { css } from "aphrodite";

function Footer({ styles }) {
  console.log(styles);
  return (
    <footer className={css(styles)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
}

export default Footer;
