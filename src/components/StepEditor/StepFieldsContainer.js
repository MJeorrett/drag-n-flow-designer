import { connect } from 'react-redux';

import { actions, selectors } from '../../store';
import { createNewField } from '../../models';

import StepFields from './StepFields';

const mapStateToProps = () => {
  const selectFieldIdsByStepId = selectors.steps.makeSelectFieldIdsByStepId();

  return (state, { stepId }) => ({
    fieldIds: selectFieldIdsByStepId(state, stepId),
  });
};

const mapDispatchToProps = (dispatch, { stepId }) => ({
  addField: () => {
    const newField = createNewField();
    dispatch(actions.fields.add(stepId, newField));
    dispatch(actions.fields.setSelectedField(newField.id));
  },
  setSelectedField: fieldId => dispatch(actions.fields.setSelectedField(fieldId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepFields);
