import React, { useState } from 'react';
import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import FieldEditor from './FieldEditor';

const mapStateToProps = state => ({
  field: selectors.fields.selectedField(state),
  selectedFieldId: selectors.selection.selectedFieldId(state),
});

const mapDispatchToProps = {
  setFieldLabel: actions.fields.setLabel,
};

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
