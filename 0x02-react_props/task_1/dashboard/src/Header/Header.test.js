import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header /> tests", () => {
  it("renders without crashing", () => {
    const HeaderComp = shallow(<Header />);
    expect(HeaderComp).toBeDefined();
  });

  it("renders <h1> and <img> tags", () => {
    const HeaderComp = shallow(<Header />);
    expect(HeaderComp.find("h1")).toBeDefined();
    expect(HeaderComp.find("img")).toBeDefined();
  });
});
