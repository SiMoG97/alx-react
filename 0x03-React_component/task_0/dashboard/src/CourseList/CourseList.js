import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import CourseShape from "./CourseShape";

function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
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
