import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { initialState, uiReducer } from "./reducers/uiReducer";
import { thunk } from "redux-thunk";

export const store = createStore(
  uiReducer,
  initialState,
  applyMiddleware(thunk)
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
