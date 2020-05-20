import { PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

class StartPortModel extends PortModel {
  constructor() {
    super({
      type: 'step-start',
      name: 'step-start',
      alignment: PortModelAlignment.RIGHT,
    });

    this.setMaximumLinks(1);
  }

  createLinkModel() {
    return new DefaultLinkModel();
  }

  canLinkToPort(otherPort) {
    const existingLinksCount = Object.keys(this.getLinks()).length; // Includes link being created.

    if (existingLinksCount > 1) return false;

    return otherPort.options.type === 'step-prev';
  }
}

export default StartPortModel;
