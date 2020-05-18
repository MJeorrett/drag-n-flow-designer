import { connect } from 'react-redux';

import { selectors } from '../../store';

import StepNodeWidget from './StepNodeWidget';

const mapStateToProps = () => {
  const selectStepById = selectors.steps.makeSelectStepById();

  return (state, { node }) => {
    const { id: stepId } = node.getOptions();
    return {
      step: selectStepById(state, stepId),
      isSelected: selectors.steps.selectedStepId(state) === stepId,
    };
  };
};

export default connect(
  mapStateToProps,
)(StepNodeWidget);