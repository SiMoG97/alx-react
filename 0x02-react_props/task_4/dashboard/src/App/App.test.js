import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("<App/> tests", () => {
  it("renders <App/> without crashing", () => {
    const AppComp = shallow(<App />);
    expect(AppComp).toBeDefined();
  });

  it("<App/> contain the Notifications component", () => {
    const AppComp = shallow(<App />);
    expect(AppComp.find(<Notifications />)).toBeDefined();
  });

  it("<App/> contain the Header component", () => {
    const AppComp = shallow(<App />);
    expect(AppComp.find(<Header />)).toBeDefined();
  });

  it("<App/> contain the Login component", () => {
    const AppComp = shallow(<App />);
    expect(AppComp.find(<Login />)).toBeDefined();
  });

  it("<App/> contain the Footer component", () => {
    const AppComp = shallow(<App />);
    expect(AppComp.find(<Footer />)).toBeDefined();
  });

  it("Checks that CourseList is not displayed", () => {
    const AppComp = shallow(<App />);
    expect(AppComp.exists("CourseList")).toBe(false);
  });

  it("Checks if 'isLoggedIn === true' the hide <Login /> and show <CourseList />", () => {
    const AppComp = shallow(<App isLoggedIn={true} />);
    expect(AppComp.exists("Login")).toBe(false);
    expect(AppComp.exists("CourseList")).toBe(true);
  });
});
