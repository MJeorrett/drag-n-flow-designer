import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import Layout from './Layout';

const mapStateToProps = state => ({
  fieldIsOpen: !!selectors.fields.selectedFieldId(state),
});

const mapDispatchToProps = dispatch => ({
  closeField: () => dispatch(actions.fields.setSelectedField(null)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
