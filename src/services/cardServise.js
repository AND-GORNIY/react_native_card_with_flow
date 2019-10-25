import {validation} from './validation';

export const callAPI = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = validation(data);
      if (result.resultValid) {
        resolve({data, result});
      }
      reject({data, result});
    }, 2000);
  });
};

export class cardServise {
  sendCardInfo(data) {
    return callAPI(data);
  }
}
