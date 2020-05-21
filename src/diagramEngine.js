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

const state = engine.getStateMachine().getCurrentState();
state.dragNewLink.config.allowLooseLinks = false;

const nodeFactories = engine.getNodeFactories();
nodeFactories.registerFactory(new StepNode.Factory());
nodeFactories.registerFactory(new StartNode.Factory());
nodeFactories.registerFactory(new FinishNode.Factory());

engine.getPortFactories().registerFactory(new SimplePortFactory('step', () => new DefaultPortModel()));

const handleStartSelect = ({ isSelected }) => {
  _store.dispatch(actions.selection.setStartNodeIsSelected(isSelected));
}

const handleStartEvent = event => {
  if (event.function === 'selectionChanged') {
    handleStartSelect(event);
  }
};

const handleLinkTargetPortChangedEvent = ({ entity: link }) => {
  const sourceIsStart = link.sourcePort.parent.options.type === 'step-start';
  let targetStepId;

  if (sourceIsStart) {
    targetStepId = link.targetPort.parent.options.id;
    _store.dispatch(actions.steps.setFirstStepId(targetStepId));
    return;
  }

  const sourceStepId = link.sourcePort.parent.options.id;
  const sourcePortType = link.sourcePort.options.type;
  const targetIsFinish = link.targetPort.parent.options.type === 'step-finish';

  if (targetIsFinish) {
    switch (sourcePortType) {
      case 'step-next': {
        _store.dispatch(actions.steps.setIsFinalStep(sourceStepId, true));
        break;
      }
      case 'step-next-true': {
        _store.dispatch(actions.branchConditions.setFinishWhenTrue(sourceStepId, true));
        break;
      }
      case 'step-next-false': {
        _store.dispatch(actions.branchConditions.setFinishWhenFalse(sourceStepId, true));
        break;
      }
      default: {
        throw new Error(`Unrecognised port type '${sourcePortType}'`)
      }
    }
  }
  else {
    targetStepId = link.targetPort.parent.options.id;
    switch (sourcePortType) {
      case 'step-next': {
        _store.dispatch(actions.branchConditions.setNextStepId(sourceStepId, targetStepId));
        break;
      }
      case 'step-next-true': {
        _store.dispatch(actions.branchConditions.setNextStepIdWhenTrue(sourceStepId, targetStepId));
        break;
      }
      case 'step-next-false': {
        _store.dispatch(actions.branchConditions.setNextStepIdWhenFalse(sourceStepId, targetStepId));
        break;
      }
      default: {
        throw new Error(`Unrecognised port type '${sourcePortType}'`)
      }
    }
  }
};

const handleLinkEvent = event => {
  if (event.function === 'targetPortChanged') {
    handleLinkTargetPortChangedEvent(event);
  }
}

const addDefaultNodes = () => {
  const start = new StartNode.Model();
  start
    .registerListener({
      eventDidFire: handleStartEvent,
    });
  start.setPosition(50, 250);

  const model = new DiagramModel();

  model.registerListener({
    linksUpdated: event => {
      if (event.isCreated) {
        event.link.registerListener({
          eventDidFire: handleLinkEvent
        });
      }
    },
  });

  model.addAll(start);
  engine.setModel(model);
};

addDefaultNodes();

export default engine;