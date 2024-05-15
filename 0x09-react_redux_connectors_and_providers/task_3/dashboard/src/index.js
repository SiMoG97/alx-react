import React from "react";
import ReactDOM from "react-dom";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import App from "./App/App";
import { initialState, uiReducer } from "./reducers/uiReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  uiReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

// composeWithDevTools(applyMiddleware(thunk))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
