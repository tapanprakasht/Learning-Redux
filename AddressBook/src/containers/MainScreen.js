import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList
} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import ListItem from "../components/ListItem";

class MainScreen extends React.Component {
  static navigationOptions = {
    title: "AddressBook",
    headerStyle: { backgroundColor: "skyblue" },
    headerTitleStyle: { color: "white" }
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.props.contact}
          renderItem={({ item }) => <ListItem contact={item} />}
          keyExtractor={(item, index) => index}
        />
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}

function mapsStateToProps(state) {
  return {
    contact: state.contact
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1,
    backgroundColor: "white"
  }
});
export default connect(mapsStateToProps)(MainScreen);
