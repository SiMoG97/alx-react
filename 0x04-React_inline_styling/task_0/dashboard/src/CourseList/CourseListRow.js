import React from "react";
import PropTypes from "prop-types";
import WidthLogging from "../HOC/WithLogging";

const headerRowStyle = {
  backgroundColor: "#f5f5f5ab",
};

const rowStyle = {
  backgroundColor: "#deb5b545",
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th style={headerRowStyle} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th style={headerRowStyle}>{textFirstCell}</th>
            <th style={headerRowStyle}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td style={rowStyle}>{textFirstCell}</td>
          <td style={rowStyle}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
