import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow /> tests", () => {
  it("if isHeader = true, The component renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="this is the first th cell"
      />
    );

    expect(wrapper.find("th")).toHaveLength(1);
    expect(wrapper.find("th").prop("colSpan")).toEqual(2);
    expect(wrapper.find("th").text()).toEqual("this is the first th cell");
  });

  it("if isHeader = true, The component renders two cel.ls when textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="this is the first th cell"
        textSecondCell="this is the second th cell"
      />
    );

    expect(wrapper.find("th")).toHaveLength(2);
    expect(wrapper.find("th").at(0).text()).toEqual(
      "this is the first th cell"
    );
    expect(wrapper.find("th").at(1).text()).toEqual(
      "this is the second th cell"
    );
  });

  it("if isHeader = false, The component renders correctly two td elements within a tr element", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="this is the first td cell"
        textSecondCell="this is the second td cell"
      />
    );

    expect(wrapper.find("td")).toHaveLength(2);
    expect(wrapper.find("td").at(0).text()).toEqual(
      "this is the first td cell"
    );
    expect(wrapper.find("td").at(1).text()).toEqual(
      "this is the second td cell"
    );
  });
});
