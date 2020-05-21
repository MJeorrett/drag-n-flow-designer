import React from 'react';
import { withFormik, Form } from 'formik';
import { Typography } from '@material-ui/core';
import styled from '@emotion/styled';

import { stepBranchConditionTypes } from '../../models';

import CustomField from '../CustomField';
import CustomDropdown from '../CustomDropdown';

import StepFields from './StepFieldsContainer';
import StepBranchCondition from './StepBranchConditionContainer';

const S = {
  Root: styled.div`
    & > *:not(:last-child) {
      margin-bottom: 2rem;
    }
  `,
  Section: styled.div`
  & > *:not(:last-child) {
    margin-bottom: 1rem;
  },
`,
};

const StepEditor = ({
  step: {
    id: stepId,
  },
  fields,
  branchCondition,
  setStepTitle,
  setBranchConditionType,
  setBranchConditionFieldId,
}) => {
  const branchConditionFieldOptions = fields
    .filter(field => field.type === 'checkbox')
    .map(field => ({
      value: field.id,
      label: field.label,
    }));
    
  const renderBranchConditionFieldOptions = () => {
    const showError = branchConditionFieldOptions.length === 0;

    return (
      <CustomDropdown
        name="branchConditionFieldId"
        label="Branch Condition Field"
        reduxAction={value => setBranchConditionFieldId(stepId, value)}
        options={branchConditionFieldOptions}
        error={showError}
        disabled={showError}
        helperText={showError ? 'Please create a checkbox field.' : null}
      />
    );
  }

  return (
    <S.Root>
      <Form>
        <CustomField 
          name="title"
          label="Title"
          reduxAction={value => setStepTitle(stepId, value)}
        />
      </Form>
      <S.Section>
        <Typography variant="h5">Fields</Typography>
        <StepFields stepId={stepId} />
      </S.Section>
      <S.Section>
        <CustomDropdown
          name="branchConditionType"
          label="Branch Condition Type"
          reduxAction={value => setBranchConditionType(stepId, value)}
          options={Object.keys(stepBranchConditionTypes).map(key => ({
            value: key,
            label: stepBranchConditionTypes[key],
          }))}
        />
        {
          branchCondition.type === "field" && renderBranchConditionFieldOptions()
        }
      </S.Section>
      <S.Section>
        <StepBranchCondition
          stepId={stepId}
          branchCondition={branchCondition}
        />
      </S.Section>
    </S.Root>
  );
};

export default withFormik({
  mapPropsToValues: ({ step, branchCondition }) => ({
    ...step,
    branchConditionType: branchCondition.type,
    branchConditionFieldId: branchCondition.fieldId,
  }),
  enableReinitialize: true,
})(StepEditor);
