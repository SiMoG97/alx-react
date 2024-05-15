import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
StyleSheetTestUtils.suppressStyleInjection();

describe("<Header /> tests", () => {
  const props = {
    user: null,
    logOut: () => {},
  };

  it("renders without crashing", () => {
    const wrapper = shallow(<Header user={props.user} logout={props.logOut} />);
    expect(wrapper.exists("header")).toBe(true);
  });

  it("renders <h1> and <img> tags", () => {
    const wrapper = shallow(<Header user={props.user} logout={props.logOut} />);
    // const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").length).toEqual(1);
    expect(wrapper.find("img").length).toEqual(1);
  });

  it("Verifies that the logoutSection is not created with the default values", () => {
    const wrapper = shallow(<Header user={props.user} logout={props.logOut} />);
    expect(wrapper.exists("#logoutSection")).toBe(false);
  });

  it("Verify that the logoutSection is created (isLoggedIn is true and an email is set)", () => {
    const props = {
      user: {
        email: "default@user.xyz",
        password: "12345678",
        isLoggedIn: true,
      },
      logOut: () => {},
    };
    const wrapper = shallow(<Header user={props.user} logout={props.logOut} />);

    expect(wrapper.exists("#logoutSection")).toBe(true);
  });

  it("(isLoggedIn is true and an email is set) and the logOut is linked to a spy. Verify that clicking on the link is calling the spy", () => {
    const logOutSpy = jest.fn();
    const props = {
      user: {
        email: "default@user.xyz",
        password: "12345678",
        isLoggedIn: true,
      },
      logOut: logOutSpy,
    };

    const wrapper = shallow(<Header user={props.user} logout={props.logOut} />);

    wrapper.find("span").simulate("click");

    expect(logOutSpy).toHaveBeenCalled();
  });
});
