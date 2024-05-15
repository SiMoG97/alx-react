import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";

export class Header extends Component {
  render() {
    const { user, logout } = this.props;
    return (
      <div>
        <header className={css(styles.header)}>
          <img className={css(styles.img)} src={logo} alt="logo" />
          <h1 className={css(styles.h1)}>School dashboard</h1>
        </header>
        {user && (
          <section id="logoutSection">
            Welcome {user.email}{" "}
            <span onClick={logout} className={css(styles.logOut)}>
              (logOut)
            </span>
          </section>
        )}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

const mapDispatchToProps = {
  logout,
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

Header.defaultProps = {
  user: null,
  logout: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

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
