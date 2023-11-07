import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { SafeAreaView } from 'react-native';
import { appStyles } from './styles/appStyles';
import CreateAppContext from './store/AppContext';

const App = () => {
    return (
        <CreateAppContext>
            <SafeAreaView style={appStyles.container}>
                <Header />
                <Body />
            </SafeAreaView>
        </CreateAppContext>
    );
}

export default App;