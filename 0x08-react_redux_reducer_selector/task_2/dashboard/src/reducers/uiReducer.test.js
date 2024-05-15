import { initialState, uiReducer } from "./uiReducer";
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer } from "../actions/uiActionCreators";

describe("uiReducer tests", () => {
  it("verifies the state returned by the uiReducer function equals the initial state when no action is passed", () => {
    const nullAction = () => ({ type: null });
    const newState = uiReducer(initialState, nullAction()).toJS();
    expect(newState).toEqual(initialState.toJS());
  });

  it("verifies the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", () => {
    const newState = uiReducer(initialState, selectCourse()).toJS();
    expect(newState).toEqual(initialState.toJS());
  });

  it("verifies the state returned by the uiReducer function equals the initial state when  the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", () => {
    const newState = uiReducer(
      initialState,
      displayNotificationDrawer()
    ).toJS();

    expect(newState).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true,
    });
  });
});
