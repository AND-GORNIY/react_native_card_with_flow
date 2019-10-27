//@flow
import React, {Component} from 'react';
import {
  StyleSheet,
  Picker,
  View,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
type Props = {};
type State = {
  title: string,
  weight: string,
  size: string,
  country: string,
  isEditing: boolean,
};
class Componet4 extends Component<Props, State> {
  state = {
    title: '',
    weight: '',
    size: '',
    country: '',
    isEditing: true,
  };
  InputTitle = (title: string) => {
    this.setState({title});
  };
  InputWeight = (weight: string) => {
    this.setState({weight});
  };
  InputSize = (size: string) => {
    this.setState({size});
  };
  InputPicker = (country: string) => {
    this.setState({country: country});
  };
  PressSave = () => {
    this.setState({isEditing: false});
  };
  PressEdit = () => {
    this.setState({isEditing: true});
  };
  render() {
    console.log(this.state);
    const {isEditing, country, title, size, weight} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.GoodsCard}>
          <Text style={styles.TextTitle}> Product Info </Text>
          <Text style={styles.TextForFields}> Product title </Text>
          <TextInput
            placeholder={'title'}
            style={styles.InputStyleTrue}
            onChangeText={this.InputTitle}
            maxLength={10}
            editable={isEditing}
          />
          <Text style={styles.TextForFields}> Product weight </Text>
          <TextInput
            placeholder={'weight'}
            style={styles.InputStyleTrue}
            onChangeText={this.InputWeight}
            maxLength={5}
            editable={isEditing}
          />
          <Text style={styles.TextForFields}> Product size </Text>
          <TextInput
            placeholder={'size'}
            style={styles.InputStyleTrue}
            onChangeText={this.InputSize}
            maxLength={8}
            editable={isEditing}
          />
          <Text style={styles.TextForFields}> Сountry of manufacture </Text>
          {isEditing ? (
            <Picker
              selectedValue={country}
              style={styles.Picker}
              onValueChange={this.InputPicker}
              enabled={isEditing}>
              <Picker.Item label="USA" value="USA" />
              <Picker.Item label="UA" value="UA" />
              <Picker.Item label="India" value="India" />
              <Picker.Item label="GE" value="GE" />
            </Picker>
          ) : null}
        </View>
        <View style={styles.ButtonsDirection}>
          <TouchableOpacity style={styles.Button} onPress={this.PressSave}>
            <Text style={styles.TextButton}> Save </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={this.PressEdit}>
            <Text style={styles.TextButton}> Edit </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.VievInfo}>
          {!isEditing ? (
            <View>
              <Text style={styles.TexInfo}>Title: {title}</Text>
              <Text style={styles.TexInfo}>Weight: {weight}</Text>
              <Text style={styles.TexInfo}>Size: {size}</Text>
              <Text style={styles.TexInfo}>Country: {country}</Text>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}
export default Componet4;

const styles = StyleSheet.create({
  GoodsCard: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    width: '90%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    height: 550,
  },
  InputStyleTrue: {
    borderWidth: 2,
    width: 320,
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 15,
    paddingStart: 15,
    paddingEnd: 15,
    backgroundColor: '#8bf6ff',
  },
  TextTitle: {
    fontSize: 25,
    fontStyle: 'italic',
    padding: 5,
  },
  TextForFields: {
    fontSize: 25,
    alignSelf: 'flex-start',
  },
  Picker: {
    height: 200,
    width: 200,
  },
  ButtonsDirection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0093c4',
    width: 175,
    height: 65,
    borderRadius: 60,
    margin: 10,
  },
  TextButton: {
    fontSize: 25,
  },
  VievInfo: {
    flex: 1,
    alignItems: 'center',
  },
  TexInfo: {
    fontSize: 25,
  },
});
