import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "./courseActionTypes";

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export const boundSelectCourse = (index) => (dispatch) =>
  dispatch(selectCourse(index));

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

export const boundUnSelectCourse = (index) => (dispatch) =>
  dispatch(unSelectCourse(index));

export const courses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

export function fetchCourseSuccess() {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: courses,
  };
}
