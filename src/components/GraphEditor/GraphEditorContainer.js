import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import GraphEditor from './GraphEditor';

const mapStateToProps = state => ({
  stepsCount: selectors.steps.count(state),
  selectedStepIds: selectors.selection.selectedStepIds(state),
});

const mapDispatchToProps = dispatch => ({
  addStep: step => {
    dispatch(actions.steps.add(step));
    dispatch(actions.selection.setSelectedFieldId(null));
    dispatch(actions.selection.setStepEditorIsOpen(step.id));
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
  closeFieldEditor: () => {
    dispatch(actions.selection.setFieldEditorIsOpen(false));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphEditor);
