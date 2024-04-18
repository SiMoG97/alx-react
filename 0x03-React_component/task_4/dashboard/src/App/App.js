import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import WidthLogging from "../HOC/WithLogging";

const listCourses = [
  {
    id: 1,
    name: "ES6",
    credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    credit: 20,
  },
  {
    id: 3,
    name: "React",
    credit: 40,
  },
];

const listNotifications = [
  {
    id: 1,
    type: "default",
    value: "New course available",
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available",
  },
  {
    id: 3,
    type: "urgent",
    html: { __html: getLatestNotification() },
  },
];

class App extends Component {
  handleKeyPressed = (event) => {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPressed);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPressed);
  }

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "thick solid #e0344a",
            padding: "1rem 0",
          }}
        >
          <Header />
          <Notifications
            displayDrawer={this.state.isShowing}
            listNotifications={listNotifications}
          />
        </div>
        {this.props.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>This paragraph just have a random text init</p>
        </BodySection>
        <Footer />
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut() {},
};

export default App;
