import { PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

class FinishPortModel extends PortModel {
  constructor() {
    super({
      type: 'step-finish',
      name: 'step-finish',
      alignment: PortModelAlignment.LEFT,
    });
  }

  createLinkModel() {
    return new DefaultLinkModel();
  }

  canLinkToPort(otherPort) {
    const otherType = otherPort.options.type;

    return otherType === 'step-next' ||
      otherType === 'step-next-true' ||
      otherType === 'step-next-false';
  }
}

export default FinishPortModel;
