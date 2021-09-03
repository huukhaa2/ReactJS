import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';

class App extends Component { // components chỉ render() khi mà props thay đổi hoặc là stage thay đổi 
  constructor() {
    super();
    this.state = {
      newItem: '',
      currentFilter: 'all', // làm thêm all, active, completed
      todoItems: [     // Render a list
        { title:'đi về nhà 1'},
        { title:'đi về nhà 2'},
        { title:'đi về nhà 3'}
      ]
    }
  this.onKeyUp = this.onKeyUp.bind(this);
  this.onChange = this.onChange.bind(this);
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
  

  onKeyUp(event) {
    if (event.keyCode === 13) {  // enter key
      let text = event.target.value; // text là giá trị người dùng khi gõ vào
         if (!text) {   // nếu chưa gõ mà enter  -> return  -> ra giá trị trống
           return;
         }
         text = text.trim();  // xóa đi các dấu các dấu cách cả đầu và cuối
         if (!text) { return; }

         this.setState({   // nếu có sẽ cho vào todoItems
           newItem: '',  // clean đi các giá trị đã nhập
           todoItems: [
             { title: text, isComplete: false },
             ...this.state.todoItems
           ]
         });

    }
  }


  onChange(event) {
    this.setState({ newItem: event.target.value });
  }


  render(){
    const { todoItems , newItem } = this.state;
    if(todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
              <img src={tick} width={32} height={32} />
              <input 
                type='text' 
                placeholder="Add a new item" 
                onChange={this.onChange}  //
                onKeyUp={this.onKeyUp}   // bắt sự kiện khi enter
                value={newItem} />
            </div>
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