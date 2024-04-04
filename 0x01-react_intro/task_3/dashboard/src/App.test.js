import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("<App/>", () => {
  test("that App renders without crashing", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper).toBeDefined();
  });

  it("should renders a div with a class 'App-header'", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(".App-header")).toBeDefined();
  });

  it("should renders a div with a class 'App-body'", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(".App-body")).toBeDefined();
  });

  it("should renders a div with a class 'App-footer'", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.find(".App-footer")).toBeDefined();
  });
});
