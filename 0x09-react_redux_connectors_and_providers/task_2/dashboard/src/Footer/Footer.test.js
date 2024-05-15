import React from "react";
import { shallow } from "enzyme";
import { Footer } from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<Footer/> tests", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toBeDefined();
    expect(wrapper.exists("footer")).toBe(true);
  });

  it("renders footer", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("p").text().includes("Copyright")).toBe(true);
  });

  it("Verifies that the link is not displayed when the user is logged out", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists("a")).toBe(false);
  });

  it("Verifies that the link is displayed when the user is logged", () => {
    const user = { email: "test@test.test", password: "test12345678" };
    const wrapper = shallow(<Footer user={user} />);
    expect(wrapper.exists("a")).toBe(true);
    expect(wrapper.find("a").text()).toEqual("Contact us");
  });
});
