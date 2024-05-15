import {
  fetchNotificationsSuccess,
  markAsAread,
  notifications,
  setNotificationFilter,
} from "../actions/notificationActionCreators";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";
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
    const expectedResult = notificationsInitialState.merge({
      notifications: notificationsNormalizer(
        notifications.map((notification) => ({
          ...notification,
          isRead: false,
        }))
      ),
    });

    expect(
      notificationReducer(
        notificationsInitialState,
        fetchNotificationsSuccess()
      )
    ).toEqual(expectedResult);
  });

  it("Test that MARK_AS_READ returns the data with the right item updated", () => {
    const index = 2;
    const initState = notificationReducer(
      notificationsInitialState,
      fetchNotificationsSuccess()
    );

    expect(
      notificationReducer(initState, markAsAread(index)).toJS().notifications
        .entities.notifications[index]
    ).toEqual({
      id: 2,
      type: "urgent",
      value: "New resume available",
      isRead: true,
    });
  });

  it("Test that SET_TYPE_FILTER returns the data with the right item updated", () => {
    const initState = notificationReducer(
      notificationsInitialState,
      fetchNotificationsSuccess()
    );

    expect(
      notificationReducer(
        initState,
        setNotificationFilter(NotificationTypeFilters.URGENT)
      ).toJS().filter
    ).toEqual(NotificationTypeFilters.URGENT);
  });
});
