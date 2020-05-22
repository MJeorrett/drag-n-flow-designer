import React from 'react';
import { Button } from '@material-ui/core';

import { createNewSection } from '../../models';

import SectionEditor from '../SectionEditor';

const StepSections = ({
  stepId,
  sectionIds,
  totalSectionsCount,
  addSection,
}) => {
  const handleAddField = () => {
    addSection(createNewSection(`New Section ${totalSectionsCount + 1}`))
  };
  return (
    <>
      {sectionIds.map(sectionId => (
        <SectionEditor stepId={stepId} sectionId={sectionId} />
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
