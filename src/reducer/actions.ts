const ActionType = {
  LOAD_STATISTIC: 'LOAD_STATISTIC',
  DELETE_STATISTIC: 'DELETE_STATISTIC',
  PATCH_STATISTIC: 'PATCH_STATISTIC',
  SET_FILTERS: 'SET_FILTERS',
  RESET_FILTER: 'RESET_FILTER',
  FILTER_DATA: 'FILTER_DATA',
};

const ActionCreator = {
  loadStatistic: (statistic) => {
    return {
      type: ActionType.LOAD_STATISTIC,
      payload: statistic.data,
    };
  },
  setFilters: (filter) => {
    return {
      type: ActionType.SET_FILTERS,
      payload: filter,
    };
  },
  resetFilter: (filter) => {
    return {
      type: ActionType.RESET_FILTER,
      payload: filter,
    };
  },
  filterData: () => {
    return {
      type: ActionType.FILTER_DATA,
      payload: null,
    };
  },
};

export { ActionType, ActionCreator };
