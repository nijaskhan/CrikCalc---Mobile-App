import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appStyles } from '../styles/appStyles';
import { bodyStyles } from '../styles/bodyStyles';
import HeaderComponent from '../components/Header/HeaderComponent';
import { AppContext } from '../store/AppContext';
import Toast from 'react-native-toast-message';

export default function TossSelectPage({ navigation }) {
    const {
        teams,
        changeCurrentTeam,
        currentTeam
    } = useContext(AppContext);

    const handleTeam = (team) => {
        changeCurrentTeam(team);
    }

    const handleSubmit = () => {
        if (currentTeam) {
            navigation.navigate('HomePage');
        } else {
            Toast.show({
                type: 'error',
                text1: 'Please select a Team to continue',
                position: 'top'
            })
        }
    }
    return (
        <SafeAreaView style={appStyles.container}>
            <HeaderComponent heading={'Pick the Batting Team'} />
            <ScrollView style={bodyStyles.mainContainer}>
                <View style={styles.inputsContainer}>
                    {
                        teams?.map((team) =>
                        (
                            <TouchableOpacity 
                                key={team}
                                onPress={() => {
                                    handleTeam(team);
                                }}
                            >
                                <View style={[styles.centerInput, {
                                    backgroundColor: currentTeam===team ? '#95afc0' : 'transparent'
                                }]}>
                                    <Text style={styles.input} >
                                        {team}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                        )
                    }
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
    inputsContainer: {
        marginTop: 30,
    },
    container: {
        marginHorizontal: 12,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 15
    },
    input: {
        padding: 30,
        alignItems: 'center',
        fontSize: 24,
        color: '#000000',
        fontWeight: 'bold'
    },
    centerInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%',
        marginTop: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 20,
    }
});