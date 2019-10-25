import {
  USER_REQUEST,
  USER_RESPONSE_SUCC,
  USER_RESPONSE_ERROR,
} from '../types/types';

import {cardServise} from '../services/cardServise';

export function submCreditCard(userInfo) {
  return dispatch => {
    dispatch({
      type: USER_REQUEST,
    });
    new cardServise().sendCardInfo(userInfo).then(
      data => {
        dispatch({type: USER_RESPONSE_SUCC, payload: data});
      },
      data => {
        dispatch({type: USER_RESPONSE_ERROR, payload: data});
      },
    );
  };
}
