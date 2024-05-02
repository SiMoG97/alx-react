import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("Testing actions", () => {
  it("Calling 'selectCourse(1)' should return: { type: SELECT_COURSE, index: 1 }", () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it("Calling 'unSelectCourse(1)' should return: { type: UNSELECT_COURSE, index: 1 }", () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
