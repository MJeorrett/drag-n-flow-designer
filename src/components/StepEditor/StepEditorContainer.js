import React, { useState } from 'react';

import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import StepEditor from './StepEditor';

const mapPropsToState = state => ({
  step: selectors.steps.selectedStep(state),
  selectedStepId: selectors.steps.selectedStepId(state),
});

const mapDispatchToProps = {
  setStepTitle: actions.steps.setSelectedStepTitle,
};

const StepEditorContainer = ({
  step,
  selectedStepId,
  ...props
}) => {
  const [cachedStep, setCachedStep] = useState({});

  if (!selectedStepId && cachedStep.id) {
    setCachedStep({});
  }

  if (!step) {
    return <p>Select a step to edit.</p>
  }

  if (cachedStep.id !== step.id) {
    setCachedStep(step);
  }

  return <StepEditor step={cachedStep} {...props} />;
};

export default connect(
  mapPropsToState,
  mapDispatchToProps,
)(StepEditorContainer);
