import React, { Fragment } from 'react';
import Todo from './features/todo/Todo';

import {
  Container,
  Header,
  Navbar,
  Content,
  FlexboxGrid,
} from 'rsuite'

import 'rsuite/dist/styles/rsuite-dark.css'

function App() {
  return (
    <Fragment>
      <div className="main">
        <Container>
          <Header>
            <Navbar appearance="inverse">
              <Navbar.Header>
                <p className="navbar-brand">Todo App (Redux Toolkit)</p>
              </Navbar.Header>
            </Navbar>
          </Header>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={24}>
                <Todo/>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
