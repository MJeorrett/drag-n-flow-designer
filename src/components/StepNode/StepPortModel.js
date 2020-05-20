import { PortModel, DefaultLinkModel } from '@projectstorm/react-diagrams';

class StepPortModel extends PortModel {
  constructor(type, alignment) {
    super({
      type,
      name: type,
      alignment,
    });
  }

  createLinkModel = () => new DefaultLinkModel();
}

export default StepPortModel;
