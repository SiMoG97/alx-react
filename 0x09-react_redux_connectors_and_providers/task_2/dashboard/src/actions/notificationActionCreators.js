import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "./notificationActionTypes";

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export const boundMarkAsAread = (index) => (dispatch) =>
  dispatch(markAsAread(index));

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export const boundSetNotificationFilter = (filter) => (dispatch) =>
  dispatch(setNotificationFilter(filter));

export const notifications = [
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
    value: "New data available",
  },
];

export function fetchNotificationsSuccess() {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: notifications,
  };
}
