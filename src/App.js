import React from 'react';
import { Provider } from 'react-redux';
import styled from '@emotion/styled';
import createEngine, {
  DefaultNodeModel,
  DiagramModel,
  DefaultPortModel,
} from '@projectstorm/react-diagrams';

import store from './store';

import Tray from './components/Tray';
import GraphEditor from './components/GraphEditor';
import * as StepNode from './components/StepNode';
import SimplePortFactory from './components/SimplePortFactory';

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
  const engine = createEngine({
    registerDefaultDeleteItemsAction: false,
  });
  engine.maxNumberPointsPerLink = 0;
  engine.getNodeFactories().registerFactory(new StepNode.Factory());
  engine.getPortFactories().registerFactory(new SimplePortFactory('step', () => new DefaultPortModel()));

  const start = new DefaultNodeModel({
    name: 'Start',
    color: 'green',
  });
  start.setPosition(50, 100);
  start.addOutPort('');

  const end = new DefaultNodeModel({
    name: 'Finish',
    color: 'red',
  });
  end.setPosition(450, 100);
  end.addInPort('');

  const model = new DiagramModel();
  model.addAll(start, end);
  engine.setModel(model);

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
