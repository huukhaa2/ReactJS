import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Error from './components/Error';
import './App.css';

const App = () => (
  <Router>
    <Navigation />
    {/* Switch: sẽ chạy lần lượt qua từng route , nếu trùng cái route nào thì nó sẽ dừng lại và không xét cái route nào nữa */}
    <Switch>
      {/* exact khi URL nó '/' đứng 1 mình giống như vầy thì nó mới quét đường dẫn đó*/}
      <Route exact path='/' component={Home} />
      <Route path='/products' component={Products} />
      <Route path='/about' component={About} />
      <Route component={Error} />
    </Switch>
  </Router>
);

export default App;
