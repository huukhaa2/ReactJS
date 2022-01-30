import { ADD_TODO, DELETE_TODO, GET_TODOS, SAVE_TODOS } from './types';

// state: trang thai, danh sach cong viec, coi nhu la todos hien tai cua chung ta
// action: hanh dong
export const todoReducer = (state, action) => {
  // type: loai hanh dong
  // payload: tham so cua hanh dong
  const { type, payload } = action;

  switch (type) {
    // lay data
    case GET_TODOS:
      console.log('getting todos');
      const todos = localStorage.getItem('todos');
      if (todos) state = JSON.parse(todos);
      // return state: bóc todos ra
      return state;

    // luu data
    case SAVE_TODOS:
      console.log('saving todos');
      localStorage.setItem('todos', JSON.stringify(payload.todos));
      return state;

    case ADD_TODO:
      return [...state, payload.todo];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload.id);

    default:
      return state;
  }
};
