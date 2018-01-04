import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>Todo List</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 50,
        backgroundColor: '#87CEEB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
       color: 'white',
    }
});