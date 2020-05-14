import createEngine, {
  DefaultNodeModel,
  DiagramModel,
  DefaultPortModel,
} from '@projectstorm/react-diagrams';

import * as StepNode from './components/StepNode';
import SimplePortFactory from './components/SimplePortFactory';

const engine = createEngine({
  registerDefaultDeleteItemsAction: false,
});
engine.maxNumberPointsPerLink = 0;
engine.getNodeFactories().registerFactory(new StepNode.Factory());
engine.getPortFactories().registerFactory(new SimplePortFactory('step', () => new DefaultPortModel()));

const addDefaultNodes = () => {
  const start = new DefaultNodeModel({
    name: 'Start',
    color: 'green',
  });
  start.setPosition(50, 100);
  start.addOutPort('');
  
  const end = new DefaultNodeModel({
    name: 'Finish',
    color: 'red',
  });
  end.setPosition(450, 100);
  end.addInPort('');
  
  const model = new DiagramModel();
  model.addAll(start, end);
  engine.setModel(model);
};

addDefaultNodes();

export default engine;