import React from 'react';
import { View, Text, ScrollView,StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import { createStore } from 'redux';
import Input from './components/Input';
import rootReducer  from './reducers';
import { Provider } from 'react-redux';
import ItemList  from './components/List';

const store = createStore(rootReducer);

class App extends React.Component {
    render() {
        return(
            <View style={styles.content}>
                <Header/>
                    <Input />
                    <ItemList />
                <Footer/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    }
})
export default App;