import { Cities } from '@/types';
import { atom } from 'jotai';

const defaultCity = {
  name: 'No City Selected',
};

export const currentCityAtom = atom<Cities | typeof defaultCity>(defaultCity);
