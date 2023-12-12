import {
    ScrollView,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    SafeAreaView,
    Text
} from 'react-native';
import React, { useState } from 'react';
import { appStyles } from '../styles/appStyles';
import { bodyStyles } from '../styles/bodyStyles';
import HeaderComponent from '../components/Header/HeaderComponent';
import GridView from '../components/gridView/GridView';
import { getAllDatas } from '../asyncStorage/apiCalls';
import { useFocusEffect } from '@react-navigation/native';

export default function LandingPage({ navigation }) {

    const [histories, setHistories] = useState();

    const getHistory = async () => {
        const data = await getAllDatas();
        // console.log(data);
        setHistories(data);
    }

    useFocusEffect(
        React.useCallback(() => {
            getHistory();
        }, [])
    );

    const handleSelect = (matchId) => {
        // console.log('matchId: ', matchId);
        navigation.navigate('HistorySummaryPage', { matchId: matchId });
    };

    return (
        <SafeAreaView style={appStyles.container}>
            <HeaderComponent
                heading={'Welcome,'}
                subheading={'Click next to start a New Match'}
            />
            <ScrollView style={bodyStyles.mainContainer}>
                <View style={{
                    marginTop: 20
                }}>
                    {
                        histories?.length > 0 ? histories.map((history) => (
                            <TouchableOpacity key={history[1]?.matchId} onPress={() => handleSelect(history[1]?.matchId)}>
                                <GridView
                                    matchId={history[1]?.matchId}
                                    team1={history[1]?.team1?.teamName}
                                    team2={history[1]?.team2?.teamName}
                                    wonTeam={history[1]?.wonTeam}
                                    runsDifference={history[1]?.runsDifference}
                                />
                            </TouchableOpacity>
                        )) : (
                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                marginTop: 50
                            }}>
                                <Text style={{
                                    fontSize: 24,
                                    fontWeight: 'bold'
                                }}>No History to show</Text>
                            </View>
                        )
                    }
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('SelectOverPage')
                }}
                style={styles.floatingButton}
            >
                <Image
                    source={require('../images/rightArrow.png')}
                    style={{ width: 70, height: 70 }}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 12,
        marginTop: 20,
        marginBottom: 15
    },
    input: {
        width: '90%',
        borderColor: '#000000',
        borderRadius: 20,
        padding: 10,
        borderWidth: 1,
        color: '#000000'
    },
    inputsContainer: {
        marginTop: 30,
    },
    hintText: {
        width: '85%',
        fontSize: 12,
        color: '#7f8c8d',
        marginTop: 10
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'blue', // Set your desired background color
        borderRadius: 35, // Half of the width and height to make it a circle
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // For shadow on Android
    },
    GridView: {
        flex: 1
    }
});
