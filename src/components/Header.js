import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.textTitleContainer}>
                    <Text style={styles.textTitle}>Total runs</Text>
                    <Text style={styles.textRuns}>0 - 0</Text>
                </View>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height: '30%',
        backgroundColor: '#591FFF',
    },
    innerContainer: {
        display: 'flex',
    },
    textTitleContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        color: '#D1D1D1',
        fontSize: 15,
        letterSpacing: 2
    },
    textRuns: {
        fontWeight: 'bold',
        fontSize: 60,
        color: '#ffffff',
    }
});