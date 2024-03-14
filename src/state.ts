import { Cities, City } from '@/types';
import { atomWithStorage } from 'jotai/utils';

const defaultCity = {
  name: 'No City Selected',
};

export const currentCityAtom = atomWithStorage<City | typeof defaultCity>(
  'currentCity',
  defaultCity
);

export const cityHistoryAtom = atomWithStorage<Cities>('cityHistory', []);
