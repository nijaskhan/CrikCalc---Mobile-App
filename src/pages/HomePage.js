import React from 'react';
import { SafeAreaView } from 'react-native';
import { appStyles } from '../styles/appStyles';
import Body from '../components/Body';
import Header from '../components/Header';
import { bodyStyles } from '../styles/bodyStyles';

const HomePage = ({navigation}) => {
    return (
        <>
            <SafeAreaView style={appStyles.container}>
                <Header navigation={navigation} />
                <Body />
            </SafeAreaView>
        </>
    )
}

export default HomePage;
