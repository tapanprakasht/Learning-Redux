import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

class MainScreen extends React.Component {
  static navigationOptions = {
    title: "AddressBook"
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container} />
        <Footer navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default MainScreen;
