import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  List,
  FlexboxGrid, 
  Panel,
  IconButton,
  Icon,
  ButtonToolbar
} from 'rsuite';

import { 
  toggleTodo, 
  togglePopUp,
  removeTodo
} from './todoSlice';

import ModalEdit from './components/ModalEdit';

const styleCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '60px'
};

const titleStyle = {
  paddingBottom: 5,
  whiteSpace: 'nowrap',
  fontWeight: 500
};

const slimText = {
  fontSize: '0.666em',
  color: '#97969B',
  fontWeight: 'lighter',
  paddingBottom: 5
};

export default function TodoList({todos}) {
  const dispatch = useDispatch();
  
  const toggleDone = (id) => {
    dispatch(toggleTodo({ id, value: 1 }));
  };

  const deleteTodo = (id) => {
    dispatch(removeTodo({id}));
  };

  const modalOpen = (data) => {
    dispatch(togglePopUp({ isShown : true, data }));
  }

  return (<React.Fragment>
    <Panel header={<h5>ToDo List</h5>} bordered>
      <List hover>
        {
          todos.filter(list => list.status === 0).map((todo, idx) => {
            return (
              <List.Item key={todo.id} index={idx}>
                <FlexboxGrid>
                  <FlexboxGrid.Item
                    colspan={18}
                    style={{
                      ...styleCenter,
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={titleStyle}>{todo.task}</div>
                    <div style={slimText}>
                      <div>{todo.description}</div>
                    </div>
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item
                      colspan={6}
                      style={{
                        ...styleCenter
                      }}
                    >
                    <ButtonToolbar>
                      <IconButton 
                        icon={<Icon icon="check-circle-o" />}
                        color="green"
                        onClick={() => toggleDone(todo.id)}
                        circle
                      />
                      <IconButton 
                        icon={<Icon icon="pencil" />} 
                        color="blue" 
                        onClick={() => modalOpen(todo)}
                        circle 
                      />
                      <IconButton 
                        icon={<Icon icon="trash" />} 
                        color="red" 
                        circle
                        onClick={() => deleteTodo(todo.id)}
                     />
                    </ButtonToolbar>
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
            )
          })
        }
      </List>
    </Panel>
    <ModalEdit size="md" title="Edit Todo"/>
  </React.Fragment>);
}