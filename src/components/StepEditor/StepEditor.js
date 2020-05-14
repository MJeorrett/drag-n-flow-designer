import React, { useEffect } from 'react';
import { withFormik, Form } from 'formik';
import { Typography } from '@material-ui/core';

import CustomField from '../CustomField';

import FieldsEditor from './FieldsEditor';
import styled from '@emotion/styled';

const S = {
  FieldsContainer: styled.div`
    margin-top: 2em;
  `,
};

const StepEditor = ({
  step: {
    id: stepId,
  },
  setStepTitle,
}) => {
  return (
    <>
      <Form>
        <CustomField name="title" label="Title" fullWidth reduxAction={setStepTitle} />
        <S.FieldsContainer>
          <Typography variant="h5">Fields</Typography>
          <FieldsEditor />
        </S.FieldsContainer>
      </Form>
    </>
  );
};

export default withFormik({
  mapPropsToValues: ({ step: { id, title } }) => ({
    id, title,
  }),
  enableReinitialize: true,
})(StepEditor);
