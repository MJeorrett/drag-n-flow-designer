import React from 'react';
import { withFormik } from 'formik';
import CustomField from '../CustomField';

const FieldEditor = ({
  field: {
    id: fieldId
  },
  setFieldLabel,
}) => {
  return (
    <>
      <CustomField
        name="label"
        label="Label"
        reduxAction={value => setFieldLabel(fieldId, value)}
      />
    </>
  );
};

export default withFormik({
  mapPropsToValues: ({ field }) => field,
  enableReinitialize: true,
})(FieldEditor);