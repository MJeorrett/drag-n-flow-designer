import React, { useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';

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
      <p>{stepId}</p>
      <Form>
        <Field name="title" />
      </Form>
    </>
  );
};

export default withFormik({
  mapPropsToValues: ({ step: { id, title } }) => ({
    id, title,
  }),
})(StepEditor);
