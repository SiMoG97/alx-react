import React, { Component } from "react";
import logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

class Header extends Component {
  render() {
    return (
      <div>
        <header className={css(styles.header)}>
          <img className={css(styles.img)} src={logo} alt="logo" />
          <h1 className={css(styles.h1)}>School dashboard</h1>
        </header>
        {this.context.user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {this.context.user.email}{" "}
            <span onClick={this.context.logOut} className={css(styles.logOut)}>
              (logOut)
            </span>
          </section>
        )}
      </div>
    );
  }
}

Header.contextType = AppContext;

export default Header;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    color: "#e0344a",
    alignItems: "center",
  },

  img: {
    width: "144px",
  },

  h1: {
    margin: "0",
  },
  logOut: {
    fontStyle: "italic",
    color: "red",
    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
    },
  },
});
