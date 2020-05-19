import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CanvasWidget, BaseModel } from '@projectstorm/react-canvas-core';
import { DefaultNodeModel } from '@projectstorm/react-diagrams';

import { createNewStep } from '../../models';

import * as StepNode from '../StepNode';

const S = {
  Container: styled.div`
    flex-grow: 1;
    height: 100%;
  `,
  CanvasWidget: styled(CanvasWidget)`
    height: 100%;
  `,
};

const buildNode = type => {
  let node;
  switch (type) {
    case 'step': {
      node = new StepNode.Model();
      break;
    }
    case 'finish': {
      node = new DefaultNodeModel('Finish', 'red');
      node.addInPort('');
      break;
    }
    default: {
      throw new Error(`Unsupported node type: ${type}.`);
    }
  }

  return node;
}

function useForceUpdate(){
  const [, setValue] = useState(0);
  return () => setValue(value => ++value);
}

const GraphEditor = ({
  engine,
  stepsCount,
  addStep,
  addSelectedStepId,
  removeSelectedStepId,
}) => {
  const forceUpdate = useForceUpdate();

  const handleStepSelect = (
    {
      entity: { options: { id: stepId } },
      isSelected,
    }) => {
      if (isSelected) {
        addSelectedStepId(stepId);
      }
      else {
        removeSelectedStepId(stepId);
      }
  };

  const handleStepEvent = event => {
    if (event.function === "selectionChanged") {
      handleStepSelect(event);
    }
  };

  const handleDrop = event => {
    const type = event.dataTransfer.getData('node-type');
    let node = buildNode(type);
    let mousePosition = engine.getRelativeMousePoint(event);
    node.setPosition(mousePosition);
    
    const nodeModel = engine
      .getModel()
      .addNode(node);

    if (type === 'step') {
      nodeModel
        .registerListener({
          eventDidFire: handleStepEvent,
        });
      
      const stepId = node.options.id;
      addStep(createNewStep(stepId, `New Step ${stepsCount + 1}`));
  
      engine.getModel().clearSelection();
      BaseModel.prototype.setSelected.call(nodeModel, true);
    }

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

export default GraphEditor;
