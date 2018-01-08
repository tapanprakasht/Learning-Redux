import React from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import { bindActionCreators } from "redux";
import { addContact } from "../actions/index";
import { connect } from "react-redux";

class AddContact extends React.Component {
  static navigationOptions = {
    title: "Add Contact",
    headerStyle: { backgroundColor: "skyblue" },
    headerTitleStyle: { color: "white" }
  };
  componentDidMount() {
    console.log("Loaded addContact");
  }
  showAlert = () => {
    Alert.alert("Message", "New Contact added", [{ text: "OK" }], {
      cancelable: true
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.name}
          placeholder="Name"
          onChangeText={text => (this.name = text)}
        />
        <TextInput
          style={styles.email}
          placeholder="Email"
          onChangeText={text => (this.email = text)}
        />
        <TextInput
          style={styles.phone}
          placeholder="Phone"
          onChangeText={text => (this.phone = text)}
        />
        <Button
          style={styles.addButton}
          title="Add Contact"
          onPress={() => {
            this.props.addContact({
              name: this.name,
              email: this.email,
              phone: this.phone
            });
            this.showAlert();
          }}
        />
      </View>
    );
  }
}

function mapsStateToProps(state) {
  return {
    contacts: state.contact
  };
}

function mapsDispatchToProps(dispatch) {
  return bindActionCreators({ addContact: addContact }, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  name: {
    marginTop: 12,
    marginHorizontal: 15,
    height: 50
  },
  email: {
    marginTop: 12,
    marginHorizontal: 15,
    height: 50
  },
  phone: {
    marginTop: 12,
    paddingTop: 15,
    marginHorizontal: 15,
    height: 50
  },
  addButton: {
    marginTop: 12
  }
});
export default connect(mapsStateToProps, mapsDispatchToProps)(AddContact);
