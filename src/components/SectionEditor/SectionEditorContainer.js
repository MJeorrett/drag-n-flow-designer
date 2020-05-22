import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { actions, selectors } from '../../store';

import SectionEditor from './SectionEditor';

const mapStateToProps = () => {
  const selectSectionById = selectors.sections.makeSelectById();

  return (state, { sectionId }) => ({
    section: selectSectionById(state, sectionId),
  });
};

const mapDispatchToProps = (dispatch, { stepId, sectionId }) => bindActionCreators({
  addField: field => actions.fields.add(stepId, sectionId, field),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SectionEditor);
