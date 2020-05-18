import { connect } from 'react-redux';

import { selectors } from '../../store';

import Layout from './Layout';

const mapStateToProps = state => ({
  stepIsOpen: !!selectors.steps.selectedStepId(state),
  fieldIsOpen: !!selectors.fields.selectedFieldId(state),
});

export default connect(
  mapStateToProps,
)(Layout);
