import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import StepFields from './StepFields';

const mapStateToProps = () => {
  const selectFieldsByStepId = selectors.steps.makeSelectFieldsByStepId();

  return (state, { stepId }) => ({
    fields: selectFieldsByStepId(state, stepId),
    totalFieldsCount: selectors.fields.count(state),
  });
};

const mapDispatchToProps = (dispatch, { stepId }) => ({
  addField: newField => {
    dispatch(actions.fields.add(stepId, newField));
    dispatch(actions.selection.setSelectedFieldId(newField.id));
    dispatch(actions.selection.setFieldEditorIsOpen(true));
  },
  setSelectedField: fieldId => {
    dispatch(actions.selection.setSelectedFieldId(fieldId));
    dispatch(actions.selection.setFieldEditorIsOpen(true));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StepFields);
