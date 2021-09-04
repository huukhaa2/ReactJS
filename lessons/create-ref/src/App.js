import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  
  componentDidMount() {// method sẽ được gọi khi DOM đã được tạo
    this.inputElement.current.focus(); // current is DOM input element in line 23
  } 

  render() {
    return (
      <div className='App'>
        <input type='text' ref={this.inputElement} />
      </div>
    );

  }
}

export default App;