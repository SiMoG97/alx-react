import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import { AppContext, logOut, user } from "./AppContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPressed = this.handleKeyPressed.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = { displayDrawer: false, user, logOut: this.logOut };
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleKeyPressed(event) {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      alert("Logging you out");
      this.state.logOut();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPressed);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPressed);
  }

  logIn(email, password) {
    this.setState((prev) => ({
      ...prev,
      user: { email, password, isLoggedIn: true },
    }));
  }

  logOut() {
    this.setState((prev) => ({ ...prev, user }));
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logOut: this.state.logOut,
        }}
      >
        <div className={css(styles.body, styles.small)}>
          <div className={css(styles.topSection)}>
            <Header />
            <Notifications
              displayDrawer={this.state.displayDrawer}
              listNotifications={listNotifications}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
            />
          </div>
          {this.state.user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>This paragraph just have a random text init</p>
          </BodySection>
          <Footer styles={styles.footer} />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;

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

const styles = StyleSheet.create({
  body: {
    margin: 0,
  },
  footer: {
    width: "calc(100% - 16px)",
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    fontStyle: "italic",
    borderTop: "thick solid #e0344a",
  },
  topSection: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "thick solid #e0344a",
    padding: "1rem 0",
  },
});
