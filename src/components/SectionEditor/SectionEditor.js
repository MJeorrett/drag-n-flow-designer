import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SectionFields from './SectionFieldsContainer';

const SectionEditor = ({
  stepId,
  section,
  isExpanded,
  setIsExpanded,
}) => {
  const handleChange = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <ExpansionPanel expanded={isExpanded} onChange={handleChange}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>{section.title}</ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ display: 'block', paddingTop: '0' }}>
        <SectionFields stepId={stepId} sectionId={section.id} fieldIds={section.fieldIds} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default SectionEditor;
