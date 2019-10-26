import {
  USER_REQUEST,
  USER_RESPONSE_SUCC,
  USER_RESPONSE_ERROR,
} from '../types/types';
type USER_REQUEST_ACTION = {type: string};
type USER_RESP_SUCC_ACTION = {
  type: string,
  payload: {
    cardNumber: string,
    expirationDate: string,
    cvv: string,
    firstName: string,
    lastName: string,
    validationResult: boolean,
    validationFields: {
      cardNumberValid: boolean,
      expirationDateValid: boolean,
      cvvValid: boolean,
      firstNameValid: boolean,
      lastNameValid: boolean,
    },
  },
};

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
