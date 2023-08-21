import * as constants from './constants';

export function setScreenSize(value) {
  return { type: constants.SET_SCREEN_SIZE, payload: value };
}

export function setIsMobileScreen(value) {
  return { type: constants.SET_IS_MOBILE_SCREEN, payload: value };
}
