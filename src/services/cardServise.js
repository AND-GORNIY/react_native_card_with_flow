//@flow
import {validation} from './validation';
type UserInfo = {
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
};

export const callAPI = (data: UserInfo): Promise<any> => {
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
  sendCardInfo(data: UserInfo) {
    return callAPI(data);
  }
}
