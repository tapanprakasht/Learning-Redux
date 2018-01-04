import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { addItem } from '../action';
class Input extends React.Component {
    render() {
        return (
            <TextInput 
            style={styles.inputStyle}
            placeholder="Enter an Item!"
            onChangeText={(text) => this.textInputValue = text }
            onSubmitEditing={() => this.props.addItem(this.textInputValue)} />
        )
    }
}

export default connect(mapsStateToProps,matchDispatchToProps)(Input);

const styles = StyleSheet.create({
    inputStyle: {
        width: "100%",
        height: 50,
        paddingLeft: 10,
        borderColor: '#F5F5F5',
        borderBottomWidth: 1,
    }
});

function mapsStateToProps(state) {
    return {
        data: state.data
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addItem: addItem} ,dispatch);
}