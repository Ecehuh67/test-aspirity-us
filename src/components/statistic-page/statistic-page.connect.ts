import StatisticPage from '../statistic-page/statistic-page';
import { connect } from 'react-redux';
import { Operations } from '../../reducer/reducer';

const mapStateToProps = (state) => {
  return {
    statistic: state.statistic,
    sortedStatistic: state.sortedStatistic,
  };
};

const mapDispatchToProps = (dispatch) => ({
  filterData() {
    dispatch(Operations.filterData());
  },
  deleteData(data) {
    dispatch(Operations.deleteData(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticPage);
