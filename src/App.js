import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link, useLocation, Redirect } from 'react-router-dom';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import FancyLink from './components/fancyLink';
import LinksList from './components/LinksList';

const AuthGuardian = ({ isLogged, Authed, Notauth }) => {
  if (isLogged) {
    return <Authed />;
  } else {
    return <Notauth />;
  }
};

function App(props) {
  const { pathname } = useLocation();

  const [isLogged, setLogged] = useState(true);

  // useEffect (()=>{
  //   checkIfAuth () .then (user => setLogged(user))
  // },[]);

  if (pathname === '/') {
    return <Redirect to="/admin" />;
  }
  return (
    <div className="App">
      <LinksList />
      <h1>Hello world</h1>
      <hr />
      <Switch>
        <Route path="/admin" component={Comp2} />
        <Route path="/users/:id?" component={Comp1} />
        <Route
          path="/dashboard/"
          component={(navProps) => (
            <AuthGuardian
              {...navProps}
              isLogged={isLogged}
              Authed={() => <h1>welcome</h1>}
              Notauth={() => <p>error, please sign up</p>}
            />
          )}
        />

        <Route path="/" component={() => <h1> el users page</h1>} />
        <Route component={() => <h1>Error: 404: not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
