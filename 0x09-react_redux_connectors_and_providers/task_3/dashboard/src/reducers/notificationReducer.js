import { Map } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

export const notificationsInitialState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
});

export function notificationReducer(state = notificationsInitialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedNotifications = notificationsNormalizer(
        action.data.map((notification) => ({
          ...notification,
          isRead: false,
        }))
      );

      return state.merge({ notifications: normalizedNotifications });

    case MARK_AS_READ:
      return state.setIn(
        [
          "notifications",
          "entities",
          "notifications",
          `${action.index}`,
          "isRead",
        ],
        true
      );
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    default:
      return state;
  }
}
