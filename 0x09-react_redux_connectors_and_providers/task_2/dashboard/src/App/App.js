import React, { Component } from "react";
import { connect } from "react-redux";
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
import { AppContext, loggedInUser, user } from "./AppContext";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout,
} from "../actions/uiActionCreators";

export class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPressed = this.handleKeyPressed.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    // ---------------
    // ---------------
    this.state = {
      user,
      listNotifications,
    };
  }

  handleKeyPressed(event) {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      alert("Logging you out");
      this.props.logout();
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPressed);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPressed);
  }

  markNotificationAsRead(id) {
    const prevNotifs = [...this.state.listNotifications];
    const newNotifs = prevNotifs.filter((notif) => notif.id !== id);

    if (prevNotifs.length === newNotifs.length) return;

    if (prevNotifs.every((val) => newNotifs.includes(val))) return;

    this.setState((prev) => ({
      ...prev,
      listNotifications: newNotifs,
    }));
  }

  render() {
    const { listNotifications, user } = this.state;
    const {
      isLoggedIn,
      displayDrawer,
      hideNotificationDrawer,
      displayNotificationDrawer,
      login,
      logout,
    } = this.props;

    return (
      <AppContext.Provider
        value={{
          user,
          logout,
        }}
      >
        <div className={css(styles.body, styles.small)}>
          <div className={css(styles.topSection)}>
            <Header />
            <Notifications
              displayDrawer={displayDrawer}
              listNotifications={listNotifications}
              handleDisplayDrawer={displayNotificationDrawer}
              handleHideDrawer={hideNotificationDrawer}
              markNotificationAsRead={this.markNotificationAsRead}
            />
          </div>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={login} />
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

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,
};

App.proptypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  login: PropTypes.func,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  login: () => {},
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
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
