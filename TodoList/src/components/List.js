import React from 'react';
import { View,FlatList, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class ItemList extends React.Component {
    render() {
        console.log(this.props.dataSource);
        return (
            <View style={styles.container}>
              <FlatList 
                data={this.props.dataSource}
                renderItem={({item}) => { <Text>item.data</Text> }}
                keyExtractor={(item, index) => index}
              />
            </View>
        );
    }
}

function mapsStateToProps(state) {
    return {
        dataSource: state.data
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'yellow',
    }
})

export default connect(mapsStateToProps)(ItemList);


