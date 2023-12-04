import React, { useContext } from 'react';
import { TextInput, StyleSheet, Text, View, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AppContext } from '../store/AppContext';
import HeaderComponent from '../components/Header/HeaderComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appStyles } from '../styles/appStyles';
import { bodyStyles } from '../styles/bodyStyles';

export default function SelectOver({ navigation }) {

    const {
        totalOvers,
        changeTotalOvers,
    } = useContext(AppContext);

    const handleSubmit = () => {
        if (totalOvers !== 0) {
            navigation.navigate('HomePage');
        } else {
            Alert.alert('please enter a valid over')
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
                            style={styles.input}
                            placeholder="Enter team 1 name"
                            placeholderTextColor={'#2f3542'}
                        />
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            label="Team 2 name"
                            mode="outlined"
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
                        <Text style={styles.hintText}>Leave the overs blank If you are not sure</Text>
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
