//@flow
import {CHECK_TYPECARD} from '../types/types';
export type CardTypeAction = {type: string, payload: string};

export const setCardType = (cardType: string): CardTypeAction => {
  return {
    type: CHECK_TYPECARD,
    payload: cardType,
  };
};
