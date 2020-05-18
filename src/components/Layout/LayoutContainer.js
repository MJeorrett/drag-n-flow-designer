import { connect } from 'react-redux';

import { actions, selectors } from '../../store';

import Layout from './Layout';

const mapStateToProps = state => ({
  stepIsOpen: !!selectors.steps.selectedStepId(state),
  fieldIsOpen: !!selectors.fields.selectedFieldId(state),
});

const mapDispatchToProps = dispatch => ({
  closeStep: () => {
    dispatch(actions.steps.setSelected(null));
    dispatch(actions.fields.setSelectedFieldId(null));
  },
  closeField: () => dispatch(actions.fields.setSelectedFieldId(null)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);
