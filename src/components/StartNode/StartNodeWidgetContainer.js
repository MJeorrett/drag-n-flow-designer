import { connect } from 'react-redux';

import { selectors } from '../../store';

import StartNodeWidget from './StartNodeWidget';

const mapStateToProps = state => ({
  isSelected: selectors.selection.startNodeIsSelected(state)
});

export default connect(
  mapStateToProps,
)(StartNodeWidget);
