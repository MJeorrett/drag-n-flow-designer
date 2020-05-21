export const stepBranchConditionTypes = {
  nextStep: 'Next Step',
  field: 'Based on Field',
};

export const createNewBranchCondition = () => ({
  type: 'nextStep',
  nextStepId: null,
  fieldId: null,
  nextStepIdWhenTrue: null,
  nextStepIdWhenFalse: null,
  finishWhenTrue: false,
  finishWhenFalse: false,
});
