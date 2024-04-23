import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import { StyleSheetTestUtils } from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<App/> tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("renders <App/> without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("<App/> contain the Notifications component", () => {
    expect(wrapper.find(<Notifications />)).toBeDefined();
  });

  it("<App/> contain the Header component", () => {
    expect(wrapper.find(<Header />)).toBeDefined();
  });

  it("<App/> contain the Login component", () => {
    expect(wrapper.find(<Login />)).toBeDefined();
  });

  it("<App/> contain the Footer component", () => {
    expect(wrapper.find(<Footer />)).toBeDefined();
  });

  it("Checks that CourseList is not displayed", () => {
    expect(wrapper.exists("CourseList")).toBe(false);
  });

  it("Checks if 'isLoggedIn === true' the hide <Login /> and show <CourseList />", () => {
    const loggedInUser = {
      email: "test@dev.xyz",
      password: "pass1234",
      isLoggedIn: true,
    };

    wrapper.setState((prev) => ({ ...prev, user: { ...loggedInUser } }));
    expect(wrapper.exists("Login")).toBe(false);
    expect(wrapper.exists("CourseList")).toBe(true);
  });

  it(`Verifies that when the keys 'control' and 'h' are pressed the logOut function,
  passed as a state, is called and the alert function is called with the string 'Logging you out'`, () => {
    const loggedInUser = {
      email: "test@dev.xyz",
      password: "pass1234",
      isLoggedIn: true,
    };
    const defaultUser = { email: "", password: "", isLoggedIn: false };

    // const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    wrapper.setState((prev) => ({
      ...prev,
      user: loggedInUser,
    }));

    // here after the state has been updated the user in the state should equal to loggedInUser
    expect(wrapper.state().user).toEqual(loggedInUser);

    const event = { preventDefault: jest.fn(), key: "h", ctrlKey: true };

    wrapper.instance().handleKeyPressed(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith("Logging you out");

    // here after ctrl+h have been pressed the handleKeyPressed should be called in which the this.state.logOut beeing called
    // therefore the state.user should equal to defaultUser which means the user is logged out
    expect(wrapper.state().user).toEqual(defaultUser);

    // logOutMock.mockRestore();
    alertMock.mockRestore();
  });
});

describe("displayDrawer state tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("Verifies that the default state for displayDrawer is false", () => {
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("Verifies that after calling handleDisplayDrawer, the state should now be true", () => {
    wrapper.setState({ displayDrawer: false });
    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("Verifies that after calling handleHideDrawer, the state should now be false", () => {
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("verifies that the logIn function updates the state correctly", () => {
    wrapper.instance().logIn("new@user.com", "testpass123");

    const expectedUser = {
      email: "new@user.com",
      password: "testpass123",
      isLoggedIn: true,
    };
    expect(wrapper.state().user).toEqual(expectedUser);
  });
});
