import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem /> tests", () => {
  it("checks if NotificationItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);

    expect(wrapper).toBeDefined();
  });

  it("check if by passing dummy type and value props, it renders the correct html (for example: type=“default” and value=“test”)", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toContain("default");
    expect(wrapper.find("li").text()).toBe("test");
  });

  it("Verify that by passing a dummy html prop, it renders the correct html (for example: html={{ __html: '<u>test</u>' }}", () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.html()).toContain("<u>test</u>");
  });
});
