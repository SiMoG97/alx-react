import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    margin: "40px",
    "@media (max-width: 900px)": {
      margin: "15px",
    },
  },
});

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.proptypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

BodySectionWithMarginBottom.defaultProps = {
  children: <></>,
};

export default BodySectionWithMarginBottom;
