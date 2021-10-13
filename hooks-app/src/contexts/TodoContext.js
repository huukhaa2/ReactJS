import React, { createContext, useEffect, useReducer } from 'react'; // useReducer manh hon useState
import { todoReducer } from '../reducers/TodoReducer';
import { GET_TODOS, SAVE_TODOS } from '../reducers/types';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  // State
  // const [todos, setTodos] = useState([])

  // useReducer co 2 tham so:
  // tham so thu nhat: 1 cai kho su dung de luu tru tat ca hanh dong
  // tham so thu hai: gia tri khoi diem
  // gia tri tra ve cua useReducer la 1 array:
  // todos: state
  // dispatch: tuong trung cho tat ca hanh dong trong todoReducer
  const [todos, dispatch] = useReducer(todoReducer, []);

  // useEffect
  // hanh dong noi tai component
  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null, // tham so
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: SAVE_TODOS,
      payload: { todos },
    });
  }, [todos]);

  // xuat khau
  const todoContextData = {
    todos,
    // xuat ra dispatch tuong trung cho tat ca hanh dong
    dispatch,
  };

  // return
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
