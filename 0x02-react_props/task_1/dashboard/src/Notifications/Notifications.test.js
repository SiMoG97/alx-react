import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe("<Notifications />", () => {
  it("should render without crashing", () => {
    const NotificationsComp = shallow(<Notifications />);
    expect(NotificationsComp).toBeDefined();
  });

  it("should render three list items", () => {
    const NotificationsComp = shallow(<Notifications />);
    expect(NotificationsComp.find("li")).toHaveLength(3);
  });

  it("renders this text : 'Here is the list of notifications'", () => {
    const NotificationsComp = shallow(<Notifications />);
    expect(NotificationsComp.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });
});
