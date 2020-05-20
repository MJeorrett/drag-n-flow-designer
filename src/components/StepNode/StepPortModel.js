import { PortModel, DefaultLinkModel } from '@projectstorm/react-diagrams';

class StepPortModel extends PortModel {
  constructor(type, alignment) {
    super({
      type,
      name: type,
      alignment,
    });
  }

  createLinkModel() {
    return new DefaultLinkModel();
  }
  
  canLinkToPort(otherPort) {
    const thisType = this.options.type;
    const otherType = otherPort.options.type;

    if (thisType === 'step-prev') {
      return otherType === 'step-start' ||
        otherType === 'step-next' ||
        otherType === 'step-next-true' ||
        otherType === 'step-next-false';
    }
    else {
      return otherType === 'step-prev' ||
        otherType === 'step-finish';
    }
  }
}

export default StepPortModel;
