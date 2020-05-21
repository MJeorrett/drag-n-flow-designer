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
    if (this.options.type === 'step-prev') {
      return null;
    }

    const existingLinksCount = Object.keys(this.getLinks()).length;

    if (existingLinksCount > 0) return null;

    return new DefaultLinkModel();
  }

  canLinkToPort(otherPort) {
    const otherType = otherPort.options.type;

    return otherType === 'step-prev' ||
      otherType === 'step-finish';
  }

  removeAllConnectedLinks() {
    const links = this.getLinks();
    Object.keys(links)
      .forEach(linkId => {
        links[linkId].remove();
      });
  }
}

export default StepPortModel;
