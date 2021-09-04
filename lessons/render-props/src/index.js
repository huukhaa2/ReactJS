import React from 'react';
import ReactDOM from 'react-dom';

import List from './components/List';
import Counter from './components/Counter';


const data = ['A', 'B', 'C'];

function App() {
  return(
    <div className='App'>
      <List data={data} render={item => <div>{item}</div>} />
      <List data={data} render={item => <div>- {item}</div>} />
      <Counter>
        {//cho ra dữ liệu || tiêu thụ dữ liệu
            (count) => <h1>{ count }</h1>
        }
      </Counter>
    </div>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);