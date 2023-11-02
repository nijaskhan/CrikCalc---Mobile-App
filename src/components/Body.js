import { StyleSheet, View } from 'react-native';
import React from 'react';
import RunBtn from './bodyComponents/RunBtn';
import { firstRow, secondRow, thirdRow } from '../constants/scores';

{/* 
    firstRow: [0,1,2]
    secondRow: [4,'W',6]
*/}

export default function Body() {
    return (
        <View style={styles.container}>
            <RunBtn runs={firstRow} />
            <RunBtn runs={secondRow} />
            <RunBtn runs={thirdRow} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 5,
        marginTop: 30,
        alignItems: 'center',
    },
});