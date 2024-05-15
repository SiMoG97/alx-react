import { combineReducers } from "redux";
import {
  courseReducer,
  initialState as initialCourseState,
} from "./courseReducer";

import {
  notificationReducer,
  initialState as initialNotificationState,
} from "./notificationReducer";

import { uiReducer, initialState as initialUIState } from "./uiReducer";

export const initialRootState = {
  courses: initialCourseState,
  notifications: initialNotificationState,
  ui: initialUIState,
};

const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export default rootReducer;
