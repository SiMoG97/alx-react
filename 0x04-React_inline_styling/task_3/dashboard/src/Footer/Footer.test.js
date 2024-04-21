import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<Footer/> tests", () => {
  const FooterComp = shallow(<Footer />);
  it("renders without crashing", () => {
    expect(FooterComp).toBeDefined();
  });

  it("renders footer", () => {
    expect(FooterComp.find("p").text().includes("Copyright")).toBe(true);
  });
});
