// Import libraries for making component
import React from 'react';
import { Text } from 'react-native';

// Make component
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

// Make component available to other parts of the app
export default Header;