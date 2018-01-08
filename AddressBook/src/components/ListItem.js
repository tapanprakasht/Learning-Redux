import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ListItem extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.name}>{this.props.contact.name}</Text>
                <Text style={styles.email}>{this.props.contact.email}</Text>
                <Text style={styles.phone}>{this.props.contact.phone}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        height: 70,
        borderColor: '#F6F3F1'
    },
    name: {
        paddingLeft: 12,
        paddingTop: 12,
        fontWeight: 'bold',
    },
    email: {
        paddingLeft: 12,
        paddingTop: 5,
        fontSize: 10
    },
    phone: {
        paddingLeft: 12,
        fontSize: 12
    }
})

export default ListItem;