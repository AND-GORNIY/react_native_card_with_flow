import React from 'react';
import {connect} from 'react-redux';
import Component2 from './Component2';
type Props = {
  cardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  validationResult: string,
  cardType: string,
  isloading: boolean,
};
type State = {update: boolean, timerID: any};

class Component2Container extends React.Component<Props, State> {
  state = {
    update: false,
    timerID: undefined,
  };

  startTimer = () => {
    const timerID = setTimeout(() => {
      this.setState({
        update: false,
      });
    }, 5000);

    this.setState({
      update: true,
      timerID,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps === this.props) {
      return;
    }
    if (!this.state.update) {
      return this.startTimer();
    }
    clearTimeout(this.state.timerID);
    this.startTimer();
  }

  render() {
    const {
      cardNumber,
      expirationDate,
      cvv,
      firstName,
      lastName,
      validationResult,
      isloading,
      cardType,
    } = this.props;
    return (
      <Component2
        update={this.state.update}
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        cvv={cvv}
        firstName={firstName}
        lastName={lastName}
        validationResult={validationResult}
        isloading={isloading}
        cardType={cardType}
      />
    );
  }
}
const mapStateToProps = store => {
  return {
    cardNumber: store.userInfo.cardNumber,
    expirationDate: store.userInfo.expirationDate,
    cvv: store.userInfo.cvv,
    firstName: store.userInfo.firstName,
    lastName: store.userInfo.lastName,
    validationResult: store.userInfo.validationResult,
    isloading: store.userInfo.isloading,
    cardType: store.userInfo.cardType,
  };
};

const Component2ContainerConnnect = connect(mapStateToProps)(
  Component2Container,
);
export default Component2ContainerConnnect;
