import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

const Nav = () => (
  <div className="app">
    <UserAvatar size="small" />
  </div>
);

const App = () => <div className="app">foo</div>;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
