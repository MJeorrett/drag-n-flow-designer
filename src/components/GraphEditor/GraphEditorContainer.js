import { connect } from 'react-redux';

import { actions } from '../../store';

import GraphEditor from './GraphEditor';

const mapDispatchToProps = dispatch => ({
  addStep: step => {
    dispatch(actions.steps.add(step));
    dispatch(actions.fields.setSelectedFieldId(null));
  },
  toggleSelectedStep: stepId => dispatch(actions.steps.toggleSelected(stepId)),
});

export default connect(
  null,
  mapDispatchToProps,
)(GraphEditor);
