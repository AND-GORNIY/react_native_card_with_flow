import React, {Component} from 'react';
import {
  StyleSheet,
  Picker,
  View,
  TextInput,
  Button,
  Text,
  SafeAreaView,
} from 'react-native';

class Componet4 extends Component {
  state = {
    title: '',
    weight: '',
    isEditing: true,
  };
  render() {
    return (
      <SafeAreaView>
        <View>
          <TextInput placeholder={'title'} />
          <TextInput placeholder={'weight'} />
          <Picker
            selectedValue={''}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({language: itemValue})
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
      </SafeAreaView>
    );
  }
}
export default Componet4;

const styles = StyleSheet.create({});
