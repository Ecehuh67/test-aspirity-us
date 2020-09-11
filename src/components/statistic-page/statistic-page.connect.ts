import StatisticPage from '../statistic-page/statistic-page';
import { connect } from 'react-redux';
import { ActionCreator } from '../../reducer/actions';
import { Operations } from '../../reducer/reducer';

const mapStateToProps = (state) => {
  return {
    statistic: state.sortedStatistic,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadStatistic() {
    dispatch(Operations.loadStatistic());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticPage);
