const ActionType = {
  LOAD_STATISTIC: 'LOAD_STATISTIC',
  DELETE_STATISTIC: 'DELETE_STATISTIC',
  PATCH_STATISTIC: 'PATCH_STATISTIC',
};

const ActionCreator = {
  loadStatistic: (statistic) => {
    return {
      type: ActionType.LOAD_STATISTIC,
      payload: statistic.data,
    };
  },
};

export { ActionType, ActionCreator };
