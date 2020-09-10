import PreviewScreen from './preview-screen';
import { connect } from 'react-redux';
import { ActionCreator } from '../../reducer/actions';
import { Operations } from '../../reducer/reducer';

const mapStateToProps = (state) => {
  return {
    statistic: state.statistic,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadStatistic() {
    dispatch(Operations.loadStatistic());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewScreen);
