import React from 'react';
import { StyleSheet, View } from 'react-native';
import ButtonGeneratePassword from './components/buttonGeneratePassword.js';
import Navigation from './navigation/navigation';

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Navigation/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
