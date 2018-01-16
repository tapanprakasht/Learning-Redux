import React from "react";
import { View, Text } from "react-native";
import { bindActionCreators } from "redux";
import connect from "react-redux";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <View>
        <Text>Test</Text>
      </View>
    );
  }
}
function mapsStateToProps(state) {
  return {
    data: state.data
  };
}

function mapsDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchLatestLauchDetails: fetchLatestLauchDetails },
    dispatch
  );
}
export default connect(mapsDispatchToProps, mapsDispatchToProps)(App);
