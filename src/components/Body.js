import React, { useContext } from 'react';
import RunBtn from './bodyComponents/RunBtn';
import OverViewComponent from './bodyComponents/OverViewComponet';
import { firstRow, secondRow, thirdRow } from '../constants/scores';
import { bodyStyles, runBtnStyles } from '../styles/bodyStyles';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../store/AppContext';

export default function Body() {
    const {
        customScore,
        onChangeScore,
        oversView,
        currentOverRunsView,
        handleOver,
        handleUndoBtn,
    } = useContext(AppContext);

    const handleCustomRunBTn = () => {
        const runObj = {
            name: 'customRun',
            visual: customScore,
            score: parseInt(customScore)
        }
        handleOver(runObj);
        onChangeScore('');
    }

    return (
        <ScrollView>
            <View style={bodyStyles.container}>
                <RunBtn runs={firstRow} />
                <RunBtn runs={secondRow} />
                <RunBtn runs={thirdRow} />
            </View>
            {/* custome score UI */}
            <View style={bodyStyles.textInputContainer}>
                <View style={bodyStyles.flexColoumn}>
                    <TextInput
                        style={bodyStyles.textInput}
                        keyboardType='numeric'
                        placeholder='score'
                        onChangeText={onChangeScore}
                        value={customScore}
                    />
                    <TouchableOpacity onPress={handleCustomRunBTn}>
                        <View style={runBtnStyles.sendBtn} >
                            <Image
                                source={require('../images/send-message.png')}
                                style={{ width: 20, height: 20 }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={bodyStyles.undoBtn}
                    onPress={handleUndoBtn}
                >
                    <Text style={bodyStyles.undoText} >
                        UNDO
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={bodyStyles.overViewContainer}>
                <OverViewComponent currentOverRunsView={currentOverRunsView} />
                {
                    oversView && oversView.slice().reverse().map((e, index) => (
                        <View
                            style={bodyStyles.bottomLine}
                            key={`${e.id}_${index}`}
                        >
                            <OverViewComponent currentOverRunsView={e} />
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    );
}