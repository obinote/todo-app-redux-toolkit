import React from 'react';
import { useSelector } from 'react-redux';

import { FlexboxGrid, Divider } from 'rsuite';

import AddTodo from './TodoAdd';
import TodoDone from './TodoDone';
import TodoList from './TodoList';

import { todoList } from './todoSlice';

export default function Todo () {
  const listTodo = useSelector(todoList);

  return (
    <React.Fragment>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={12}>
          <AddTodo/>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <Divider></Divider>
      <FlexboxGrid >
        <FlexboxGrid.Item colspan={12}>
          <TodoList todos={listTodo}/>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={12}>
          <TodoDone todos={listTodo}/>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </React.Fragment>
  )
}