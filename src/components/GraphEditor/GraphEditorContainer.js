import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import GraphEditor from './GraphEditor';

const mapStateToProps = state => ({
  stepsCount: selectors.steps.count(state),
});

const mapDispatchToProps = dispatch => ({
  addStep: step => {
    dispatch(actions.steps.add(step));
    dispatch(actions.fields.setSelectedFieldId(null));
  },
  toggleSelectedStep: stepId => {
    dispatch(actions.steps.toggleSelected(stepId));
    dispatch(actions.fields.setSelectedFieldId(null));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GraphEditor);
