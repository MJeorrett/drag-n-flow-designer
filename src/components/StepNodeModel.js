import { NodeModel, PortModel } from '@projectstorm/react-diagrams';

class StepNodeModel extends NodeModel {
  constructor(title) {
    super({
      type: 'step',
      title,
    });
    // this.addPort(new PortModel({
    //   name: 'next'
    // }));
    this.addPort(new PortModel({
      name: 'prev'
    }));
  }
}

export default StepNodeModel;
