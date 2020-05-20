import createEngine, {
  DiagramModel,
  DefaultPortModel,
} from '@projectstorm/react-diagrams';

import * as StepNode from './components/StepNode';
import * as StartNode from './components/StartNode';
import * as FinishNode from './components/FinishNode';
import SimplePortFactory from './components/SimplePortFactory';

import { actions } from './store';

let _store;

export const initialize = store => {
  _store = store;
};

const engine = createEngine({
  registerDefaultDeleteItemsAction: false,
});
engine.maxNumberPointsPerLink = 0;

const nodeFactories = engine.getNodeFactories();
nodeFactories.registerFactory(new StepNode.Factory());
nodeFactories.registerFactory(new StartNode.Factory());
nodeFactories.registerFactory(new FinishNode.Factory());

engine.getPortFactories().registerFactory(new SimplePortFactory('step', () => new DefaultPortModel()));

const handleStartSelect = ({ isSelected }) => {
  _store.dispatch(actions.selection.setStartNodeIsSelected(isSelected));
}

const handleStartEvent = event => {
  if (event.function === "selectionChanged") {
    handleStartSelect(event);
  }
};

const addDefaultNodes = () => {
  const start = new StartNode.Model();
  start
    .registerListener({
      eventDidFire: handleStartEvent,
    });
  start.setPosition(250, 250);
  
  const model = new DiagramModel();
  model.addAll(start);
  engine.setModel(model);
};

addDefaultNodes();

export default engine;