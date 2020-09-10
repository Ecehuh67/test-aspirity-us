import { UserData, Filters } from './ts-types';

export const SERVER_URL = 'http://localhost:3001/';

// imitating a server delay
export const SERVER_DELAY = 300;

export const TYPES_OF_SORTING: string[] = ['date', 'type', 'distance'];
export const DATE_FILTERS = ['All', 'Decrease', 'Increase'];
export const TYPES_FILTERS = ['All', 'Skiing', 'Running', 'Cycling', 'Walking'];

export const generateKey = (pre: number): string => {
  return `${pre}_${Math.round(Math.random() * new Date().getTime())}`;
};

export const changeDataFilter = (filter: string, data: UserData): UserData => {
  let sortedData = null;

  switch (true) {
    case filter === 'Decrease':
      sortedData = data
        .slice()
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      break;
    case filter === 'Increase':
      sortedData = data
        .slice()
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      break;
    case filter === 'All':
      sortedData = data;
      break;
  }

  return sortedData;
};

export const changeTypeFilter = (filter: string, data: UserData): UserData => {
  let sortedData = null;

  switch (true) {
    case filter === 'Skiing':
      sortedData = data.slice().filter((el) => el.type === 'Skiing');
      break;
    case filter === 'Running':
      sortedData = data.slice().filter((el) => el.type === 'Running');
      break;
    case filter === 'Cycling':
      sortedData = data.slice().filter((el) => el.type === 'Cycling');
      break;
    case filter === 'Walking':
      sortedData = data.slice().filter((el) => el.type === 'Walking');
      break;
    default:
      sortedData = data;
      break;
  }

  return sortedData;
};

export const changeDistanceFilter = (
  filter: string,
  data: UserData
): UserData => {
  let sortedData = null;

  switch (true) {
    case filter === 'Decrease':
      sortedData = data.slice().sort((a, b) => a.distance - b.distance);
      break;
    case filter === 'Increase':
      sortedData = data.slice().sort((a, b) => b.distance - a.distance);
      break;
    case filter === 'All':
      sortedData = data;
      break;
  }

  return sortedData;
};

export const changeFilter = (data: UserData, listFilters: Filters) => {
  let filteredData = data.slice();
  Object.keys(listFilters).forEach((filter) => {
    switch (true) {
      case filter === 'date':
        filteredData = changeDataFilter(listFilters[filter], filteredData);
        break;
      case filter === 'type':
        filteredData = changeTypeFilter(listFilters[filter], filteredData);
        break;
      case filter === 'distance':
        filteredData = changeDistanceFilter(listFilters[filter], filteredData);
    }
  });

  return filteredData;
};

export const validateDate = (value) => {
  const pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/i;
  const isValid = value.toString().match(pattern) !== null;
  return isValid;
};

export const changeState = (field, bool, value, cb) => {
  if (bool) {
    cb((prev) => {
      return {
        ...prev,
        [field]: {
          isValid: true,
          value,
        },
      };
    });
  } else {
    cb((prev) => {
      return {
        ...prev,
        [field]: {
          isValid: false,
          value,
        },
      };
    });
  }
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
