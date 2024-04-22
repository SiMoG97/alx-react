import React, { Component } from "react";
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleEnableSubmit = this.handleEnableSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
      isLoggedIn: false,
    };
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(e) {
    this.setState(
      (prev) => ({ ...prev, email: e.target.value }),
      this.handleEnableSubmit
    );
  }

  handleChangePassword(e) {
    this.setState(
      (prev) => ({ ...prev, password: e.target.value }),
      this.handleEnableSubmit
    );
  }

  handleEnableSubmit() {
    if (!this.state.email || !this.state.password) {
      this.setState((prev) => ({ ...prev, enableSubmit: false }));
    } else {
      this.setState((prev) => ({ ...prev, enableSubmit: true }));
    }
  }
  render() {
    return (
      <main className={css(styles.login)} role="main">
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            name="email"
            id="email"
            onChange={this.handleChangeEmail}
          />
          <br className={css(styles.breakLine)} />
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
            id="password"
            onChange={this.handleChangePassword}
          />
          <br className={css(styles.breakLine)} />
          <input
            className={css(styles.button)}
            type="submit"
            value="ok"
            disabled={!this.state.enableSubmit}
          />
        </form>
      </main>
    );
  }
}

export default WidthLogging(Login);
// export default Login;
