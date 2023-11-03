import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { SafeAreaView } from 'react-native';
import { appStyles } from './styles/appStyles';

const App = () => {
    return (
        <SafeAreaView style={appStyles.container}>
            <Header />
            <Body />
        </SafeAreaView>
    );
}

export default App;