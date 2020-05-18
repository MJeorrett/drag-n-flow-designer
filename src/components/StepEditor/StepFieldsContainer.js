import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions, selectors } from '../../store';
import { createNewField } from '../../models';

import StepFields from './StepFields';

const mapStateToProps = () => {
  const selectFieldIdsByStepId = selectors.steps.makeSelectFieldIdsByStepId();

  return (state, { stepId }) => ({
    fieldIds: selectFieldIdsByStepId(state, stepId),
  });
};

const mapDispatchToProps = (dispatch, { stepId }) => bindActionCreators({
  addField: () => actions.fields.add(stepId, createNewField()),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepFields);
