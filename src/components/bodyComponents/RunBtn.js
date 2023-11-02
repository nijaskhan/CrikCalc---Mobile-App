import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function RunBtn(props) {
    return (
        <View style={styles.container}>
            {
                props.runs && props.runs.map((btn) => (
                    <View key={btn.name} style={styles.border}>
                        <Text style={styles.text}>{btn.visual}</Text>
                    </View>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30,
    },
    border: {
        height: 80,
        width: 80,
        backgroundColor: '#e74c3c',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});