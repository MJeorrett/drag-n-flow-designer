import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import SectionFields from './SectionFields';

const mapStateToProps = () => {
  const selectFields = selectors.fields.makeSelectFieldsByIds();

  return (state, { fieldIds }) => ({
    fields: selectFields(state, fieldIds),
    totalFieldsCount: selectors.fields.count(state, fieldIds),
  });
};

const mapDispatchToProps = (dispatch, { stepId, sectionId }) => ({
  addField: newField => {
    dispatch(actions.fields.add(stepId, sectionId, newField));
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
)(SectionFields);
