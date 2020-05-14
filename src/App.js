import React from 'react';
import styled from '@emotion/styled';
import createEngine, {
  DefaultNodeModel,
  DiagramModel
} from '@projectstorm/react-diagrams';

import Tray from './components/Tray';
import TrayItem from './components/TrayItem';
import Canvas from './components/Canvas';


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
      <S.Content>
        <Tray>
          <TrayItem name="Step" type="step" color="dodgerblue" />
          <TrayItem name="Finish" type="finish" color="red" />
        </Tray>
        <Canvas engine={engine} />
      </S.Content>
    </S.Container>
  );
}

export default App;
