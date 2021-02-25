import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { 
  Modal, 
  Panel,
  Form,
  Button
} from 'rsuite';

import { 
  togglePopUp,
  todoSelector,
  updateTodo,
  changeInput,
} from '../todoSlice';

import InputText from './InputText';
import InputTextarea from './InputTextarea';

const ModalEdit = ({ size, title }) => {
  const dispatch = useDispatch();
  const todo = useSelector(todoSelector);

  const modalClose = () => {
    dispatch(togglePopUp({ isShown : false }));
  }

  const todoUpdate = () => {
    dispatch(updateTodo(todo.post));
    modalClose();
  }

  const onChanged = (data) => {
    dispatch(changeInput(data));
  };

  return (<React.Fragment>
    <Modal size={size} show={todo.popUp.show} onHide={modalClose}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Panel>
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
          </Form>
        </Panel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={todoUpdate} appearance="primary">
          Save
        </Button>
        <Button onClick={modalClose} appearance="default">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  </React.Fragment>);
}

export default ModalEdit;