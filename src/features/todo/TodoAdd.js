import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { todoSelector, addTodo, changeInput } from './todoSlice'

import { 
  Panel,
  Form,
} from 'rsuite';

import InputText from './components/InputText';
import InputTextarea from './components/InputTextarea';
import ButtonSubmit from './components/ButtonSubmit';

export default function AddTodo() {;
  const todo = useSelector(todoSelector);
  const dispatch = useDispatch();

  const onChanged = (data) => {
    dispatch(changeInput(data));
  };

  const onAddTodo = () => {
    let posted = {
      ...todo.post,
      id : dayjs().format("YYYYMMDDHHmmssSSS"),
      dateCreate : dayjs().format("DD-MM-YYYY HH:mm:ss")
    };

    dispatch(addTodo(posted));
  };

  return (<React.Fragment>
    <Panel header={<h3>Add ToDo</h3>} bordered>
      <Form fluid>
        <InputText
          label = "What you want to do?"
          name  = "task"
          value = {todo.post.task}
          onChanged = {onChanged}
        />
        <InputTextarea
          label = "Description"
          name  = "description"
          value = {todo.post.description}
          rows  = {3}
          onChanged = {onChanged}
        />
        <ButtonSubmit
          label = " Add Todo"
          commit = {onAddTodo}
        />
      </Form>
    </Panel>
  </React.Fragment>);
}