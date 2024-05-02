import React, { Component } from "react";
import PropTypes from "prop-types";
import WidthLogging from "../HOC/WithLogging";

class BodySection extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="bodySection">
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

BodySection.proptypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

BodySection.defaultProps = {
  children: <></>,
};

export default BodySection;
