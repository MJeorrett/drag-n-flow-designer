import { NodeModel } from '@projectstorm/react-diagrams';

import StartPortModel from './StartPortModel';

class StartNodeModel extends NodeModel {
  constructor() {
    super({
      type: 'step-start',
      name: 'step-start',
    });
    this.addPort(new StartPortModel());
  }
}

export default StartNodeModel;
