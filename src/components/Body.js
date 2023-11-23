import React, { useContext, useEffect, useState } from 'react';
import RunBtn from './bodyComponents/RunBtn';
import OverViewComponent from './bodyComponents/OverViewComponet';
import { firstRow, secondRow, thirdRow } from '../constants/scores';
import { bodyStyles, dropDownStyles, runBtnStyles } from '../styles/bodyStyles';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { AppContext } from '../store/AppContext';
import OverViewComponet from './bodyComponents/OverViewComponet';

export default function Body() {
    const {
        customScore,
        onChangeScore,
        oversView,
        currentOverRunsView,
        handleOver,
        handleUndoBtn,
        bowlers,
        currentBowler,
        changeCurrentBowler
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
                        placeholderTextColor={'#000000'}
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
                <View
                    style={{
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#591FFF',
                        padding: 3,
                        paddingVertical: 5,
                        marginBottom: 10,
                    }}
                >
                    <ModalDropdown
                        options={bowlers}
                        onSelect={(index, value) => {
                            changeCurrentBowler(value);
                        }}
                        defaultIndex={0}
                        
                        dropdownStyle={{
                            margin: 5,
                            color: '#000000',
                        }}
                        dropdownTextStyle={{
                            marginBottom: 0,
                            fontSize: 14,
                            color: '#000000',
                        }}
                        dropdownTextHighlightStyle={{
                            color: '#e74c3c'
                        }}
                        animated={true}
                        isFullWidth={true}
                    >
                        <View style={{
                            paddingLeft: 10
                        }}>
                            <Text 
                                style={dropDownStyles.optionsText}
                            >
                                {`${currentBowler}` || `Select Bowler`}
                            </Text>
                        </View>
                    </ModalDropdown>
                    <OverViewComponent currentOverRunsView={currentOverRunsView} />
                </View>
                {
                    oversView &&
                    oversView.slice().reverse().map((overObject, index) => (
                        <View
                            key={`${index}`}
                            style={{
                                borderRadius: 10,
                                borderWidth: 1,
                                borderColor: '#7f8c8d',
                                padding: 3,
                                paddingVertical: 5,
                                marginBottom: 10
                            }}
                        >
                                <View style={{
                                    paddingLeft: 10
                                }}>
                                    <Text style={dropDownStyles.optionsText} >
                                        {`${overObject.bowler}` || `Select Bowler`}
                                    </Text>
                                </View>
                            <OverViewComponet currentOverRunsView={overObject.over} />
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    );
}