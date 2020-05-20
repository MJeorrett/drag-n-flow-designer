import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

import FinishNodeModel from './FinishNodeModel';
import FinishNodeWidget from './FinishNodeWidgetContainer';

class FinishNodeFactory extends AbstractReactFactory {
  constructor() {
    super('step-finish');
  }

  generateReactWidget = event => (
    <FinishNodeWidget engine={this.engine} node={event.model} />
  );

  generateModel() {
    return new FinishNodeModel();
  }
}

export default FinishNodeFactory;
