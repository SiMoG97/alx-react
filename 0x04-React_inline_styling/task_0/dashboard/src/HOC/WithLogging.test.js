import React from "react";
import WidthLogging from "./WithLogging";
import { mount } from "enzyme";
import Login from "../Login/Login";

describe("WithLogging() HOC testing Component life-cycle", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("WithLogging componentDidMount tests", () => {
    const consoleLog = jest.spyOn(console, "log").mockImplementation();

    const WithLoggingLogin = WidthLogging(() => <Login />);
    const wrapper = mount(<WithLoggingLogin />);

    expect(consoleLog).toHaveBeenCalledWith("Component Login is mounted");
    wrapper.unmount();
    expect(consoleLog).toHaveBeenCalledWith(
      "Component Login is going to unmount"
    );
  });
});
