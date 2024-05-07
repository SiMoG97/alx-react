// import fetch from "node-fetch";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./uiActionTypes";

import fetch from "node-fetch";
// const fetch = (url, init) =>
//   import("node-fetch").then((module) => module.default(url, init));
// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export const boundLogin = (email, password) => (dispatch) =>
  dispatch(login(email, password));

export function logout() {
  return {
    type: LOGOUT,
  };
}

export const boundLogout = () => (dispatch) => dispatch(logout());

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}
export const boundDisplayNotificationDrawer = () => (dispatch) =>
  dispatch(displayNotificationDrawer());

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export const boundHideNotificationDrawer = () => (dispatch) =>
  dispatch(hideNotificationDrawer());

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch("http://localhost:3000/login-success.json")
      .then((res) => {
        // console.log("res: ", res);
        return res.json();
      })
      .then(() => dispatch(loginSuccess()))
      .catch((error) => {
        console.log(error);
        return dispatch(loginFailure());
      });
  };
};
