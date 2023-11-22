import React from 'react';
import { SafeAreaView } from 'react-native';
import { appStyles } from '../styles/appStyles';
import Body from '../components/Body';
import Header from '../components/Header';

const HomePage = () => {
    return (
        <>
            <SafeAreaView style={appStyles.container}>
                <Header />
                <Body />
            </SafeAreaView>
        </>
    )
}

export default HomePage;
