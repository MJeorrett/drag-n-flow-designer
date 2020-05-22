import { bindActionCreators } from '@reduxjs/toolkit';

import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import StepEditor from './StepEditor';

const mapPropsToState = () => {
  const selectStepById = selectors.steps.makeSelectStepById();
  const selectFieldsByStepId = selectors.steps.makeSelectFieldsByStepId();
  const selectBranchConditionByStepId = selectors.branchConditions.makeSelectByStepId();

  return (state, { stepId }) => ({
    step: selectStepById(state, stepId),
    fields: selectFieldsByStepId(state, stepId),
    branchCondition: selectBranchConditionByStepId(state, stepId),
  });
};

const mapDispatchToProps = (dispatch, { stepId }) => bindActionCreators({
  setStepTitle: newTitle => actions.steps.setTitle(stepId, newTitle),
  setBranchConditionType: newType => actions.branchConditions.setType(stepId, newType),
  setBranchConditionFieldId: newFieldId => actions.branchConditions.setFieldId(stepId, newFieldId),
}, dispatch);

export default connect(
  mapPropsToState,
  mapDispatchToProps,
)(StepEditor);
