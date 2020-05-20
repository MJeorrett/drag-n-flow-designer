import { NodeModel } from '@projectstorm/react-diagrams';

import FinishPortModel from './FinishPortModel';

class FinishNodeModel extends NodeModel {
  constructor() {
    super({
      type: 'step-finish',
      name: 'step-finish',
    });
    this.addPort(new FinishPortModel());
  }
}

export default FinishNodeModel;
