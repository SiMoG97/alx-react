import React from "react";
import ReactDOM from "react-dom";
import { composeWithDevTools } from "@redux-devtools/extension";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import App from "./App/App";
import { initialState } from "./reducers/uiReducer";
import rootReducer, { initialRootState } from "./reducers/rootReducer";

export const store = createStore(
  rootReducer,
  initialRootState,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
