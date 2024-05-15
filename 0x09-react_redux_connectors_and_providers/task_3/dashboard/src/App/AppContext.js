import { createContext } from "react";

export const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export const loggedInUser = {
  email: "test@tata.cc",
  password: "asdfqwer",
  isLoggedIn: true,
};

export function logOut() {
  // user.isLoggedIn = false;
}

export const AppContext = createContext({ user, logOut });
