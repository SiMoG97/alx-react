import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<Header /> tests", () => {
  const HeaderComp = shallow(<Header />);

  it("renders without crashing", () => {
    expect(HeaderComp).toBeDefined();
  });

  it("renders <h1> and <img> tags", () => {
    expect(HeaderComp.find("h1")).toBeDefined();
    expect(HeaderComp.find("img")).toBeDefined();
  });
});
