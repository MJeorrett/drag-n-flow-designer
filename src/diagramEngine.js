import createEngine, {
  DiagramModel,
  DefaultPortModel,
  DefaultLinkModel,
  PointModel,
} from '@projectstorm/react-diagrams';
import { Action, InputType } from '@projectstorm/react-canvas-core';

import * as StepNode from './components/StepNode';
import * as StartNode from './components/StartNode';
import * as FinishNode from './components/FinishNode';
import SimplePortFactory from './components/SimplePortFactory';

import { actions } from './store';

let _store;

export const initialize = store => {
  _store = store;
};

class CustomDeleteItemsAction extends Action {
  constructor() {
    super({
      type: InputType.KEY_DOWN,
      fire: event => {
        if (event.event.keyCode === 46 || event.event.keyCode === 8) {
          const selection = engine.getModel().getSelectedEntities();
          console.log(selection);
          selection.forEach(entity => {
            if (
              entity instanceof DefaultLinkModel ||
              entity instanceof PointModel
            ) {
              entity.remove();
            }
          });
          this.engine.repaintCanvas();
        }
        console.log(event);
      },
    });
  }
}

const engine = createEngine({
  registerDefaultDeleteItemsAction: false,
});

const state = engine.getStateMachine().getCurrentState();
state.dragNewLink.config.allowLooseLinks = false;

const nodeFactories = engine.getNodeFactories();
nodeFactories.registerFactory(new StepNode.Factory());
nodeFactories.registerFactory(new StartNode.Factory());
nodeFactories.registerFactory(new FinishNode.Factory());

engine.getActionEventBus().registerAction(new CustomDeleteItemsAction());
engine.getPortFactories().registerFactory(new SimplePortFactory('step', () => new DefaultPortModel()));

const handleStartSelect = ({ isSelected }) => {
  _store.dispatch(actions.selection.setStartNodeIsSelected(isSelected));
}

const handleStartEvent = event => {
  if (event.function === 'selectionChanged') {
    handleStartSelect(event);
  }
};

const handleLinkEvent = event => {
  const { entity: link } = event;
  const eventType = event.function;
  if (
    eventType !== 'targetPortChanged' &&
    eventType !== 'entityRemoved'
  ) {
    return;
  }

  if (!link.targetPort) return;

  const sourceIsStart = link.sourcePort.parent.options.type === 'step-start';
  let targetStepId;

  if (sourceIsStart) {
    targetStepId = link.targetPort.parent.options.id;
    _store.dispatch(actions.steps.setFirstStepId(eventType === 'targetPortChanged' ? targetStepId : null));
    return;
  }

  const sourceStepId = link.sourcePort.parent.options.id;
  const sourcePortType = link.sourcePort.options.type;
  const targetIsFinish = link.targetPort.parent.options.type === 'step-finish';
  
  if (targetIsFinish) {
    const stepToFinishActions = {
      'step-next': actions.steps.setIsFinalStep,
      'step-next-true': actions.branchConditions.setFinishWhenTrue,
      'step-next-false': actions.branchConditions.setFinishWhenFalse,
    };

    let action = stepToFinishActions[sourcePortType];

    if (!action) {
      throw new Error(`Unrecognised port type '${sourcePortType}'`)
    }

    _store.dispatch(action(sourceStepId, eventType === 'targetPortChanged'));
  }
  else {
    targetStepId = link.targetPort.parent.options.id;
    const stepToStepActions = {
      'step-next': actions.branchConditions.setNextStepId,
      'step-next-true': actions.branchConditions.setNextStepIdWhenTrue,
      'step-next-false': actions.branchConditions.setNextStepIdWhenFalse,
    };
    let action = stepToStepActions[sourcePortType];

    if (!action) {
      throw new Error(`Unrecognised port type '${sourcePortType}'`)
    }

    _store.dispatch(action(sourceStepId, eventType === 'entityRemoved' ? null : targetStepId));
  }
};

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