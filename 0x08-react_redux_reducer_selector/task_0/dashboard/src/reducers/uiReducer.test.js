import { SELECT_COURSE } from "../actions/courseActionTypes";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { uiReducer } from "./uiReducer";

describe("uiReducer tests", () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it("verifies the state returned by the uiReducer function equals the initial state when no action is passed", () => {
    expect(uiReducer(initialState, null)).toEqual(initialState);
  });

  it("verifies the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", () => {
    expect(uiReducer(initialState, SELECT_COURSE)).toEqual(initialState);
  });

  it("verifies the state returned by the uiReducer function equals the initial state when  the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", () => {
    expect(uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER)).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});
