import { connect } from 'react-redux';

import { selectors } from '../../store';

import SelectedStepEditor from './SelectedStepEditor';

const mapStateToProps = state => ({
  selectedStepId: selectors.selection.selectedStepId(state),
  selectedStepIds: selectors.selection.selectedStepIds(state),
});

export default connect(
  mapStateToProps,
)(SelectedStepEditor);
