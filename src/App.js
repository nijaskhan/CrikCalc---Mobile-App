import React from 'react';
import Toast from 'react-native-toast-message';
import CreateAppContext from './store/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';
import SelectTeams from './pages/SelectTeams';
import TossSelectPage from './pages/TossSelectPage';
import LandingPage from './pages/LandingPage';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <>
            <CreateAppContext>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen name='landingPage' component={LandingPage} />
                        <Stack.Screen name='SelectOverPage' component={SelectTeams} />
                        <Stack.Screen name='SelectBattingTeam' component={TossSelectPage} />
                        <Stack.Screen name='HomePage' component={HomePage} />
                        <Stack.Screen name='SummaryPage' component={SummaryPage} />
                    </Stack.Navigator>
                </NavigationContainer>
            </CreateAppContext>
            <Toast />
        </>
    );
}

export default App;