import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

import StepNodeModel from './StepNodeModel';
import StepNodeWidget from './StepNodeWidget';

class StepNodeFactory extends AbstractReactFactory {
  constructor() {
    super('step');
  }

  generateReactWidget = event => (
    <StepNodeWidget engine={this.engine} size={50} node={event.model} />
  );

  generateModel() {
    return new StepNodeModel();
  }
}

export default StepNodeFactory;
