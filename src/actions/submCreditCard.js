//@flow
import {
  USER_REQUEST,
  USER_RESPONSE_SUCC,
  USER_RESPONSE_ERROR,
} from '../types/types';
import {cardServise} from '../services/cardServise';

type UserInfo = {
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
};

export type UserRequestAction = {type: string};
export type UserRespSuccAction = {
  type: string,
  payload: {
    data: {
      cardNumber: string,
      expirationDate: string,
      cvv: string,
      firstName: string,
      lastName: string,
    },
    result: {
      validationResult: boolean,
      validationFields: {
        cardNumberValid: boolean,
        expirationDateValid: boolean,
        cvvValid: boolean,
        firstNameValid: boolean,
        lastNameValid: boolean,
      },
    },
  },
};

export type UserRespErrAction = {
  type: string,
  payload: {
    data: {
      cardNumber: string,
      expirationDate: string,
      cvv: string,
      firstName: string,
      lastName: string,
    },
    result: {
      validationResult: boolean,
      validationFields: {
        cardNumberValid: boolean,
        expirationDateValid: boolean,
        cvvValid: boolean,
        firstNameValid: boolean,
        lastNameValid: boolean,
      },
    },
  },
};

type SubmCreditCardActions =
  | UserRequestAction
  | UserRespSuccAction
  | UserRespErrAction;

type Dispatch = (action: SubmCreditCardActions) => any;

export function submCreditCard(userInfo: UserInfo) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: USER_REQUEST,
    });
    new cardServise().sendCardInfo(userInfo).then(
      data => {
        console.log(data);
        dispatch({type: USER_RESPONSE_SUCC, payload: data});
      },
      data => {
        dispatch({type: USER_RESPONSE_ERROR, payload: data});
      },
    );
  };
}
