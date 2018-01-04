import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';

const Footer = () => {
    return(
        <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>Remove completed items</Text>
        </TouchableOpacity>
    )
}
export default Footer;

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