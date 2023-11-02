import { Text, View } from 'react-native';
import React from 'react';
import { runBtnStyles } from '../../styles/bodyStyles';

export default function RunBtn(props) {
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
                    <View
                        key={btn.name}
                        style={getButtonStyle(btn)}
                    >
                        <Text
                            style={
                                btn.name === 'wide_ball'
                                    ? runBtnStyles.wideText
                                    : runBtnStyles.text
                            }
                        >{btn.visual}</Text>
                    </View>
                ))
            }
        </View>
    );
}