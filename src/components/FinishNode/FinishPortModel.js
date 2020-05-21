import { PortModel, PortModelAlignment } from '@projectstorm/react-diagrams';

class FinishPortModel extends PortModel {
  constructor() {
    super({
      type: 'step-finish',
      name: 'step-finish',
      alignment: PortModelAlignment.LEFT,
    });
  }

  createLinkModel() {
    return null;
  }
}

export default FinishPortModel;
