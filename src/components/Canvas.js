import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';

const S = {
  Container: styled.div`
  flex-grow: 1;
  `,
  CanvasWidget: styled(CanvasWidget)`
    border: 1px solid dodgerblue;
    height: 100%;
  `,
};

const buildNode = type => {
  let node;
  switch (type) {
    case 'step': {
      node = new DefaultNodeModel('step', 'dodgerblue');
      node.addOutPort('next');
      break;
    }
    case 'finish': {
      node = new DefaultNodeModel('finish', 'red');
      node.addInPort('prev.');
      break;
    }
    default: {
      throw new Error(`Unsupported node type: ${type}.`);
    }
  }

  return node;
}

function useForceUpdate(){
  const [value, setValue] = useState(0);
  return () => setValue(value => ++value);
}

const Canvas = ({
  engine,
}) => {
  const forceUpdate = useForceUpdate();
  const handleDrop = event => {
    const type = event.dataTransfer.getData('node-type');
    let node = buildNode(type);
    let mousePosition = engine.getRelativeMousePoint(event);
    node.setPosition(mousePosition);
    engine.getModel().addNode(node);
    forceUpdate();
  };

  return (
    <S.Container
      onDrop={handleDrop}
      onDragOver={event => event.preventDefault()}
    >
      <S.CanvasWidget
        engine={engine}
      />
    </S.Container>
  );
};

export default Canvas;
