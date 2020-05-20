import { connect } from 'react-redux';

import { selectors } from '../../store';

import StepNodeWidget from './StepNodeWidget';

const mapStateToProps = () => {
  const selectStepById = selectors.steps.makeSelectStepById();
  const selectBranchConditionByStepId = selectors.branchConditions.makeSelectByStepId();

  return (state, { node }) => {
    const { id: stepId } = node.getOptions();
    return {
      step: selectStepById(state, stepId),
      branchCondition: selectBranchConditionByStepId(state, stepId),
      isSelected: selectors.selection.selectedStepIds(state).includes(stepId),
    };
  };
};

export default connect(
  mapStateToProps,
)(StepNodeWidget);
