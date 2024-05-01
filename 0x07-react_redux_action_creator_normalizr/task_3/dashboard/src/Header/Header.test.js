import React from "react";
import { mount, shallow } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/AppContext";
import { user, logOut } from "../App/AppContext";
StyleSheetTestUtils.suppressStyleInjection();

describe("<Header /> tests", () => {
  it("renders without crashing", () => {
    const values = {
      user: { email: "", password: "", isLoggedIn: false },
      logOut: () => {},
    };

    const wrapper = mount(
      <AppContext.Provider value={{ ...values }}>
        <Header />
      </AppContext.Provider>
    );

    expect(wrapper.exists("Header")).toBe(true);
    wrapper.unmount();
  });

  it("renders <h1> and <img> tags", () => {
    const values = {
      user: { email: "", password: "", isLoggedIn: false },
      logOut: () => {},
    };

    const wrapper = mount(
      <AppContext.Provider value={{ ...values }}>
        <Header />
      </AppContext.Provider>
    );
    // const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").length).toEqual(1);
    expect(wrapper.find("img").length).toEqual(1);

    wrapper.unmount();
  });

  it("Verifies that the logoutSection is not created with the default values", () => {
    const values = {
      user: { email: "", password: "", isLoggedIn: false },
      logOut: () => {},
    };

    const wrapper = mount(
      <AppContext.Provider value={values}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists("#logoutSection")).toBe(false);

    wrapper.unmount();
  });

  it("Verify that the logoutSection is created (isLoggedIn is true and an email is set)", () => {
    const values = {
      user: {
        email: "default@user.xyz",
        password: "12345678",
        isLoggedIn: true,
      },
      logOut: () => {},
    };

    const wrapper = mount(
      <AppContext.Provider value={values}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists("#logoutSection")).toBe(true);

    wrapper.unmount();
  });

  it("(isLoggedIn is true and an email is set) and the logOut is linked to a spy. Verify that clicking on the link is calling the spy", () => {
    const logOutSpy = jest.fn();
    const values = {
      user: {
        email: "default@user.xyz",
        password: "12345678",
        isLoggedIn: true,
      },
      logOut: logOutSpy,
    };

    const wrapper = mount(
      <AppContext.Provider value={values}>
        <Header />
      </AppContext.Provider>
    );

    wrapper.find("span").simulate("click");

    expect(logOutSpy).toHaveBeenCalled();

    wrapper.unmount();
  });
});
