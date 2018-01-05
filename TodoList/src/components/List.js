import React from 'react';
import { View,FlatList, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { bindActionCreators } from 'redux';
import { removeItem } from '../action';
 
class ItemList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <FlatList
                data={this.props.items}
                renderItem={({item}) => <ListItem removeItem={this.props.removeItem} data={item.data} id={item.id}/>} 
                keyExtractor={(item, index) => index} />
            </View>
        );
    }
}

function mapsStateToProps(state) {
    return {
        items: state.items
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        backgroundColor: 'yellow',
    }
})

function mapsDispatchToProps(dispatch) {
    return bindActionCreators({ removeItem: removeItem }, dispatch);
}
export default connect(mapsStateToProps,mapsDispatchToProps)(ItemList);


