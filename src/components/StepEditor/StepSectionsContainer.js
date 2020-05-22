import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import StepSections from './StepSections';

const mapStateToProps = () => {
  const selectSectionIdsByStepId = selectors.steps.makeSelectSectionIdsByStepId();

  return (state, { stepId }) => ({
    sectionIds: selectSectionIdsByStepId(state, stepId),
    totalSectionsCount: selectors.sections.totalCount(state),
  });
};

const mapDispatchToProps = (dispatch, { stepId }) => ({
  addSection: section => dispatch(actions.sections.add(stepId, section)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepSections);
