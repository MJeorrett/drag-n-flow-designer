import createEngine, {
  DiagramModel,
  DefaultPortModel,
} from '@projectstorm/react-diagrams';

import * as StepNode from './components/StepNode';
import * as StartNode from './components/StartNode';
import * as FinishNode from './components/FinishNode';
import SimplePortFactory from './components/SimplePortFactory';

const engine = createEngine({
  registerDefaultDeleteItemsAction: false,
});
engine.maxNumberPointsPerLink = 0;

const nodeFactories = engine.getNodeFactories();
nodeFactories.registerFactory(new StepNode.Factory());
nodeFactories.registerFactory(new StartNode.Factory());
nodeFactories.registerFactory(new FinishNode.Factory());

engine.getPortFactories().registerFactory(new SimplePortFactory('step', () => new DefaultPortModel()));

const addDefaultNodes = () => {
  const start = new StartNode.Model();
  start.setPosition(150, 100);
  
  const end = new FinishNode.Model();
  end.setPosition(550, 100);
  
  const model = new DiagramModel();
  model.addAll(start, end);
  engine.setModel(model);
};

addDefaultNodes();

export default engine;