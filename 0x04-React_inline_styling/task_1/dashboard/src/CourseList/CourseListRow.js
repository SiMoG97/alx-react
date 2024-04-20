import React from "react";
import PropTypes from "prop-types";
import { css } from "aphrodite";

const headerRowStyle = {
  backgroundColor: "#f5f5f5ab",
};

const rowStyle = {
  backgroundColor: "#deb5b545",
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell, styles }) {
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles)} style={headerRowStyle} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles)} style={headerRowStyle}>
              {textFirstCell}
            </th>
            <th className={css(styles)} style={headerRowStyle}>
              {textSecondCell}
            </th>
          </>
        )
      ) : (
        <>
          <td className={css(styles)} style={rowStyle}>
            {textFirstCell}
          </td>
          <td className={css(styles)} style={rowStyle}>
            {textSecondCell}
          </td>
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
