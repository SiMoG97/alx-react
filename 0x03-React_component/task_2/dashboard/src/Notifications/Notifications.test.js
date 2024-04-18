import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

describe("<Notifications />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render three list items", () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.exists("NotificationItem")).toBe(true);
  });

  it("renders the right html ", () => {
    const NotificationItemWrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(NotificationItemWrapper.find("li").html()).toEqual(
      '<li data-notification-type="default"><u>test</u></li>'
    );
  });

  it("renders this text : 'Here is the list of notifications'", () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find("p").text()).toBe("Here is the list of notifications");
  });
});

describe("<Notifications displayDrawe={true} />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
  });

  it("Checks that the div.Notifications is being displayed when displayDrawer is true", () => {
    expect(wrapper.exists("div.Notifications")).toBe(true);
  });

  it("Checks that the menu item is being displayed when displayDrawer is true", () => {
    expect(wrapper.exists("div.menuItem")).toBe(true);
  });
});

describe("<Notifications displayDrawe={false} />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={false} />);
  });

  it("Checks that the menu item is being displayed when displayDrawer is false", () => {
    expect(wrapper.exists("div.menuItem")).toBe(true);
  });

  it("Checks that the div.Notifications is not being displayed when displayDrawer is false", () => {
    expect(wrapper.exists("div.Notifications")).toBe(false);
  });
});

describe("<Notificatoins displayDrawe={true} listNotifications={[] || no list} /> tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
  });

  it("Renders correctly if you pass an empty array or if you don’t pass the listNotifications property", () => {
    expect(wrapper.find("NotificationItem").props().value).toEqual(
      "No new notification for now"
    );

    wrapper.setProps({ listNotifications: [] });
    expect(wrapper.find("NotificationItem").props().value).toEqual(
      "No new notification for now"
    );
  });
});

describe("<Notificatoins displayDrawe={true} listNotifications={listNotifications} /> tests", () => {
  let wrapper;
  beforeEach(() => {
    const listNotifications = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        html: { __html: getLatestNotification() },
      },
    ];

    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
  });

  it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
    expect(wrapper.find("NotificationItem").first().props().value).toEqual(
      "New course available"
    );
  });

  it("Checks if the console prints the right message", () => {
    const notifId = 2;
    const expectedMessage = `Notification ${notifId} has been marked as read`;

    const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

    wrapper.instance().markAsRead(notifId);

    expect(consoleLogSpy).toHaveBeenCalledWith(expectedMessage);

    consoleLogSpy.mockRestore();
  });
});
