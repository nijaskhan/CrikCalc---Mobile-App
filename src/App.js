import React from 'react';
import CreateAppContext from './store/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <CreateAppContext>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name='Home' component={HomePage} />
                    <Stack.Screen name='SummaryPage' component={SummaryPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </CreateAppContext>
    );
}

export default App;