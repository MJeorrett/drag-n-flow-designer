import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import GraphEditor from './GraphEditor';

const mapStateToProps = state => ({
  stepsCount: selectors.steps.count(state),
  selectedStepIds: selectors.selection.selectedStepIds(state),
});

const mapDispatchToProps = dispatch => ({
  addStep: (step, branchCondition) => {
    dispatch(actions.steps.add(step, branchCondition));
    dispatch(actions.selection.setSelectedFieldId(null));
    dispatch(actions.selection.setStepEditorIsOpen(true));
  },
  addSelectedStepId: stepId => {
    dispatch(actions.selection.addSelectedStepId(stepId));
    dispatch(actions.selection.setSelectedFieldId(null));
    dispatch(actions.selection.setFieldEditorIsOpen(false));
  },
  removeSelectedStepId: stepId => {
    dispatch(actions.selection.removeSelectedStepId(stepId));
    dispatch(actions.selection.setSelectedFieldId(null));
  },
  addSelectedFinishId: finishId => {
    dispatch(actions.selection.addSelectedFinishNodeId(finishId));
  },
  removeSelectedFinishId: finishId => {
    dispatch(actions.selection.removeSelectedFinishNode(finishId));
  },
  setStartNodeIsSelected: () => {
    dispatch(actions.selection.setStartNodeIsSelected());
  },
  closeFieldEditor: () => {
    dispatch(actions.selection.setFieldEditorIsOpen(false));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphEditor);
