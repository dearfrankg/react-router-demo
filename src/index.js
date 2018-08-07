import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const GistList = ({ gists }) => (
  <ul className="gist-list">
    {gists &&
      gists.map((gist, i) => (
        <li key={i}>
          <Link to={`/g/${gist.id}`}>{gist.id}</Link>
        </li>
      ))}
  </ul>
);

const Gist = ({ gists }) => <div className="gist">{gist && gist.id}</div>;

const user = {
  avatar: "https://avatars0.githubusercontent.com/u/36104?v=4",
  name: "Frank",
  followers: 1234,
  following: 123
};

const UserAvatar = ({ size }) => (
  <img className={`user-avatar ${size || ""}`} alt="avatar" src={user.avatar} />
);

const Sidebar = ({ gists }) => (
  <div className="sidebar">
    <GistList gists={gists} />
  </div>
);

const Content = ({ gists }) => (
  <div className="content">
    <Route exact={true} path="/" render={() => <h1>Welcome</h1>} />
    <Route
      path="/g/:gistId"
      render={({ match }) => (
        <Gist gist={gists.find(g => g.id === match.params.gistId)} />
      )}
    />
  </div>
);

const Nav = () => (
  <div className="nav">
    <UserAvatar size="small" />
  </div>
);

class Body extends React.Component {
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
      <div className="body">
        <Sidebar gists={gists} />
        <Content gists={gists} />
      </div>
    );
  }
}

const App = () => (
  <Router>
    <div className="app">
      <Nav />
      <Body />
    </div>
  </Router>
);

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
