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
    const NotificationsComp = shallow(<Notifications displayDrawer={true} />);
    expect(NotificationsComp.exists("NotificationItem")).toBe(true);
  });

  it("renders the right html ", () => {
    const wrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(wrapper.find("li").html()).toEqual(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });

  it("renders this text : 'Here is the list of notifications'", () => {
    const NotificationsComp = shallow(<Notifications displayDrawer={true} />);
    expect(NotificationsComp.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });

  it("Checks that the menu item is being displayed when displayDrawer is false", () => {
    const NotificationsComp = shallow(<Notifications displayDrawer={false} />);

    expect(NotificationsComp.exists("div.menuItem")).toBe(true);
  });

  it("Checks that the div.Notifications is not being displayed when displayDrawer is false", () => {
    const NotificationsComp = shallow(<Notifications displayDrawer={false} />);

    expect(NotificationsComp.exists("div.Notifications")).toBe(false);
  });

  it("Checks that the menu item is being displayed when displayDrawer is true", () => {
    const NotificationsComp = shallow(<Notifications displayDrawer={true} />);

    expect(NotificationsComp.exists("div.menuItem")).toBe(true);
  });

  it("Checks that the div.Notifications is being displayed when displayDrawer is true", () => {
    const NotificationsComp = shallow(<Notifications displayDrawer={true} />);

    expect(NotificationsComp.exists("div.Notifications")).toBe(true);
  });
});
