import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
// -------------------------------------------
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  loginFailure,
  loginRequest,
  loginSuccess,
  logout,
} from "./uiActionCreators";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
} from "./uiActionTypes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("uiActionsCreator tests", () => {
  it("login(test@test.test,passtest) shouuld equal the expected result", () => {
    const email = "test@test.test";
    const password = "passtest";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email, password },
    });
  });

  it("logout() test", () => {
    expect(logout()).toEqual({
      type: LOGOUT,
    });
  });

  it("displayNotificationDrawer() test", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("hideNotificationDrawer() test", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});

const url = "http://localhost:3000/login-success.json";
const expectedUser = {
  first_name: "Johann",
  last_name: "Salva",
  email: "johann.salva@holberton.nz",
  profile_picture: "http://placehold.it/32x32",
};

// I did my best to use fetch-mock with node-fetch
// but it was a chaos, I tried to so many solution
// but error keeps popin up over and over
// tried to use s 'msw' library instead of fethc-mock
// but it got worse
