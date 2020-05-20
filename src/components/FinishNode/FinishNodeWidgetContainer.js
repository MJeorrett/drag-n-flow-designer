import { connect } from 'react-redux';

import { selectors } from '../../store';

import FinishNodeWidget from './FinishNodeWidget';

const mapStateToProps = (state, { node }) => ({
  isSelected: selectors.selection.selectedFinishNodeIds(state).includes(node.getOptions().id),
});

export default connect(
  mapStateToProps,
)(FinishNodeWidget);
