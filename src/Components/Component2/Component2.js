import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

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

const Component2 = ({
  cardNumber,
  expirationDate,
  cvv,
  firstName,
  lastName,
  validationResult,
  isloading,
  cardType,
  update,
}) => {
  if (update && validationResult && !isloading) {
    return (
      <View style={styles.textDirect}>
        <Text style={styles.textStyle}>
          {' '}
          Card info: ************{cardNumber.substr(12, 4)}
        </Text>
        <Text style={styles.textStyle}> Name: {firstName} </Text>
        <Text style={styles.textStyle}> Surname: {lastName}</Text>
        <Text style={styles.textStyle}> CardType: {cardType}</Text>
      </View>
    );
  }

  if (
    update &&
    !isloading &&
    (cardNumber || expirationDate || cvv || firstName || lastName || cardType)
  ) {
    return (
      <View style={styles.textDirect}>
        <Text style={styles.textStyle}> Error </Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  textDirect: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  textStyle: {
    fontSize: 25,
  },
});

export default Component2;
