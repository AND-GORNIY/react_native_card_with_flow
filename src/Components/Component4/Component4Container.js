import React, {Component} from 'react';
import Component4 from './Component4';
type Props = {};
type State = {
  title: string,
  weight: string,
  size: string,
  country: string,
  isEditing: boolean,
};
class Component4Container extends Component<Props, State> {
  state = {
    title: '',
    weight: '',
    size: '',
    country: '',
    isEditing: true,
  };
  setInputData = data => {
    return val => {
      this.setState({[data]: val});
    };
  };
  pressButton = fieldName => {
    switch (fieldName) {
      case 'Save':
        return () => this.setState({isEditing: false});
      case 'Edit':
        return () => this.setState({isEditing: true});
      default:
        return null;
    }
  };

  render() {
    const {title, weight, size, country, isEditing} = this.state;
    return (
      <Component4
        setInputData={this.setInputData}
        pressButton={this.pressButton}
        title={title}
        weight={weight}
        size={size}
        country={country}
        isEditing={isEditing}
      />
    );
  }
}
export default Component4Container;
