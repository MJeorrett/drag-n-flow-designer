import React from 'react';
import { Provider } from 'react-redux';
import styled from '@emotion/styled';

import store from './store';
import Tray from './components/Tray';
import GraphEditor from './components/GraphEditor';
import engine from './diagramEngine';

const S = {
  Container: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  Heading: styled.h1`
    text-align: center;
  `,
  Content: styled.div`
    flex-grow: 1;
    align-items: stretch;
    display: flex;
  `,
};

function App() {
  

  return (
    <Provider store={store}>
      <S.Container>
        <S.Heading>Siccar Storm</S.Heading>
        <S.Content>
          <Tray />
          <GraphEditor engine={engine} />
        </S.Content>
      </S.Container>
    </Provider>
  );
}

export default App;
