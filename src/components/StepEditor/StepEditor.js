import React from 'react';

const StepEditor = ({
  step,
}) => {
  if (!step) {
    return <p>Select a step to edit.</p>
  }
  const { id, title } = step;
  return (
    <>
      <h3>{title}</h3>
      <p>{id}</p>
    </>
  );
};

export default StepEditor;
