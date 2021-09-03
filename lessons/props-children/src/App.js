import { Component } from 'react';  
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Accordion heading='Heading'>
          Hi, everybody {/* this is a children */}
        </Accordion>
      </div>
    );
  }
}

export default App;
