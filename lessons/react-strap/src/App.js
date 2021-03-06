
import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';

class App extends Component
{
  render()
  {
    return <div className='App'>
      <Button color="primary">primary</Button>{' '}
      <Button color="secondary">secondary</Button>{' '}
      <Button color="success">success</Button>{' '}
      <Button color="info">info</Button>{' '}
      <Button color="warning">warning</Button>{' '}
      <Button color="danger">danger</Button>{' '}
      <Button color="link">link</Button>
    </div>
  }
}

export default App;