import React from 'react';
import { withFormik } from 'formik';
import styled from '@emotion/styled';

import { fieldTypes } from '../../models';

import CustomField from '../CustomField';
import CustomDropdown from '../CustomDropdown';

const S = {
  Root: styled.div`
    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  `,
}

const FieldEditor = ({
  field: {
    id: fieldId
  },
  setFieldLabel,
  setFieldType,
}) => {
  return (
    <S.Root>
      <CustomField
        name="label"
        label="Label"
        reduxAction={value => setFieldLabel(fieldId, value)}
      />
      <br />
      <CustomDropdown
        name="type"
        label="Type"
        reduxAction={value => setFieldType(fieldId, value)}
        options={Object.keys(fieldTypes).map(key => ({
          value: key,
          label: fieldTypes[key],
        }))}
      />
    </S.Root>
  );
};

export default withFormik({
  mapPropsToValues: ({ field }) => field,
  enableReinitialize: true,
})(FieldEditor);