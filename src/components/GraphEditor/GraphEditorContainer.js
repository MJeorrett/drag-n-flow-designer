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
    dispatch(actions.fields.setSelectedFieldId(null));
  },
  addSelectedStepId: stepId => {
    dispatch(actions.steps.addSelectedStepId(stepId));
    dispatch(actions.fields.setSelectedFieldId(null));
  },
  removeSelectedStepId: stepId => {
    dispatch(actions.steps.removeSelectedStepId(stepId));
    dispatch(actions.fields.setSelectedFieldId(null));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphEditor);
