import React from "react";
import { mount } from "enzyme";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<Login/> tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Login />);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it("renders <main className='login'>", () => {
    expect(wrapper.find("main.login")).toBeDefined();
  });

  it("renders 2 inputs and 2 labels", () => {
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
