import { connect } from 'react-redux';

import { actions } from '../../store';

import GraphEditor from './GraphEditor';

const mapDispatchToProps = {
  addStep: actions.steps.add,
  toggleSelectedStep: actions.steps.toggleSelected
};

export default connect(
  null,
  mapDispatchToProps,
)(GraphEditor);
