//@flow
import {validation} from './validation';

export const callAPI = (data: {
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
}): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = validation(data);
      if (result.validationResult) {
        resolve({data, result});
      }
      reject({data, result});
    }, 2000);
  });
};

export class cardServise {
  sendCardInfo(data: {
    cardNumber: string,
    expirationDate: string,
    cvv: string,
    firstName: string,
    lastName: string,
  }) {
    return callAPI(data);
  }
}
