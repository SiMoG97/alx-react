import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const rowStyle = StyleSheet.create({
  th: {
    backgroundColor: "#f5f5f5ab",
  },
  td: {
    backgroundColor: "#deb5b545",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell, styles }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <tr>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles, rowStyle.th)} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles, rowStyle.th)}>{textFirstCell}</th>
            <th className={css(styles, rowStyle.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td
            className={css(
              styles,
              isChecked ? rowStyle.rowChecked : rowStyle.td
            )}
          >
            <input type="checkbox" onChange={handleCheckbox} />
            {textFirstCell}
          </td>
          <td
            className={css(
              styles,
              isChecked ? rowStyle.rowChecked : rowStyle.td
            )}
          >
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
