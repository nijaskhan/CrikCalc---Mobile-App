import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { headerStyles } from '../styles/headerStyles';

const Header = () => {
    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.innerContainer}>
                <View style={headerStyles.textTitleContainer}>
                    <Text style={headerStyles.textTitle}>Total runs</Text>
                    <Text style={headerStyles.textRuns}>0 - 0</Text>
                </View>
            </View>
        </View>
    );
}

export default Header;