import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import GraphEditor from './GraphEditor';

const mapStateToProps = state => ({
  stepsCount: selectors.steps.count(state),
  selectedStepIds: selectors.steps.selectedStepIds(state),
});

const mapDispatchToProps = dispatch => ({
  addStep: step => {
    dispatch(actions.steps.add(step));
    dispatch(actions.fields.setSelectedField(null));
  },
  addSelectedStepId: stepId => {
    dispatch(actions.steps.addStepToSelection(stepId));
    dispatch(actions.fields.setSelectedField(null));
  },
  removeSelectedStepId: stepId => {
    dispatch(actions.steps.removeStepFromSelection(stepId));
    dispatch(actions.fields.setSelectedField(null));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphEditor);
