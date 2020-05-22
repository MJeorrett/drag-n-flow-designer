import React, { useState } from 'react';

import StepEditorContainer from './StepEditorContainer';

const SelectedStepEditor = ({
  selectedStepId,
  selectedStepIds,
}) => {
  const [cachedStepId, setCachedStepId] = useState(null);

  if (selectedStepIds.length !== 1 && cachedStepId) {
    setCachedStepId(null);
  }

  if (selectedStepIds.length > 1) {
    return <p>{selectedStepIds.length} steps selected.</p>
  }

  if (!selectedStepId) {
    return <p>Select a step to edit.</p>
  }

  if (cachedStepId !== selectedStepId) {
    setCachedStepId(selectedStepId);
  }

  return <StepEditorContainer stepId={cachedStepId} />;
};

export default SelectedStepEditor;
