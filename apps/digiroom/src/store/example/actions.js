import * as constants from './constants';

export function setSearchValue(data) {
  return { type: constants.SET_SEARCH_VALUE, payload: data };
}
