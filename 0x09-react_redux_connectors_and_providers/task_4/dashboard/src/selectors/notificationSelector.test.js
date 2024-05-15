import {
  fetchNotificationsSuccess,
  markAsAread,
} from "../actions/notificationActionCreators";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";
import {
  notificationReducer,
  notificationsInitialState,
} from "../reducers/notificationReducer";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";

describe("notificationSelector tests", () => {
  it("test that filterTypeSelected works as expected", () => {
    expect(filterTypeSelected(notificationsInitialState)).toEqual(
      NotificationTypeFilters.DEFAULT
    );
  });
  it("test that getNotifications returns a list of the message entities within the reducer", () => {
    const initState = notificationReducer(
      notificationsInitialState,
      fetchNotificationsSuccess()
    );

    expect(getNotifications(initState)).toEqual(
      initState.getIn(["notifications", "entities", "notifications"])
    );
  });
  it("test that getUnreadNotifications return a list of the message entities within the reducer", () => {
    let state = notificationReducer(
      notificationsInitialState,
      fetchNotificationsSuccess()
    );

    state = notificationReducer(state, markAsAread(1));
    state = notificationReducer(state, markAsAread(2));

    const unredNotifs = getUnreadNotifications(state);

    // state has 3 items two of them has isRead equals true
    expect(state.getIn(["notifications", "result"]).length).toEqual(3);
    // which means unreadNotifs is just 1
    expect(unredNotifs.size).toEqual(1);
    expect(unredNotifs.getIn(["3", "isRead"])).toEqual(false);
    expect(
      state.getIn(["notifications", "entities", "notifications", "3"])
    ).toEqual(unredNotifs.get("3"));
  });
});
