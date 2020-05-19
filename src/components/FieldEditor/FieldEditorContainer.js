import { connect } from 'react-redux';

import { selectors } from '../../store';

import FieldEditor from './FieldEditor';

const mapStateToProps = state => ({
  selectedFieldId: selectors.selection.selectedFieldId(state),
});

export default connect(
  mapStateToProps,
)(FieldEditor);
