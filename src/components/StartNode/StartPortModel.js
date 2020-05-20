import { PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

class StartPortModel extends PortModel {
  constructor() {
    super({
      type: 'step-start',
      name: 'step-start',
      alignment: PortModelAlignment.RIGHT,
    });
  }

  createLinkModel = () => new DefaultLinkModel();
}

export default StartPortModel;
