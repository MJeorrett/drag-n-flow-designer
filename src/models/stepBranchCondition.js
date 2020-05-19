export const stepBranchConditionTypes = {
  nextStep: 'Next Step',
  finalStep: 'Final Step',
  field: 'Based on Field',
};

export const createNewBranchCondition = () => ({
  type: 'nextStep',
  nextStepId: null,
  nextStepIdWhenTrue: null,
  nextStepIdWhenFalse: null,
  fieldId: null,
});
