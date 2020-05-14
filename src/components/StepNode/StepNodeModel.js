import { NodeModel, PortModelAlignment } from '@projectstorm/react-diagrams';

import StepPortModel from './StepPortModel';

class StepNodeModel extends NodeModel {
  constructor(title) {
    super({
      type: 'step',
      title,
    });
    this.addPort(new StepPortModel('next', PortModelAlignment.RIGHT));
    this.addPort(new StepPortModel('prev', PortModelAlignment.LEFT));
  }
}

export default StepNodeModel;
