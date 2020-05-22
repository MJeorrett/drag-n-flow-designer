import { connect } from 'react-redux';

import { selectors } from '../../store';

import FieldEditorContainer from './FieldEditorContainer';

const mapStateToProps = state => ({
  fieldId: selectors.selection.selectedFieldId(state),
});

export default connect(
  mapStateToProps,
)(FieldEditorContainer);
