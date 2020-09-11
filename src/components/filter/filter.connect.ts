import Filter from './filter';
import { connect } from 'react-redux';
import { ActionCreator } from '../../reducer/actions';
import { Operations } from '../../reducer/reducer';

const mapStateToProps = (state) => {
  return {
    activeFilters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setFilters(filter) {
    dispatch(Operations.setFilters(filter));
  },
  resetFilter(filter) {
    dispatch(Operations.resetFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
