import React from 'react';

import SectionFields from './SectionFieldsContainer';

const SectionEditor = ({
  stepId,
  section,
}) => {
  return (
    <>
      <h6>{section.title}</h6>
      <SectionFields stepId={stepId} sectionId={section.id} fieldIds={section.fieldIds} />
    </>
  );
};

export default SectionEditor;
