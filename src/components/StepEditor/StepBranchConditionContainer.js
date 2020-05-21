import { connect } from 'react-redux'

import { selectors } from '../../store';

import StepBranchCondition from './StepBranchCondition';

const mapStateToProps = () => {
  const selectNextStepTitle = selectors.steps.makeSelectStepTitleById();
  const selectNextStepWhenFalseTitle = selectors.steps.makeSelectStepTitleById();
  const selectNextStepWhenTrueTitle = selectors.steps.makeSelectStepTitleById();
  const selectStepIsFinal = selectors.steps.makeSelectStepIsFinalById();

  return (state, {
    stepId,
    branchCondition: {
      nextStepId,
      nextStepIdWhenFalse,
      nextStepIdWhenTrue,
    },
  }) => ({
    nextStepTitle: nextStepId ?
      selectNextStepTitle(state, nextStepId) :
      null,
    nextStepTitleWhenFalse: nextStepIdWhenFalse ?
      selectNextStepWhenFalseTitle(state, nextStepIdWhenFalse) :
      null,
    nextStepTitleWhenTrue: nextStepIdWhenTrue ?
      selectNextStepWhenTrueTitle(state, nextStepIdWhenTrue) :
      null,
    stepIsFirst: selectors.steps.firstStepId(state) === stepId,
    stepIsFinal: selectStepIsFinal(state, stepId),
  });
};

export default connect(
  mapStateToProps,
)(StepBranchCondition);
