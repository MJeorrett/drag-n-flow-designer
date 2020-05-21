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
    const existingLinksCount = Object.keys(this.getLinks()).length;

    if (existingLinksCount > 0) return null;

    return new DefaultLinkModel();
  }

  canLinkToPort(otherPort) {
    

    return otherPort.options.type === 'step-prev';
  }
}

export default StartPortModel;
