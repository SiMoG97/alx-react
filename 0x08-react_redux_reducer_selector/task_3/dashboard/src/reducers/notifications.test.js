import {
  fetchNotificationsSuccess,
  markAsAread,
  notifications,
  setNotificationFilter,
} from "../actions/notificationActionCreators";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
import {
  notificationReducer,
  notificationsInitialState,
} from "./notificationReducer";

describe("notificationsReducer tests", () => {
  it("Test that the default state returns the expected object", () => {
    const nullAction = () => ({ type: null });
    expect(notificationReducer(notificationsInitialState, nullAction)).toEqual(
      notificationsInitialState
    );
  });

  it("Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed", () => {
    const expectedResult = {
      ...notificationsInitialState,
      notifications: notifications.map((notification) => ({
        ...notification,
        isRead: false,
      })),
    };
    expect(
      notificationReducer(
        notificationsInitialState,
        fetchNotificationsSuccess()
      )
    ).toEqual(expectedResult);
  });

  it("Test that MARK_AS_READ returns the data with the right item updated", () => {
    const index = 2;
    const initState = {
      ...notificationsInitialState,
      notifications: notifications.map((notification) => ({
        ...notification,
        isRead: false,
      })),
    };

    const expectedState = {
      ...initState,
      notifications: initState.notifications.map((notification) =>
        notification.id === index
          ? { ...notification, isRead: true }
          : notification
      ),
    };

    expect(notificationReducer(initState, markAsAread(index))).toEqual(
      expectedState
    );
  });

  it("Test that SET_TYPE_FILTER returns the data with the right item updated", () => {
    const initState = {
      ...notificationsInitialState,
      notifications: notifications.map((notification) => ({
        ...notification,
        isRead: false,
      })),
    };

    const expectedState = {
      ...initState,
      filter: NotificationTypeFilters.URGENT,
    };

    expect(
      notificationReducer(
        initState,
        setNotificationFilter(NotificationTypeFilters.URGENT)
      )
    ).toEqual(expectedState);
  });
});
