import React, { useContext } from 'react';
import RunBtn from './bodyComponents/RunBtn';
import OverViewComponent from './bodyComponents/OverViewComponet';
import { firstRow, secondRow, thirdRow } from '../constants/scores';
import { bodyStyles, runBtnStyles } from '../styles/bodyStyles';
import { Image, ScrollView, TextInput, View } from 'react-native';
import {AppContext} from '../store/AppContext';

export default function Body() {
    const {customScore, onChangeScore} = useContext(AppContext);

    return (
        <ScrollView>
            <View style={bodyStyles.container}>
                <RunBtn runs={firstRow} />
                <RunBtn runs={secondRow} />
                <RunBtn runs={thirdRow} />
            </View>
            <View style={bodyStyles.textInputContainer}>
                <View style={bodyStyles.flexColoumn}>
                    <TextInput
                        style={bodyStyles.textInput}
                        keyboardType='numeric'
                        placeholder='score'
                        onChangeText={onChangeScore}
                        value={customScore}
                    />
                    <View style={runBtnStyles.sendBtn} >
                        <Image
                            source={require('../images/send-message.png')}
                            style={{width: 20, height: 20}}
                        />
                    </View>
                </View>
            </View>
            <View style={bodyStyles.overViewContainer}>
                <OverViewComponent />
            </View>
        </ScrollView>
    );
}