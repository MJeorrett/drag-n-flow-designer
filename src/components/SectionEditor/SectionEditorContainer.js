import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { actions, selectors } from '../../store';

import SectionEditor from './SectionEditor';

const mapStateToProps = () => {
  const selectSectionById = selectors.sections.makeSelectById();

  return (state, { sectionId }) => ({
    section: selectSectionById(state, sectionId),
    isExpanded: selectors.selection.selectedSectionId(state) === sectionId,
  });
};

const mapDispatchToProps = (dispatch, { stepId, sectionId }) => bindActionCreators({
  addField: field => actions.fields.add(stepId, sectionId, field),
  setIsExpanded: newState => actions.selection.setSelectedSectionId(newState ? sectionId : null),
  setTitle: newTitle => actions.sections.setTitle(sectionId, newTitle),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SectionEditor);
