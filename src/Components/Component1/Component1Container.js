//@flow
import React from 'react';
import {submCreditCard} from '../../actions/submCreditCard';
import Component1 from './Component1';
import {connect} from 'react-redux';

type Props = {
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
  submCreditCard(State): {type: string, payload: State},
};

type State = {
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
};

class Component1Container extends React.Component<Props, State> {
  state = {
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    firstName: '',
    lastName: '',
  };
  onSubmit = () => {
    this.props.submCreditCard(this.state);
  };
  setInfoLocal = (fieldName: string) => {
    return (data: string) => this.setState({[fieldName]: data});
  };
  render() {
    console.log(this.state);
    const {
      validationFields,
      animateSpiner,
      editableForm,
      disabledButtom,
    } = this.props;
    return (
      <Component1
        validationFields={validationFields}
        animateSpiner={animateSpiner}
        editableForm={editableForm}
        disabledButtom={disabledButtom}
        onSubmit={this.onSubmit}
        setInfoLocal={this.setInfoLocal}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    validationFields: store.userInfo.validationFields,
    animateSpiner: store.userInfo.animateSpiner,
    editableForm: store.userInfo.editableForm,
    disabledButtom: store.userInfo.disabledButtom,
  };
};

const mapDispatchToprops = dispatch => {
  return {
    submCreditCard: userInfo => dispatch(submCreditCard(userInfo)),
  };
};

const Component1ContainerConnect = connect(
  mapStateToProps,
  mapDispatchToprops,
)(Component1Container);

export default Component1ContainerConnect;
