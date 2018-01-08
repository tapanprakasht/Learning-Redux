import React from "react";
import { createStore } from "redux";
import { Text, View, StyleSheet } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddContact from './containers/AddContact';
import MainScreen from './containers/MainScreen'
import { StackNavigator } from 'react-navigation';

const BasicApp = StackNavigator({
    Main: { screen: MainScreen },
    AddContact: { screen: AddContact }
});

class App extends React.Component {
  render() {
    return (
      <BasicApp/>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default App;
