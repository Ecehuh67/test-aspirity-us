import { UserData } from './ts-types';

export const SERVER_URL = 'http://localhost:3001/';

export const TYPES_OF_SORTING: string[] = ['date', 'type', 'distance'];

export const generateKey = (pre: number): string => {
  return `${pre}_${Math.round(Math.random() * new Date().getTime())}`;
};
