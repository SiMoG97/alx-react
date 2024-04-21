import React from "react";
import WidthLogging from "../HOC/WithLogging";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  login: {
    padding: "16px 24px",
    "@media (max-width: 900px)": {
      padding: "0",
    },
  },

  input: {
    margin: "4px",
  },

  button: {
    cursor: "pointer",
    margin: "4px",
  },
  breakLine: {
    display: "none",
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
});

function Login() {
  return (
    <main className={css(styles.login)} role="main">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input
        className={css(styles.input)}
        type="email"
        name="email"
        id="email"
      />
      <br className={css(styles.breakLine)} />
      <label htmlFor="password">Password:</label>
      <input
        className={css(styles.input)}
        type="password"
        name="password"
        id="password"
      />
      <br className={css(styles.breakLine)} />
      <button className={css(styles.button)} type="button">
        OK
      </button>
    </main>
  );
}

export default WidthLogging(Login);
// export default Login;
