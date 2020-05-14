import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

import StepNodeModel from './StepNodeModel';
import StepNodeWidgetContainer from './StepNodeWidgetContainer';

class StepNodeFactory extends AbstractReactFactory {
  constructor() {
    super('step');
  }

  generateReactWidget = event => (
    <StepNodeWidgetContainer engine={this.engine} node={event.model} />
  );

  generateModel() {
    return new StepNodeModel();
  }
}

export default StepNodeFactory;
