import React from "react";
import WidthLogging from "../HOC/WithLogging";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  login: {
    padding: "16px 24px",
  },

  input: {
    margin: "4px",
  },

  button: {
    cursor: "pointer",
    margin: "4px",
  },
});
function Login() {
  return (
    <main className={css(styles.login)} role="main">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email</label>
      <input
        className={css(styles.input)}
        type="email"
        name="email"
        id="email"
      />
      <label htmlFor="password">Password</label>
      <input
        className={css(styles.input)}
        type="password"
        name="password"
        id="password"
      />
      <button className={css(styles.button)} type="button">
        OK
      </button>
    </main>
  );
}

export default WidthLogging(Login);
// export default Login;
