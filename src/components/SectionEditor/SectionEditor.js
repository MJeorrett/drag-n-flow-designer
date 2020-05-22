import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled from '@emotion/styled';

import SectionFields from './SectionFieldsContainer';

const S = {
  Index: styled.span`
    font-size: 1.3rem;
    padding-left: 0.5rem;
    padding-right: 0.25rem;
    margin-bottom: 3px;
  `,
  TitleInput: styled.input`
    border: none;
    font-size: 1.3rem;
    padding: 0 0.5rem;
  `,
};

const SectionEditor = ({
  stepId,
  index,
  section,
  isExpanded,
  setIsExpanded,
  setTitle,
}) => {
  const handleChange = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <ExpansionPanel expanded={isExpanded} onChange={handleChange}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <S.Index>{index + 1}.</S.Index>
        <S.TitleInput
          type="text"
          value={section.title}
          onChange={event => setTitle(event.target.value)}
          onClick={event => event.stopPropagation()}
        />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ display: 'block', paddingTop: '0' }}>
        <SectionFields stepId={stepId} sectionId={section.id} fieldIds={section.fieldIds} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default SectionEditor;
