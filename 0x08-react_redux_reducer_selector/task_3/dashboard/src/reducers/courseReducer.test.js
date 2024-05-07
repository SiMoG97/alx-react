import {
  courses,
  fetchCourseSuccess,
  selectCourse,
  unSelectCourse,
} from "../actions/courseActionCreators";
import { courseReducer } from "./courseReducer";

describe("courseReducer tests", () => {
  it("Test that the default state returns an empty array", () => {
    const nullAction = () => ({ type: null });
    expect(courseReducer([], nullAction)).toEqual([]);
  });

  it("Test that FETCH_COURSE_SUCCESS returns the data passed", () => {
    const expectedCourses = courses.map((course) => ({
      ...course,
      isSelected: false,
    }));
    expect(courseReducer([], fetchCourseSuccess())).toEqual(expectedCourses);
  });

  it("Test that SELECT_COURSE returns the data with the right item updated", () => {
    const index = 2;
    const initState = courses.map((course) => ({
      ...course,
      isSelected: false,
    }));

    const expectedState = initState.map((course) =>
      course.id === index ? { ...course, isSelected: true } : course
    );

    expect(courseReducer(initState, selectCourse(index))).toEqual(
      expectedState
    );
  });

  it("Test that UNSELECT_COURSE returns the data with the right item updated", () => {
    const index = 2;
    // all courses are selected at initial state
    const initState = courses.map((course) => ({
      ...course,
      isSelected: true,
    }));

    // the course with the id 2 updating its property isSelected to False
    const expectedState = initState.map((course) =>
      course.id === index ? { ...course, isSelected: false } : course
    );

    expect(courseReducer(initState, unSelectCourse(index))).toEqual(
      expectedState
    );
  });
});
