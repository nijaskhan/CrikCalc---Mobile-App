import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function RunBtn(props) {
    const getButtonStyle = (btn) => {
        if (btn.name === 'wicket') {
            return styles.redBorder;
        } else if (btn.name === 'boundary_four' || btn.name === 'boundary_six') {
            return styles.greenBorder;
        } else if(btn.name==='wide_ball'){
            return styles.yellowBorder;
        } else {
            return styles.border;
        }
    };

    return (
        <View style={styles.container}>
            {
                props.runs && props.runs.map((btn) => (
                    <View
                        key={btn.name}
                        style={getButtonStyle(btn)}
                    >
                        <Text
                            style={
                                btn.name === 'wide_ball' ? styles.wideText : styles.text
                            }
                        >{btn.visual}</Text>
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
    redBorder: {
        height: 80,
        width: 80,
        backgroundColor: '#FF0000',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    greenBorder: {
        height: 80,
        width: 80,
        backgroundColor: '#27AE60',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    yellowBorder: {
        height: 80,
        width: 80,
        backgroundColor: '#e67e22',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    wideText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});