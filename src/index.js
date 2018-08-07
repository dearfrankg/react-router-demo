import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

const user = {
  avatar: "https://avatars0.githubusercontent.com/u/36104?v=4",
  name: "Frank",
  followers: 1234,
  following: 123
};

const UserAvatar = ({ size }) => (
  <img className={`user-avatar ${size || ""}`} alt="avatar" src={user.avatar} />
);

const GistList = () => (
  <ul className="gist-list">
    {gists && gists.map(o => <Link path={`/g/${gist.id}`}>{gist.id}</Link>)}
  </ul>
);

const Gist = () => <div className="gist">{gist.id}</div>;

const Sidebar = () => (
  <div className="sidebar">
    <GistList />
  </div>
);

const Content = () => (
  <div className="content">
    <Gist />
  </div>
);

const Nav = () => (
  <div className="nav">
    <UserAvatar size="small" />
  </div>
);

const Body = () => (
  <div className="body">
    <Sidebar />
    <Content />
  </div>
);

const App = () => (
  <div className="app">
    <Nav />
  </div>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
