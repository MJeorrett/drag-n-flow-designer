import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { actions, selectors } from '../../store';

import FieldEditor from './FieldEditor';

const mapStateToProps = () => {
  const selectFieldById = selectors.fields.makeSelectFieldById();

  return (state, { fieldId }) => ({
    field: selectFieldById(state, fieldId),
  });
}

const mapDispatchToProps = (dispatch, { fieldId }) => bindActionCreators({
  setFieldLabel: newLabel => actions.fields.setLabel(fieldId, newLabel),
  setFieldType: newType => actions.fields.setType(fieldId, newType),
}, dispatch);

const FieldEditorContainer = ({
  field,
  ...props
}) => {
  const [cachedField, setCachedField] = useState({});

  if (!field && cachedField.id) {
    setCachedField({});
  }

  if (!field) return null;

  if (cachedField.id !== field.id) {
    setCachedField(field);
  }

  return <FieldEditor field={cachedField} {...props} />;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FieldEditorContainer);
