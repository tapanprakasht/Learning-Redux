import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Header extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>Add new contact</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: "gray"
  },
  text: {
    color: "red"
  }
});
export default Header;
