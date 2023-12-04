import { StyleSheet, View } from 'react-native';
import React from 'react';
import { headerStyles } from '../../styles/headerStyles';
import { Text } from 'react-native-paper';

export default function HeaderComponent({heading, subheading}) {
    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.drawerBtnContainer}>
                <View style={headerStyles.innerContainer}>
                    <View style={styles.textTitleContainer}>
                        <Text style={styles.title}>{heading}</Text>
                        <Text style={headerStyles.textTitle}>{subheading}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 38,
        color: '#ffffff',
    },
    textTitleContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7,
    }
});