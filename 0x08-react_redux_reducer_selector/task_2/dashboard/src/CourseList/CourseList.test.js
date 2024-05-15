import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<CourseList /> Tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CourseList />);
  });
  it("renders CourseList component without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders the 3 different rows", () => {
    expect(wrapper.find("CourseListRow")).toHaveLength(3);
  });

  it("renders correctly if you pass an empty array or if you don't pass the listCourses property", () => {
    expect(wrapper.find("CourseListRow").last().props().textFirstCell).toEqual(
      "No course available yet"
    );
    wrapper.setProps({ listCourses: [] });
    expect(wrapper.find("CourseListRow").last().props().textFirstCell).toEqual(
      "No course available yet"
    );
  });
});

describe("<CourseList listCourses={listourses} /> tests", () => {
  let wrapper;
  beforeEach(() => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    wrapper = shallow(<CourseList listCourses={listCourses} />);
  });

  it("verifies that when you pass a list of courses, the component renders it correctly", () => {
    expect(
      wrapper.findWhere((node) => node.props().textFirstCell === "ES6")
    ).toHaveLength(1);
    expect(
      wrapper.findWhere((node) => node.props().textSecondCell === 60)
    ).toHaveLength(1);

    expect(
      wrapper.findWhere((node) => node.props().textFirstCell === "Webpack")
    ).toHaveLength(1);
    expect(
      wrapper.findWhere((node) => node.props().textSecondCell === 20)
    ).toHaveLength(1);

    expect(
      wrapper.findWhere((node) => node.props().textFirstCell === "React")
    ).toHaveLength(1);
    expect(
      wrapper.findWhere((node) => node.props().textSecondCell === 40)
    ).toHaveLength(1);
  });
});
