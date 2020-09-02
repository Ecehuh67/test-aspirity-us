import { UserData } from './ts-types';

export const TYPES_OF_SORTING: string[] = ['date', 'type', 'distance'];

const MAX_DISTANCE = 10000;

export const generateKey = (pre: number): string => {
  return `${pre}_${Math.round(Math.random() * new Date().getTime())}`;
};

export const TYPES_OF_ACTIVITY: string[] = [
  'Skiing',
  'Running',
  'Cycling',
  'Walking',
];

export const generateUserData = (count: number): UserData => {
  const newData = new Array(count).fill('').map((el) => {
    const day = Math.round(Math.random() * new Date().getDate());
    const month = Math.round(Math.random() * new Date().getMonth());
    const year = new Date().getFullYear() - Math.round(Math.random() * 500);
    return {
      date: `${day < 10 ? `0${day}` : { day }}/${
        month < 10 ? `0${month}` : { month }
      }/${year}`,
      type:
        TYPES_OF_ACTIVITY[Math.floor(Math.random() * TYPES_OF_ACTIVITY.length)],
      distance: Math.floor(Math.random() * MAX_DISTANCE),
    };
  });

  return newData;
};
