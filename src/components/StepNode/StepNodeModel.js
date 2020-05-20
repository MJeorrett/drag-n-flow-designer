import { NodeModel, PortModelAlignment } from '@projectstorm/react-diagrams';

import StepPortModel from './StepPortModel';

class StepNodeModel extends NodeModel {
  constructor(branchType) {
    super({
      type: 'step',
      branchType,
    });

    this.addPort(new StepPortModel('step-prev', PortModelAlignment.LEFT));

    switch (branchType) {
      case 'nextStep': {
        this.addPort(new StepPortModel('step-next', PortModelAlignment.RIGHT));
        break;
      }
      case 'field': {
        this.addPort(new StepPortModel('step-next-true', PortModelAlignment.RIGHT));
        this.addPort(new StepPortModel('step-next-false', PortModelAlignment.RIGHT));
        break;
      }
      default: {
        throw new Error(`Unsupported branch type ${branchType}.`)
      }
    }
  }
}

export default StepNodeModel;
