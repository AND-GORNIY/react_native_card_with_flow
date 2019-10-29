import {
  USER_REQUEST,
  USER_RESPONSE_SUCC,
  USER_RESPONSE_ERROR,
  CHECK_TYPECARD,
} from '../types/types';
import type {
  UserRequestAction,
  UserRespSuccAction,
  UserRespErrAction,
} from '../actions/submCreditCard';
import type {CardTypeAction} from '../actions/setCardType';

type Actions =
  | UserRequestAction
  | UserRespErrAction
  | UserRespSuccAction
  | CardTypeAction;

type InitialState = {
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  cardType: string,
  validationResult: boolean,
  validationFields: {
    cardNumberValid: boolean,
    expirationDateValid: boolean,
    cvvValid: boolean,
    firstNameValid: boolean,
    lastNameValid: boolean,
  },
  animateSpiner: boolean,
  editableForm: boolean,
  disabledButtom: boolean,
  isloading: boolean,
};

const initialState: InitialState = {
  cardNumber: '',
  expirationDate: '',
  cvv: '',
  firstName: '',
  lastName: '',
  cardType: '',
  validationResult: false,
  validationFields: {
    cardNumberValid: true,
    expirationDateValid: true,
    cvvValid: true,
    firstNameValid: true,
    lastNameValid: true,
  },
  animateSpiner: false,
  editableForm: true,
  disabledButtom: false,
  isloading: false,
};

export const reducerInfo = (
  state: InitialState = initialState,
  action: Actions,
): InitialState => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        animateSpiner: true,
        editableForm: false,
        disabledButtom: true,
        isloading: true,
      };
    case USER_RESPONSE_SUCC:
      return {
        ...state,
        animateSpiner: false,
        editableForm: true,
        disabledButtom: false,
        isloading: false,
        ...action.payload.data,
        ...action.payload.result,
      };
    case USER_RESPONSE_ERROR:
      return {
        ...state,
        animateSpiner: false,
        editableForm: true,
        disabledButtom: false,
        isloading: false,
        ...action.payload.data,
        ...action.payload.result,
      };
    case CHECK_TYPECARD:
      return {
        ...state,
        cardType: action.payload,
      };
    default:
      return state;
  }
};
