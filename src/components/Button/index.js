import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const CMButton = ({label, color}) => {
    return (
        <View style={[styles.button, {backgroundColor: color ? color : `transparent`}]}>
            <Text style={styles.buttonText}>{label}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    button: {
        // backgroundColor: color ? color : `transparent`, 
        borderWidth: 1, 
        borderColor: 'blue', 
        borderRadius: 10, 
        padding: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        // elevation: 4,
    },
    buttonText: {
        color: 'blue', 
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CMButton;
