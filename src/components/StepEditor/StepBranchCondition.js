import React from 'react';

const NextStep = ({
  type,
  nextStepTitle,
  nextStepTitleWhenFalse,
  nextStepTitleWhenTrue,
}) => {
  if (type === 'nextStep') {
    return <p>Next Step: {nextStepTitle || '<not set>'}</p>
  }

  return (
    <>
      <p>Next Step When True: {nextStepTitleWhenTrue || '<not set>'}</p>
      <p>Next Step When False: {nextStepTitleWhenFalse || '<not set>'}</p>
    </>
  );
};

const StepBranchCondition = ({
  branchCondition: {
    type,
  },
  nextStepTitle,
  nextStepTitleWhenFalse,
  nextStepTitleWhenTrue,
  stepIsFirst,
  stepIsFinal,
}) => {
  if (stepIsFirst && stepIsFinal) {
    return <p>This is the only step in your process.</p>
  }
  
  return (
    <>
      {stepIsFirst && (
        <p>This is the first step in your process.</p>
      )}
      {!stepIsFinal && (
        <NextStep
          type={type}
          nextStepTitle={nextStepTitle}
          nextStepTitleWhenFalse={nextStepTitleWhenFalse}
          nextStepTitleWhenTrue={nextStepTitleWhenTrue}
        />
      )}
      {stepIsFinal && (
        <p>This is a last step in the process.</p>
      )}
    </>
  )
};

export default StepBranchCondition;
