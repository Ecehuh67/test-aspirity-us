import { Reducer } from '../ts-types';
import { ActionCreator, ActionType } from './actions';
import { extend } from '../consts';

const initialState: Reducer = {
  statistic: [],
  sortedStatistic: [],
};

const Operations = {
  loadStatistic: () => (dispatch, getState, api) => {
    return api.get('/').then((response) => {
      dispatch(ActionCreator.loadStatistic(response));
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_STATISTIC:
      return extend(state, {
        statistic: action.payload,
      });
  }

  return state;
};

export { reducer, Operations };
