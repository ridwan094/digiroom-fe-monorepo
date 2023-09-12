import * as constants from './constants';

const INITIAL_STATE = {
  isMobileScreen: false,
  screenSize: {
    width: 0,
    height: 0,
  },
  isLogin: false,
};

const exportedObject = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.SET_SCREEN_SIZE:
      return { ...state, screenSize: action.payload };
    case constants.SET_IS_MOBILE_SCREEN:
      return { ...state, isMobileScreen: action.payload };
    case constants.SET_IS_LOGIN:
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
};

export default exportedObject;
