import React from 'react';
import { withFormik, Form } from 'formik';
import { Typography } from '@material-ui/core';

import CustomField from '../CustomField';

import FieldsEditor from './FieldsEditorContainer';
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
      </Form>
      <S.FieldsContainer>
        <Typography variant="h5">Fields</Typography>
        <FieldsEditor stepId={stepId} />
      </S.FieldsContainer>
    </>
  );
};

export default withFormik({
  mapPropsToValues: ({ step }) => step,
  enableReinitialize: true,
})(StepEditor);
