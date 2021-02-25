import React from 'react';
import { useSelector } from 'react-redux';
import { 
  List, 
  FlexboxGrid, 
  Panel,
  Icon,
  ButtonToolbar,
  IconButton
} from 'rsuite';

import { todoList } from './todoSlice';

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

export default function TodoDone() {
  const listTodo = useSelector(todoList);
  
  return (<React.Fragment>
    <Panel header={<h5>Done</h5>} bordered>
      <List hover>
        {
          listTodo.filter(todo => todo.status === 1).map((todo, idx) => {
            return (
              <List.Item key={todo.id} index={idx}>
                <FlexboxGrid>
                  <FlexboxGrid.Item
                    colspan={4}
                    style={{
                      ...styleCenter
                    }}
                  >
                    <ButtonToolbar>
                      <IconButton 
                        icon={<Icon icon="check" />}
                        color="green"
                        circle
                      />
                    </ButtonToolbar>
                  </FlexboxGrid.Item>
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
                </FlexboxGrid>
              </List.Item>
            )
          })
        }
      </List>
    </Panel>
  </React.Fragment>);
}