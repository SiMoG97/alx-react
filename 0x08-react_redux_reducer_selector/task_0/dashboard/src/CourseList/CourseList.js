import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import WidthLogging from "../HOC/WithLogging";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  th: {
    border: "1px solid #dcdcdc",
  },
  table: {
    border: "1px solid #dcdcdc",
    width: "100%",
    borderCollapse: "collapse",
  },
});

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" className={css(styles.table)}>
      <thead>
        <CourseListRow
          isHeader={true}
          textFirstCell="Available courses"
          styles={styles.th}
        />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
          styles={styles.th}
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow
            isHeader={false}
            textFirstCell="No course available yet"
            textSecondCell="No course available yet"
          />
        ) : (
          listCourses.map(({ id, name, credit }, i) => (
            <CourseListRow
              key={id}
              isHeader={false}
              textFirstCell={name}
              textSecondCell={credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
