//@flow
type UserInfo = {
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
};

type ValidationReturn = {
  validationResult: boolean,
  validationFields: {
    cardNumberValid: boolean,
    expirationDateValid: boolean,
    cvvValid: boolean,
    firstNameValid: boolean,
    lastNameValid: boolean,
  },
};

export const validation = (data: UserInfo): ValidationReturn => {
  const {cardNumber, expirationDate, cvv, firstName, lastName} = data;
  let cardNumberValid,
    expirationDateValid,
    cvvValid,
    firstNameValid,
    lastNameValid,
    validationResult;

  const checkDate = (val: string): boolean => {
    if (
      !isNaN(val.slice(0, 2)) &&
      +val.slice(0, 2) < 13 &&
      !isNaN(val.substr(3, 2)) &&
      val.length === 5
    ) {
      return true;
    } else {
      return false;
    }
  };

  cardNumberValid = cardNumber.length === 16 ? true : false;
  expirationDateValid = checkDate(expirationDate);
  cvvValid = cvv.length > 2 && cvv.length < 5 ? true : false;
  firstNameValid = firstName.length > 3 ? true : false;
  lastNameValid = lastName.length > 3 ? true : false;

  validationResult =
    cardNumberValid &&
    expirationDateValid &&
    cvvValid &&
    firstNameValid &&
    lastNameValid;

  return {
    validationResult: validationResult,
    validationFields: {
      cardNumberValid: cardNumberValid,
      expirationDateValid: expirationDateValid,
      cvvValid: cvvValid,
      firstNameValid: firstNameValid,
      lastNameValid: lastNameValid,
    },
  };
};
