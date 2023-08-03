import * as constants from './constants';

const INITIAL_STATE = {
  searchValue: null,
};

const exportedObject = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.SET_SEARCH_VALUE:
      return Object.assign({}, state, {
        searchValue: action.payload,
      });
    default:
      return state;
  }
};


export default exportedObject
