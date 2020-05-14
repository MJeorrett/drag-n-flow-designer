import React from 'react';

import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import StepEditor from './StepEditor';

const mapPropsToState = state => ({
  step: selectors.steps.selectedStep(state),
});

const mapDispatchToProps = {
  setStepTitle: actions.steps.setSelectedStepTitle,
};

export default connect(
  mapPropsToState,
  mapDispatchToProps,
)(props => {
  const { step } = props;
  if (!step) {
    return <p>Select a step to edit.</p>
  }

  return <StepEditor {...props} />;
});
