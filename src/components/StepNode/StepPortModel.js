import { PortModel, DefaultLinkModel } from '@projectstorm/react-diagrams';

class StepPortModel extends PortModel {
  constructor(name, alignment) {
    super({
      type: 'step',
      name,
      alignment,
    });
  }

  createLinkModel = () => new DefaultLinkModel();
}

export default StepPortModel;
