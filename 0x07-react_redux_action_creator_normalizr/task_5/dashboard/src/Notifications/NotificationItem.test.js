import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<NotificationItem /> tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotificationItem />);
  });

  it("checks if NotificationItem renders without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("check if by passing dummy type and value props, it renders the correct html (for example: type=“default” and value=“test”)", () => {
    wrapper.setProps({ type: "default", value: "test" });
    expect(wrapper.html()).toContain("default");
    expect(wrapper.find("li").text()).toBe("test");
  });

  it("Verify that by passing a dummy html prop, it renders the correct html (for example: html={{ __html: '<u>test</u>' }}", () => {
    wrapper.setProps({ html: { __html: "<u>test</u>" } });
    expect(wrapper.html()).toContain("<u>test</u>");
  });

  it("Checks that when simulating a click on the NotificationItem Component, the markAsReadSpy is called with the right ID argument", () => {
    const markAsReadSpy = jest.fn();
    const id = 2;

    wrapper.setProps({
      id,
      type: "default",
      value: "something good",
      markAsRead: markAsReadSpy,
    });
    wrapper.simulate("click");
    expect(markAsReadSpy).toHaveBeenCalledWith(id);

    markAsReadSpy.mockRestore();
  });
});
