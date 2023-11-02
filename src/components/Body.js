import { StyleSheet, View } from 'react-native';
import React from 'react';
import RunBtn from './bodyComponents/RunBtn';
import { firstRow, secondRow, thirdRow } from '../constants/scores';
import { bodyStyles } from '../styles/bodyStyles';

export default function Body() {
    return (
        <View style={bodyStyles.container}>
            <RunBtn runs={firstRow} />
            <RunBtn runs={secondRow} />
            <RunBtn runs={thirdRow} />
        </View>
    );
}