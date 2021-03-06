import React from 'react';

const NextStep = ({
  type,
  nextStepTitle,
  nextStepTitleWhenFalse,
  nextStepTitleWhenTrue,
  finishWhenFalse,
  finishWhenTrue,
}) => {
  if (type === 'nextStep') {
    return <p>Next Step: {nextStepTitle || '<not set>'}</p>
  }

  return (
    <>
      <p>When True: {finishWhenTrue ? 'Finish Process' : (nextStepTitleWhenTrue || '<not set>')}</p>
      <p>When False: {finishWhenFalse ? 'Finish Process' : (nextStepTitleWhenFalse || '<not set>')}</p>
    </>
  );
};

const StepBranchCondition = ({
  branchCondition: {
    type,
    finishWhenFalse,
    finishWhenTrue,
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
          finishWhenFalse={finishWhenFalse}
          finishWhenTrue={finishWhenTrue}
        />
      )}
      {stepIsFinal && (
        <p>This is a last step in the process.</p>
      )}
    </>
  )
};

export default StepBranchCondition;
