import React from 'react';
import { withFormik, Form } from 'formik';
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

import CustomField from '../CustomField';

import StepFields from './StepFieldsContainer';
import FieldEditor from './FieldEditor';

const S = {
  FieldsContainer: styled.div`
    margin-top: 2em;
  `,
  FieldEditorContainer: styled.div`

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
      </Form>
      <S.FieldsContainer>
        <Typography variant="h5" gutterBottom>Fields</Typography>
        <StepFields stepId={stepId} />
      </S.FieldsContainer>
      <S.FieldEditorContainer>
        <FieldEditor />
      </S.FieldEditorContainer>
    </>
  );
};

export default withFormik({
  mapPropsToValues: ({ step }) => step,
  enableReinitialize: true,
})(StepEditor);
