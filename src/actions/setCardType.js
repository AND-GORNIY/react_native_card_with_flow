//@flow
import {CHECK_TYPECARD} from '../types/types';
type cardTypeAction = {type: string, payload: string};

export const setCardType = (cardType: string): cardTypeAction => {
  return {
    type: CHECK_TYPECARD,
    payload: cardType,
  };
};
