import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import Layout from './Layout';

const mapStateToProps = state => ({
  stepIsOpen: selectors.selection.stepEditorIsOpen(state),
  fieldIsOpen: selectors.selection.fieldEditorIsOpen(state),
  selectedStepIds: selectors.selection.selectedStepIds(state),
});

const mapDispatchToProps = dispatch => ({
  setStepIsOpen: newState => dispatch(actions.selection.setStepEditorIsOpen(newState)),
  closeField: () => dispatch(actions.selection.setFieldEditorIsOpen(false)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
