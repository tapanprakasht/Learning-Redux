import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { removeAllItems } from '../action/index';
import { connect } from 'react-redux';

const Footer = () => {
    return(
        <TouchableOpacity style={styles.header} onPress={() => this.props.removeAllItems}>
            <Text style={styles.headerText} >Remove completed items</Text>
        </TouchableOpacity>
    )
}
export default connect(mapsStateToProps,mapsDispatchToProps)(Footer);

function mapsStateToProps(state) {
    return {
        items: state.items
    }
}
function mapsDispatchToProps(dispatch) {
    return bindActionCreators({ removeAllItems: removeAllItems }, dispatch);
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#F5F5F5',
        borderTopWidth: 1,
    },
    headerText: {
       color: 'red',
    }
});