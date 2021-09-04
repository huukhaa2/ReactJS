import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/* router bên phía client nên không có req nào gửi lên server cả */
export default function App() {
  return (
    <Router>  {/* bao ngoài */}
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" exact>    {/* exact: khi gõ /about/giá trị rác -> thì nó sẽ không ra */}
            <About />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}