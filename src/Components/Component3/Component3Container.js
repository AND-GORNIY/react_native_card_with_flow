//@flow
import React from 'react';
import {connect} from 'react-redux';
import {setCardType} from '../../actions/setCardType';
import Component3 from './Component3';

type Props = {cardNumber: string, setCardType(cardNumber: string): string};
type State = {};

class Component3Container extends React.PureComponent<Props, State> {
  checkCardType = (cardNumber: string): string => {
    let lastFourSymbol = Number(cardNumber.substr(12, 4));
    let type;
    if (lastFourSymbol < 2000) {
      type = 'VISA';
    } else {
      type = 'MASTERCARD';
    }
    return type;
  };

  render() {
    // eslint-disable-next-line no-shadow
    const {cardNumber, setCardType} = this.props;
    if (
      cardNumber !== undefined &&
      cardNumber !== '' &&
      cardNumber.length === 16
    ) {
      const type = this.checkCardType(cardNumber);
      setCardType(type);
      return <Component3 type={type} />;
    }
    return null;
  }
}

const mapStateToProps = store => {
  return {
    cardNumber: store.userInfo.cardNumber,
  };
};

const mapDispatchToprops = dispatch => {
  return {
    setCardType: type => dispatch(setCardType(type)),
  };
};

const Component3ContainerConnect = connect(
  mapStateToProps,
  mapDispatchToprops,
)(Component3Container);

export default Component3ContainerConnect;
