import React, { useState } from 'react';

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
)(({
  step,
  ...props
}) => {
  const [cachedStep, setCachedStep] = useState({});

  if (!step) {
    return <p>Select a step to edit.</p>
  }

  if (cachedStep.id !== step.id) {
    setCachedStep(step);
  }

  return <StepEditor step={cachedStep} {...props} />;
});
