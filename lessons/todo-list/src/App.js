import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component { // components chỉ render() khi mà props thay đổi hoặc là stage thay đổi 
  constructor() {
    super();
    this.state = {
      todoItems: [     // Render a list
        { title:'đi về nhà 1', isComplete: true },
        { title:'đi về nhà 2', isComplete: true },
        { title:'đi về nhà 3'}
      ]
  }
}
  
  onItemClicked(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index), // từ 0 đến index
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)  // từ index đến cuối
        ]
      });
    }
  }


  render(){
    const { todoItems } = this.state;
    if(todoItems.length) {
      return (
        <div className="App">
          { todoItems.length && todoItems.map((item, index) => 
              < TodoItem 
                key={index} 
                item={item} 
                onClick={this.onItemClicked(item)} />
            )
          }
        </div>
      );
      }else return(<div className='App'>Nothing here</div>);
    }
}

export default App;