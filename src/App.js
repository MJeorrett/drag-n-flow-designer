import React from 'react';
import styled from '@emotion/styled';
import createEngine, {
  DefaultNodeModel,
  DiagramModel
} from '@projectstorm/react-diagrams';

import { CanvasWidget } from '@projectstorm/react-canvas-core';

import Tray from './components/Tray';


const S = {
  Container: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  Heading: styled.h1`
    text-align: center;
  `,
  Body: styled.div`
    display: flex;
    width: 100%;
    flex-grow: 1;
  `,
  CanvasWidget: styled(CanvasWidget)`
    border: 1px solid dodgerblue;
    width: 100%;
  `,
};

function App() {
  const engine = createEngine();
  engine.maxNumberPointsPerLink = 0;

  const start = new DefaultNodeModel({
    name: 'Start',
    color: 'green',
  });
  start.setPosition(0, 100);
  start.addOutPort('');

  const end = new DefaultNodeModel({
    name: 'Finish',
    color: 'red',
  });
  end.setPosition(750, 100);
  end.addInPort('');

  const model = new DiagramModel();
  model.addAll(start, end);
  engine.setModel(model);

  return (
    <S.Container>
      <S.Heading>Siccar Storm</S.Heading>
      <S.Body>
        <Tray />
        <S.CanvasWidget engine={engine} />
      </S.Body>
    </S.Container>
  );
}

export default App;
