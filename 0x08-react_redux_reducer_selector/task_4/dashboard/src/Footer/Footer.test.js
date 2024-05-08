import React from "react";
import { mount, shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext, loggedInUser, user } from "../App/AppContext";

StyleSheetTestUtils.suppressStyleInjection();

describe("<Footer/> tests", () => {
  // const wrapper = shallow(<Footer />);
  it("renders without crashing", () => {
    const wrapper = mount(<Footer />);
    expect(wrapper).toBeDefined();
    expect(wrapper.exists("footer")).toBe(true);
    wrapper.unmount();
  });

  it("renders footer", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("p").text().includes("Copyright")).toBe(true);
    wrapper.unmount();
  });

  it("Verifies that the link is not displayed when the user is logged out within the context", () => {
    // user.isLoggedin: false
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.exists("a")).toBe(false);
    wrapper.unmount();
  });

  it("Verifies that the link is displayed when the user is logged in within the context", () => {
    // user.isLoggedin: true
    const wrapper = mount(
      <AppContext.Provider value={{ user: loggedInUser, logOut: () => {} }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.exists("a")).toBe(true);
    expect(wrapper.find("a").text()).toEqual("Contact us");

    wrapper.unmount();
  });
});
