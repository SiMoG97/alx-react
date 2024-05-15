import {
  markAsAread,
  setNotificationFilter,
} from "./notificationActionCreators";
import {
  MARK_AS_READ,
  NotificationTypeFilters,
  SET_TYPE_FILTER,
} from "./notificationActionTypes";

describe("notificationActionCreator tests", () => {
  it("markAsAread() tests", () => {
    const expectedResult = { type: MARK_AS_READ, index: 1 };
    const result = markAsAread(1);

    expect(result).toEqual(expectedResult);
  });

  it("setNotificationFilter() tests", () => {
    const expectedResult = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT,
    };
    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);

    expect(result).toEqual(expectedResult);
  });
});
