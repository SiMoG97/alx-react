import { Map, fromJS } from "immutable";
import {
  courses,
  fetchCourseSuccess,
  selectCourse,
  unSelectCourse,
} from "../actions/courseActionCreators";
import { courseReducer } from "./courseReducer";
import { coursesNormalizer } from "../schema/course";

describe("courseReducer tests", () => {
  it("Test that the default state returns an empty array", () => {
    const nullAction = () => ({ type: null });
    expect(courseReducer(Map([]), nullAction)).toEqual(Map([]));
  });

  it("Test that FETCH_COURSE_SUCCESS returns the data passed", () => {
    const expectedCourses = coursesNormalizer(
      courses.map((course) => ({
        ...course,
        isSelected: false,
      }))
    );
    // console.log(courseReducer(Map([]), fetchCourseSuccess()).toJS());
    expect(courseReducer(Map([]), fetchCourseSuccess())).toEqual(
      Map(expectedCourses)
    );
  });

  it("Test that SELECT_COURSE returns the data with the right item updated", () => {
    const index = 2;
    const fetchedCoursesState = courseReducer(Map([]), fetchCourseSuccess());

    const courseWithIsSelected = courses.map((course) => ({
      ...course,
      isSelected: false,
    }));

    const expectedResult = Map(
      coursesNormalizer(
        courseWithIsSelected.map((course) =>
          course.id === index ? { ...course, isSelected: true } : course
        )
      )
    );

    expect(courseReducer(fetchedCoursesState, selectCourse(index))).toEqual(
      expectedResult
    );
  });

  it("Test that UNSELECT_COURSE returns the data with the right item updated", () => {
    const index = 2;
    const fetchedCoursesState = courseReducer(Map([]), fetchCourseSuccess());

    const courseWithIsSelected = courses.map((course) => ({
      ...course,
      isSelected: false,
    }));
    const expectedResult = Map(
      coursesNormalizer(
        courseWithIsSelected.map((course) =>
          course.id === index ? { ...course, isSelected: false } : course
        )
      )
    );

    expect(courseReducer(fetchedCoursesState, unSelectCourse(index))).toEqual(
      expectedResult
    );
  });
});
