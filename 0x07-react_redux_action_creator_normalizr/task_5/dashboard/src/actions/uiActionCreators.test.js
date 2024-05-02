import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  logout,
} from "./uiActionCreators";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
} from "./uiActionTypes";

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
