import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";

import "./BodySectionWithMarginBottom.css";

export default class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
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
