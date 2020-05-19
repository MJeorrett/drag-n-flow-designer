import React from 'react';
import { withFormik, Form } from 'formik';
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

import { stepBranchConditionTypes } from '../../models';

import CustomField from '../CustomField';
import CustomDropdown from '../CustomDropdown';

import StepFields from './StepFieldsContainer';

const S = {
  Root: styled.div`
    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  `,
};

const StepEditor = ({
  step: {
    id: stepId,
  },
  branchCondition,
  setStepTitle,
  setBranchConditionType,
}) => {
  return (
    <S.Root>
      <Form>
        <CustomField 
          name="title"
          label="Title"
          reduxAction={value => setStepTitle(stepId, value)}
        />
      </Form>
      <div>
        <Typography variant="h5" gutterBottom>Fields</Typography>
        <StepFields stepId={stepId} />
      </div>
      <CustomDropdown
        name="branchConditionType"
        label="Branch Condition Type"
        reduxAction={value => setBranchConditionType(stepId, value)}
        options={Object.keys(stepBranchConditionTypes).map(key => ({
          value: key,
          label: stepBranchConditionTypes[key],
        }))}
      />
    </S.Root>
  );
};

export default withFormik({
  mapPropsToValues: ({ step, branchCondition }) => ({
    ...step,
    branchConditionType: branchCondition.type,
  }),
  enableReinitialize: true,
})(StepEditor);
