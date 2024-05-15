import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { css } from "aphrodite";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export function Footer({ styles, user }) {
  return (
    <footer className={css(styles)}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}{" "}
        {user && <a href="#">Contact us</a>}
      </p>
    </footer>
  );
}

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get("user"),
  };
};

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(Footer);
