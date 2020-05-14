import { AbstractModelFactory } from '@projectstorm/react-canvas-core';

class SimplePortFactory extends AbstractModelFactory {
  constructor(type, cb) {
    super(type);
    this.cb = cb;
  }

  generateModel = event => {
    return this.cb(event.initialConfig);
  }
}

export default SimplePortFactory;
