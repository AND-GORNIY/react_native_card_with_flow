import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Component3Container from '../Component3';

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
  setInfoLocal: (val: string) => void,
  onSubmit: void => void,
};

const Component1 = ({
  validationFields,
  animateSpiner,
  editableForm,
  disabledButtom,
  onSubmit,
  setInfoLocal,
}: Props) => {
  const {
    cardNumberValid,
    expirationDateValid,
    cvvValid,
    firstNameValid,
    lastNameValid,
  } = validationFields;

  return (
    <SafeAreaView style={styles.FormContainer}>
      <Text style={styles.Text}>Card info </Text>

      <Text style={styles.Text}> CARD NUMBER </Text>
      <TextInput
        onChangeText={setInfoLocal('cardNumber')}
        style={[
          styles.InputStyleTrue,
          cardNumberValid ? styles.borderStyleTrue : styles.borderStyleError,
        ]}
        maxLength={16}
        placeholder={'****-****-****-****'}
        editable={editableForm}
      />

      <View style={styles.thirdLine}>
        <View>
          <Text style={styles.Text}> EXP. DATE </Text>
          <TextInput
            onChangeText={setInfoLocal('expirationDate')}
            style={[
              styles.InputStyleTrue,
              styles.thirdLineInput,
              expirationDateValid
                ? styles.borderStyleTrue
                : styles.borderStyleError,
            ]}
            maxLength={5}
            placeholder={'**/**'}
            editable={editableForm}
          />
        </View>

        <View>
          <Text style={styles.Text}> CVV </Text>
          <TextInput
            onChangeText={setInfoLocal('cvv')}
            style={[
              styles.InputStyleTrue,
              styles.thirdLineInput,
              cvvValid ? styles.borderStyleTrue : styles.borderStyleError,
            ]}
            maxLength={4}
            placeholder={'****'}
            editable={editableForm}
          />
        </View>
      </View>

      <Text style={styles.Text}> NAME </Text>
      <TextInput
        onChangeText={setInfoLocal('firstName')}
        style={[
          styles.InputStyleTrue,
          firstNameValid ? styles.borderStyleTrue : styles.borderStyleError,
        ]}
        maxLength={16}
        editable={editableForm}
      />

      <Text style={styles.Text}> SURNAME </Text>
      <TextInput
        onChangeText={setInfoLocal('lastName')}
        style={[
          styles.InputStyleTrue,
          lastNameValid ? styles.borderStyleTrue : styles.borderStyleError,
        ]}
        maxLength={16}
        editable={editableForm}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onSubmit}
        disabled={disabledButtom}>
        <Text style={styles.buttonText}> Submit </Text>
      </TouchableOpacity>
      <ActivityIndicator
        size="large"
        color="#00ff00"
        animating={animateSpiner}
        style={styles.spiner}
      />
      <Component3Container />
    </SafeAreaView>
  );
};

export default Component1;

const styles = StyleSheet.create({
  FormContainer: {
    flex: 1,
    alignItems: 'center',
  },
  InputStyleTrue: {
    borderWidth: 2,
    width: 300,
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 15,
    paddingStart: 15,
    paddingEnd: 15,
    backgroundColor: '#8bf6ff',
  },
  borderStyleError: {
    borderColor: 'red',
  },
  borderStyleTrue: {
    borderColor: 'black',
  },
  Text: {
    fontSize: 25,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0093c4',
    width: 200,
    height: 65,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 30,
  },
  thirdLine: {
    flex: 1,
    flexDirection: 'row',
  },
  thirdLineInput: {
    width: 150,
  },
  spiner: {
    marginTop: 15,
  },
});
