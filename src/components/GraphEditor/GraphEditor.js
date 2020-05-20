import React from 'react';
import styled from '@emotion/styled';
import { CanvasWidget, BaseModel } from '@projectstorm/react-canvas-core';

import { createNewStep, createNewBranchCondition } from '../../models';

import * as StepNode from '../StepNode';
import * as FinishNode from '../FinishNode';

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
      node = new StepNode.Model('nextStep');
      break;
    }
    case 'finish': {
      node = new FinishNode.Model();
      break;
    }
    default: {
      throw new Error(`Unsupported node type: ${type}.`);
    }
  }

  return node;
}

const GraphEditor = ({
  engine,
  stepsCount,
  selectedStepIds,
  addStep,
  addSelectedStepId,
  removeSelectedStepId,
  addSelectedFinishId,
  removeSelectedFinishId,
  closeFieldEditor,
}) => {
  const handleStepSelect = ({ entity, isSelected }) => {
      if (isSelected) {
        addSelectedStepId(entity.options.id);
      }
      else {
        removeSelectedStepId(entity.options.id);
        closeFieldEditor();
      }
  };

  const handleStepEvent = event => {
    if (event.function === "selectionChanged") {
      handleStepSelect(event);
    }
  };

  const handleFinishNodeSelect = ({ entity, isSelected }) => {
    if (isSelected) {
      addSelectedFinishId(entity.options.id);
    }
    else {
      removeSelectedFinishId(entity.options.id);
    }
  };

  const handleFinishNodeEvent = event => {
    if (event.function === "selectionChanged") {
      handleFinishNodeSelect(event);
    }
  }

  const handleDrop = event => {
    const type = event.dataTransfer.getData('node-type');
    let node = buildNode(type);
    let mousePosition = engine.getRelativeMousePoint(event);
    node.setPosition(mousePosition);
    
    const nodeModel = engine
      .getModel()
      .addNode(node);

    if (type === 'step') {
      nodeModel.registerListener({
        eventDidFire: handleStepEvent,
      });
      
      const stepId = node.options.id;
      const newStep = createNewStep(stepId, `New Step ${stepsCount + 1}`);
      addStep(newStep, createNewBranchCondition());
  
      engine.getModel().clearSelection();
      BaseModel.prototype.setSelected.call(nodeModel, true);
    }
    else if (type === 'finish') {
      nodeModel.registerListener({
        eventDidFire: handleFinishNodeEvent,
      });
    };

    engine.repaintCanvas();
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
