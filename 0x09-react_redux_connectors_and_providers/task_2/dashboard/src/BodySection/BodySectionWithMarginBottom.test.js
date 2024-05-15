import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<BodySectionWithMarginBottom title='something'>{children}</BodySectionWithMarginBottom> tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
  });

  it("checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child component", () => {
    expect(wrapper.find("BodySection").length).toEqual(1);
    expect(wrapper.find("BodySection").props().title).toEqual("test title");

    const children = wrapper.find("BodySection").props().children;
    expect(children.type).toEqual("p");
    expect(children.props.children).toEqual("test children node");
  });
});
