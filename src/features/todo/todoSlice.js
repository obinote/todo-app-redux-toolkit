import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const defaultState = {
  post: {
    id: "",
    task: "",
    description: "",
    dateCreate: dayjs().format("DD-MM-YYYY HH:mm:ss"),
    status: 0,
  },
  list : [
    {
      id: "1",
      task: "Done",
      description: "",
      dateCreate: dayjs().format("DD-MM-YYYY HH:mm:ss"),
      status: 1,
    },
    {
      id: "2",
      task: "Done",
      description: "",
      dateCreate: dayjs().format("DD-MM-YYYY HH:mm:ss"),
      status: 0,
    }
  ],
  popUp : {
    show : false
  }
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    ...defaultState  
  },
  reducers: {
    changeInput : (state, { payload: { name, value } }) => {
      state.post[name] = value;
    },
    addTodo: (state, { payload } )=> {
      state.list.push(payload);
      state.post = defaultState.post;
    },
    toggleTodo: (state, { payload: { id, value } }) => {
      const index = state.list.findIndex(todo => todo.id === id);
      if (index !== -1) state.list[index].status = value
    },
    removeTodo: (state, { payload: { id } }) => {
      const index = state.list.findIndex(todo => todo.id === id);
      if (index !== -1) state.list.splice(index, 1)
    },
    updateTodo: (state, { payload: { id, task, description } }) => {
      const index = state.list.findIndex(todo => todo.id === id);
      if (index !== -1) {
        state.list[index].task = task;
        state.list[index].description = description;
        state.list[index].dateCreate = dayjs().format("DD-MM-YYYY HH:mm:ss");
      }
    },
    togglePopUp: (state, { payload : { isShown, data } }) => {
      state.popUp.show = isShown;
      state.post = isShown ? data : defaultState.post;
    }
  },
});

export const { addTodo, toggleTodo, removeTodo, updateTodo, changeInput, togglePopUp } = todoSlice.actions;

export const todoSelector = ({ todo }) => todo;
export const todoList     = ({ todo }) => todo.list;

export default todoSlice.reducer;