import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";

describe("<App/> tests", () => {
  const AppComp = shallow(<App />);

  it("renders <App/> without crashing", () => {
    expect(AppComp).toBeDefined();
  });

  it("<App/> contain the Notifications component", () => {
    expect(AppComp.find(<Notifications />)).toBeDefined();
  });

  it("<App/> contain the Header component", () => {
    expect(AppComp.find(<Header />)).toBeDefined();
  });

  it("<App/> contain the Login component", () => {
    expect(AppComp.find(<Login />)).toBeDefined();
  });

  it("<App/> contain the Footer component", () => {
    expect(AppComp.find(<Footer />)).toBeDefined();
  });
});
