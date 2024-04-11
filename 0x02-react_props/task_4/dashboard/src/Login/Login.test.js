import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("<Login/> tests", () => {
  const LoginComp = shallow(<Login />);

  it("renders <main className='login'>", () => {
    expect(LoginComp.find("main.login")).toBeDefined();
  });

  it("renders 2 inputs and 2 labels", () => {
    expect(LoginComp.find("input")).toHaveLength(2);
    expect(LoginComp.find("label")).toHaveLength(2);
  });
});
