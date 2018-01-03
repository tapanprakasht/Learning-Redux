import React from 'react';
import { View,Text, Button, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import rootReducer  from './reducers';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment,decrement } from './actions/index';

const store = createStore(rootReducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <Text>{this.props.data.count}</Text>
                    <Button onPress={() => this.props.increment(this.props.data.count)} title="Increment" />
                    <Button onPress={() => this.props.decrement(this.props.data.count)} title="Decrement" />
                </View>
            </Provider>
        );
    }
}

function mapsStateToProps(state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ increment: increment, decrement: decrement }, dispatch);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default connect(mapsStateToProps,mapDispatchToProps)(App);