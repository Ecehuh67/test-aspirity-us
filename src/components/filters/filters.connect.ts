import Filters from './filters';
import { connect } from 'react-redux';
import { ActionCreator } from '../../reducer/actions';
import { Operations } from '../../reducer/reducer';

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  filterData() {
    dispatch(Operations.filterData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
