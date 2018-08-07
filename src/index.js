import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class GistList extends React.Component {
  state = {
    gists: null
  };

  componentDidMount() {
    const API = `https://api.github.com/gists`;
    fetch(API)
      .then(res => res.json())
      .then(gists => {
        this.setState({ gists });
      });
  }

  render() {
    const { gists } = this.state;

    return (
      <ul className="gist-list">
        {gists && gists.map(gist => <li path={`/g/${gist.id}`}>{gist.id}</li>)}
      </ul>
    );
  }
}

class Gist extends React.Component {
  state = {
    gist: null
  };

  render() {
    const { gist } = this.state;

    return <div className="gist">{gist.id}</div>;
  }
}

const user = {
  avatar: "https://avatars0.githubusercontent.com/u/36104?v=4",
  name: "Frank",
  followers: 1234,
  following: 123
};

const UserAvatar = ({ size }) => (
  <img className={`user-avatar ${size || ""}`} alt="avatar" src={user.avatar} />
);

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
  </div>
);

const App = () => (
  <div className="app">
    <Nav />
    <Body />
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
