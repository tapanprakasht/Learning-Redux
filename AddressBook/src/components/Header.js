import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>AddressBook</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
});
export default Header;
