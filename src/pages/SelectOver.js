import React, { useContext } from 'react';
import { Button, TextInput, StyleSheet, Text, View, Alert } from 'react-native';
import { AppContext } from '../store/AppContext';

export default function SelectOver({ navigation }) {

    const {
        totalOvers,
        changeTotalOvers,
    } = useContext(AppContext);

    const handleSubmit = () => {
        // console.log(totalOvers)
        if (totalOvers !== 0) {
            // console.log(totalOvers);
            navigation.navigate('HomePage');
        } else {
            Alert.alert('please enter a valid over')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Over</Text>
            <TextInput
                label="Total Over"
                mode="outlined"
                onChangeText={changeTotalOvers}
                value={totalOvers}
                style={styles.input}
                placeholder="Enter total overs"
                keyboardType="numeric"
            />
            <Button
                title="PLAY"
                onPress={handleSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        marginBottom: 16,
        borderColor: '#000000',
        borderWidth: 1
    },
    button: {
        width: '50%',
    },
});
