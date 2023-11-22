import React from 'react';
import CreateAppContext from './store/AppContext';
import HomePage from './pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <CreateAppContext>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name='Home' component={HomePage} />
                    {/* <HomePage /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </CreateAppContext>
    );
}

export default App;