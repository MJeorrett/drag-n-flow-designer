import React from 'react';
import { Button } from '@material-ui/core';

import { createNewSection } from '../../models';

import SectionEditor from '../SectionEditor';

const StepSections = ({
  stepId,
  sectionIds,
  addSection,
}) => {
  const handleAddField = () => {
    addSection(createNewSection(`New Section`))
  };
  return (
    <>
      {sectionIds.map((sectionId, index) => (
        <SectionEditor stepId={stepId} sectionId={sectionId} index={index} />
      ))}
      <Button
        type="button"
        variant="contained"
        onClick={handleAddField}
      >
        Add Section
      </Button>
    </>
  );
};

export default StepSections;
