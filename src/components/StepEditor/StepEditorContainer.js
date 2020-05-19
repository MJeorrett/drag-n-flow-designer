import React, { useState } from 'react';

import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import StepEditor from './StepEditor';

const mapPropsToState = state => ({
  step: selectors.steps.selectedStep(state),
  fields: selectors.steps.selectedStepFields(state),
  selectedStepIds: selectors.selection.selectedStepIds(state),
  branchCondition: selectors.branchConditions.selectedStepBranchCondition(state),
});

const mapDispatchToProps = {
  setStepTitle: actions.steps.setTitle,
  setBranchConditionType: actions.branchConditions.setType,
  setBranchConditionFieldId: actions.branchConditions.setFieldId,
};

const StepEditorContainer = ({
  step,
  selectedStepIds,
  ...props
}) => {
  const [cachedStep, setCachedStep] = useState({});

  if (selectedStepIds.length !== 1 && cachedStep.id) {
    setCachedStep({});
  }

  if (selectedStepIds.length > 1) {
    return <p>{selectedStepIds.length} steps selected.</p>
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
