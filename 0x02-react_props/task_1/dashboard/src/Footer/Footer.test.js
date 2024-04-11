import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("<Footer/> tests", () => {
  it("renders without crashing", () => {
    const FooterComp = shallow(<Footer />);
    expect(FooterComp).toBeDefined();
  });

  it("renders footer", () => {
    const FooterComp = shallow(<Footer />);
    expect(FooterComp.find("p").text().includes("Copyright")).toBe(true);
  });
});
