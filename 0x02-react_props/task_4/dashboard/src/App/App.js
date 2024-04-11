import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn }) {
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
        <Notifications displayDrawer={true} />
      </div>
      {isLoggedIn ? <CourseList /> : <Login />}
      <Footer />
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
