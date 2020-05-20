import React from 'react';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

import StartNodeModel from './StartNodeModel';
import StartNodeWidget from './StartNodeWidget';

class StartNodeFactory extends AbstractReactFactory {
  constructor() {
    super('step-start');
  }

  generateReactWidget = event => (
    <StartNodeWidget engine={this.engine} node={event.model} />
  );

  generateModel() {
    return new StartNodeModel();
  }
}

export default StartNodeFactory;
