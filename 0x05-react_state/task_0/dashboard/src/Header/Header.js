import React from "react";
import logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";

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
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.img)} src={logo} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </header>
  );
}

export default Header;
