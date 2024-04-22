import React from "react";
import Notifications from "./Notifications";
import { mount, shallow } from "enzyme";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<Notifications />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders the right html ", () => {
    const NotificationItemWrapper = shallow(
      <NotificationItem html={{ __html: "<u>test</u>" }} />
    );
    expect(NotificationItemWrapper.find("li")).toBeDefined();
    expect(NotificationItemWrapper.find("li").html()).toContain("<u>test</u>");
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
    expect(wrapper.exists("div.menuItem")).toBe(false);
  });

  it("renders this text : 'Here is the list of notifications'", () => {
    expect(wrapper.find("p").text()).toBe("Here is the list of notifications");
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

  let wrapper;
  beforeEach(() => {
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

describe("<Notifications displayDrawe={true} listNotifications={list}/> mount rendering", () => {
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

  // let wrapper;
  beforeEach(() => {});

  afterEach(() => {
    jest.restoreAllMocks();
    // wrapper.unmount();
  });

  it("verifies that when updating the props of the component with the same list, the component doesn't rerender", () => {
    const newListSameLen = listNotifications;

    const renderSpy = jest
      .spyOn(Notifications.prototype, "render")
      .mockImplementation();

    // first mount, render function is going to be called
    const wrapper = mount(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    // updating listNotifications prop but the render function will not be called
    // because the length of the new list is the same as the old one
    wrapper.setProps({ listNotifications: newListSameLen });
    expect(renderSpy).toHaveBeenCalledTimes(1);

    const longerList = [
      ...listNotifications,
      {
        id: 4,
        type: "urgent",
        value: "the latest added value",
      },
    ];
    // now the render function will be called because the new list is longer than the old one
    // therefor the render count will increase to 2
    wrapper.setProps({ listNotifications: longerList });
    expect(renderSpy).toHaveBeenCalledTimes(2);
  });
});
