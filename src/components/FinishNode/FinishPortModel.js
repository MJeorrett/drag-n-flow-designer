import { PortModel, DefaultLinkModel, PortModelAlignment } from '@projectstorm/react-diagrams';

class FinishPortModel extends PortModel {
  constructor() {
    super({
      type: 'step-finish',
      name: 'step-finish',
      alignment: PortModelAlignment.RIGHT,
    });
  }

  createLinkModel = () => new DefaultLinkModel();
}

export default FinishPortModel;
