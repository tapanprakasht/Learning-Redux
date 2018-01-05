import React from 'react';
import { View,Text, StyleSheet,TouchableOpacity } from 'react-native';


class ListItem extends React.Component {
    render(){
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.removeItem(this.props.id)}>
                <Text style={styles.textContainer}>{this.props.data}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        borderBottomWidth: 1,
        borderColor: '#F6F3F1',
        backgroundColor: '#FFFCFA',
        justifyContent: 'center',
    },
    textContainer: {
        marginHorizontal: 15,
    }
});

export default ListItem;
