import React, { useEffect } from 'react';
import { withFormik, Form } from 'formik';
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

import CustomField from '../CustomField';

const S = {
  Typography: styled(Typography)`
    margin-top: 1em !important;
  `,
};

const StepEditor = ({
  step: {
    id: stepId,
  },
  setStepTitle,
  values: {
    title,
  },
}) => {
  useEffect(
    () => {
      setStepTitle(title);
    },
    [setStepTitle, title]
  );

  return (
    <>
      <S.Typography variant="h4" align="center">Edit Step</S.Typography>
      <Form>
        <CustomField name="title" label="Title" fullWidth />
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
