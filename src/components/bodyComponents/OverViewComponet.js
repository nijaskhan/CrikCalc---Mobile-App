import { View, Text } from 'react-native';
import React from 'react';
import { runBtnStyles } from '../../styles/bodyStyles';

const OverViewComponet = () => {
    const array = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <View style={runBtnStyles.overOuterContainer}>
                {
                    array && array.map((e) => (
                        <View key={e} style={runBtnStyles.overViewborder}>
                            <Text style={runBtnStyles.overViewText}>{e}</Text>
                        </View>
                    ))
                }
            </View>
        </>
    );
}

export default OverViewComponet;