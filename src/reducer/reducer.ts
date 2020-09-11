import { Reducer } from '../ts-types';
import { ActionCreator, ActionType } from './actions';
import { extend, DATE_FILTERS, TYPES_FILTERS, changeFilter } from '../consts';

const initialState: Reducer = {
  statistic: [],
  sortedStatistic: [],
  filters: {
    date: DATE_FILTERS[0],
    type: TYPES_FILTERS[0],
    distance: DATE_FILTERS[0],
  },
};

const Operations = {
  loadStatistic: () => (dispatch, getState, api) => {
    return api.get('/').then((response) => {
      dispatch(ActionCreator.loadStatistic(response));
    });
  },
  setFilters: (filter) => (dispatch, getState, api) => {
    return dispatch(ActionCreator.setFilters(filter));
  },
  resetFilter: (filter) => (dispatch, getState, api) => {
    return dispatch(ActionCreator.resetFilter(filter));
  },
  filterData: () => (dispatch, getState, api) => {
    return dispatch(ActionCreator.filterData());
  },
  deleteData: (data) => (dispatch, getState, api) => {
    return api
      .post('/', data)
      .then((response) => dispatch(ActionCreator.deleteData(response.data)));
  },
  editData: (data) => (dispatch, getState, api) => {
    return api
      .post('editItem', data)
      .then((response) => dispatch(ActionCreator.editData(response.data)));
  },
  addData: (data) => (dispatch, getState, api) => {
    return api
      .post('newItem', data)
      .then((response) => dispatch(ActionCreator.addData(response.data)));
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_STATISTIC:
      return extend(state, {
        statistic: action.payload,
        sortedStatistic: action.payload,
      });
    case ActionType.SET_FILTERS:
      return extend(state, {
        filters: extend(state.filters, action.payload),
      });
    case ActionType.RESET_FILTER:
      return extend(state, {
        filters: extend(state.filters, { [action.payload]: 'All' }),
      });
    case ActionType.FILTER_DATA:
      const newData = changeFilter(state.statistic, state.filters);
      return extend(state, {
        sortedStatistic: newData,
      });

    case ActionType.DELETE_STATISTIC:
      return extend(state, {
        statistic: action.payload,
      });

    case ActionType.PATCH_STATISTIC:
      return extend(state, {
        statistic: action.payload,
      });

    case ActionType.ADD_DATA:
      return extend(state, {
        statistic: action.payload,
      });
  }

  return state;
};

export { reducer, Operations };
