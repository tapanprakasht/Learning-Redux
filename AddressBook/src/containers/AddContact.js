import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

class AddContact extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.name} placeholder="Name" />
        <TextInput style={styles.email} placeholder="Email" />
        <TextInput style={styles.phone} placeholder="Phone" />
        <Button style={styles.addButton} title="Add"
          onPress={ () => {} } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    backgroundColor: 'white'
  },
  name: {
    marginTop: 12,
    height: 50
  },
  email: {
    marginTop: 12,
    height: 50
  },
  phone: {
    marginTop: 12,
    paddingTop: 15,
    height: 50
  },
  addButton: {
    marginTop: 12,
  }
});
export default AddContact;
