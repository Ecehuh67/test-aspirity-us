import NewData from './new-data';
import { connect } from 'react-redux';
import { ActionCreator } from '../../reducer/actions';
import { Operations } from '../../reducer/reducer';

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  editData(data) {
    dispatch(Operations.editData(data));
  },
  addData(data) {
    dispatch(Operations.addData(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewData);
