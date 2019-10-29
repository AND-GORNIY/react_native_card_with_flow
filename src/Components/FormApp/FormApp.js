//@flow
import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Component1Container from '../Component1';
import Component2Container from '../Component2';
import Component4Container from '../Component4';
type Props = {};
type State = {};
class FormApp extends Component<Props, State> {
  render() {
    return (
      <ScrollView style={styles.ScrollView}>
        <Component1Container />
        <Component2Container />
        <Component4Container />
      </ScrollView>
    );
  }
}
export default FormApp;

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: '#4fc3f7',
  },
});
