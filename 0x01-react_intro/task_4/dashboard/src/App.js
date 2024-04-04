import logo from "./holbertonLogo.jpg";
import "./App.css";

import { getFooterCopy, getFullYeat } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboards</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">email</label>
        <input type="email" id="email" />
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        Copyright {getFullYeat()} - {getFooterCopy(true)}
      </div>
    </div>
  );
}

export default App;
