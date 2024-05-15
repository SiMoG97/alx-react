import React from "react";
import { mount, shallow } from "enzyme";
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
    expect(wrapper.find("input")).toHaveLength(3);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});

describe("controlled form <Login /> form tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Login />);
  });

  it("Verifies that the submit button is disabled by default", () => {
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it("Verifies that after changing the value of the two inputs, the button is enabled", () => {
    const emailInput = wrapper.find("input[type='email']");
    const passwordInput = wrapper.find("input[type='password']");

    emailInput.simulate("change", { target: { value: "test@example.com" } });
    passwordInput.simulate("change", { target: { value: "testpassword" } });

    const submitButton = wrapper.find("input[type='submit']");

    expect(submitButton.props().disabled).toEqual(false);
  });
});
