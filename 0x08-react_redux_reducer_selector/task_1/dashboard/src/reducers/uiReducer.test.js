import { Map } from "immutable";
import { SELECT_COURSE } from "../actions/courseActionTypes";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { initialState, uiReducer } from "./uiReducer";

describe("uiReducer tests", () => {
  it("verifies the state returned by the uiReducer function equals the initial state when no action is passed", () => {
    const newState = uiReducer(initialState, null).toJS();
    expect(newState).toEqual(initialState.toJS());
  });

  it("verifies the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", () => {
    const newState = uiReducer(initialState, SELECT_COURSE).toJS();
    expect(newState).toEqual(initialState.toJS());
  });

  it("verifies the state returned by the uiReducer function equals the initial state when  the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", () => {
    const newState = uiReducer(
      initialState,
      DISPLAY_NOTIFICATION_DRAWER
    ).toJS();

    expect(newState).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true,
    });
  });
});
