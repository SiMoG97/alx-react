import { Map } from "immutable";
import rootReducer from "./rootReducer";

describe("rootReducer tests", () => {
  it("Tests the root reducer’s initial state for the rootReducer", () => {
    const state = rootReducer(undefined, { type: "SOMETHING_RANDOM" });

    expect(state.courses).toBeInstanceOf(Map);
    expect(state.notifications).toBeInstanceOf(Map);
    expect(state.ui).toBeInstanceOf(Map);
  });
});
