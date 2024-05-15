import { Map } from "immutable";

export function filterTypeSelected(state) {
  return state.get("filter");
}

export function getNotifications(state) {
  return state.getIn(["notifications", "entities", "notifications"]);
}

export function getUnreadNotifications(state) {
  const notifications = Map(
    state.getIn(["notifications", "entities", "notifications"])
  );

  return notifications.filter((notification) => !notification.isRead);
}
