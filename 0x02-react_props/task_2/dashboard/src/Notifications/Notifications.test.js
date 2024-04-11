import React from "react";
import Notifications from "./Notifications";
import { shallow, mount } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
  it("should render without crashing", () => {
    const NotificationsComp = shallow(<Notifications />);
    expect(NotificationsComp).toBeDefined();
  });

  it("should render three list items", () => {
    const NotificationsComp = shallow(<Notifications />);
    expect(NotificationsComp.exists("NotificationItem")).toBe(true);
  });

  it("renders the right html ", () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.find("li").html()).toEqual("<li><u>test</u></li>");
  });

  it("renders this text : 'Here is the list of notifications'", () => {
    const NotificationsComp = shallow(<Notifications />);
    expect(NotificationsComp.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });
});
