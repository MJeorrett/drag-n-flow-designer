import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import FieldEditor from './FieldEditor';

const mapStateToProps = state => ({
  selectedFieldId: selectors.fields.selectedFieldId(state),
});

const mapDispatchToProps = {
  onCloseRequested: () => actions.fields.setSelectedFieldId(null),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FieldEditor);
