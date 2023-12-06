import React, { useContext, useState } from 'react';
import { TextInput, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Vibration } from 'react-native';
import { AppContext } from '../store/AppContext';
import HeaderComponent from '../components/Header/HeaderComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appStyles } from '../styles/appStyles';
import { bodyStyles } from '../styles/bodyStyles';
import Toast from 'react-native-toast-message';

export default function SelectOver({ navigation }) {

    const {
        totalOvers,
        changeTotalOvers,
        changeTeams
    } = useContext(AppContext);

    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');

    const handleSubmit = () => {
        Vibration.vibrate();
        if (totalOvers !== 0 && totalOvers) {
            if (team1&&team2) {
                changeTeams([team1, team2]);
                navigation.navigate('SelectBattingTeam');
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'All fields are required',
                    text2: 'Teams name should not be empty !!!',
                    position: 'top'
                });
                changeTeams([]);
            }   
        } else {
            Toast.show({
                type: 'error',
                text1: 'All fields are required',
                text2: 'Over should not be empty !!!',
                position: 'top'
            });
            changeTeams([]);
        }
    }

    return (
        <SafeAreaView style={appStyles.container}>
            <HeaderComponent heading={'Choose the Teams'} />
            <ScrollView style={bodyStyles.mainContainer}>
                <View style={styles.inputsContainer}>
                    <View style={styles.container}>
                        <TextInput
                            label="Team 1 name"
                            mode="outlined"
                            value={team1}
                            onChangeText={setTeam1}
                            style={styles.input}
                            placeholder="Enter team 1 name"
                            placeholderTextColor={'#2f3542'}
                        />
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            label="Team 2 name"
                            mode="outlined"
                            value={team2}
                            onChangeText={setTeam2}
                            style={styles.input}
                            placeholder="Enter team 2 name"
                            placeholderTextColor={'#2f3542'}
                        />
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            label="Total Over"
                            mode="outlined"
                            onChangeText={changeTotalOvers}
                            value={totalOvers}
                            style={styles.input}
                            placeholder="Enter total overs"
                            placeholderTextColor={'#2f3542'}
                            keyboardType="numeric"
                        />
                        <Text style={styles.hintText}>Dont leave the fields blank, All fields are required</Text>
                    </View>
                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={styles.container} >
                            <Image
                                source={require('../images/rightArrow.png')}
                                style={{ width: 70, height: 70, marginTop: 25 }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
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
    }
});
