import { Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { runBtnStyles } from '../../styles/bodyStyles';
import { AppContext } from '../../store/AppContext';

export default function RunBtn(props) {
    const { handleOver, noBallStatus } = useContext(AppContext);

    const getButtonStyle = (btn) => {
        if (btn.name === 'wicket') {
            return runBtnStyles.redBorder;
        } else if (btn.name === 'boundary_four' || btn.name === 'boundary_six') {
            return runBtnStyles.greenBorder;
        } else if (btn.name === 'wide_ball') {
            return runBtnStyles.yellowBorder;
        } else {
            return runBtnStyles.border;
        }
    };

    return (
        <View style={runBtnStyles.container}>
            {
                props.runs && props.runs.map((btn) => (
                    <TouchableOpacity
                        key={btn.name}
                        onPress={() => handleOver(btn)}
                    >
                        <View style={
                            noBallStatus === true && btn.name==='noBall'
                                ? runBtnStyles.noBallBorder 
                                : getButtonStyle(btn)
                            
                        } >
                            <Text
                                style={
                                    btn.name === 'wide_ball' || btn.name === 'noBall'
                                        ? runBtnStyles.wideText
                                        : runBtnStyles.text
                                }
                            >{btn.visual}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    );
}