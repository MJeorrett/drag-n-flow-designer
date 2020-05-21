import { NodeModel, PortModelAlignment } from '@projectstorm/react-diagrams';

import StepPortModel from './StepPortModel';

class StepNodeModel extends NodeModel {
  constructor(branchType) {
    super({
      type: 'step',
      branchType,
    });

    this.prevPort = this.addPort(new StepPortModel('step-prev', PortModelAlignment.LEFT));
    this._addPortsForBranchType(branchType);    
  }
  
  _addPortsForBranchType = branchType => {
    switch (branchType) {
      case 'nextStep': {
        this.stepNextPort = this.addPort(new StepPortModel('step-next', PortModelAlignment.RIGHT));
        break;
      }
      case 'field': {
        this.stepNextTruePort = this.addPort(new StepPortModel('step-next-true', PortModelAlignment.RIGHT));
        this.stepNextFalsePort = this.addPort(new StepPortModel('step-next-false', PortModelAlignment.RIGHT));
        break;
      }
      default: {
        throw new Error(`Unsupported branch type ${branchType}.`)
      }
    }
  }

  _clearOutputPorts = () => {
    if (this.stepNextPort) this.removePort(this.stepNextPort);
    if (this.stepNextTruePort) this.removePort(this.stepNextTruePort);
    if (this.stepNextFalsePort) this.removePort(this.stepNextFalsePort);
  }

  setBranchType = newBranchType => {
    const currentBranchType = this.getOptions().branchType;
    if (currentBranchType === newBranchType) return;

    if (currentBranchType === 'nextStep') {
      const nextPort = this.getPort('step-next');
      nextPort.removeAllConnectedLinks();
    }
    else {
      const nextTruePort = this.getPort('step-next-true');
      const nextFalsePort = this.getPort('step-next-false');
      nextTruePort.removeAllConnectedLinks();
      nextFalsePort.removeAllConnectedLinks();
    }

    this._clearOutputPorts();
    this._addPortsForBranchType(newBranchType);
    this.getOptions().branchType = newBranchType;
  }
}

export default StepNodeModel;
