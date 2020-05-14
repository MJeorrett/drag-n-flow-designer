import { connect } from 'react-redux';

import { selectors } from '../../store';

import StepEditor from './StepEditor';

const mapPropsToState = state => ({
  step: selectors.steps.selectedStep(state),
});

export default connect(
  mapPropsToState,
)(StepEditor);
