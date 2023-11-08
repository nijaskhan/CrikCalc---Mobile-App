import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { runBtnStyles } from '../../styles/bodyStyles';

const OverViewComponet = (props) => {
    return (
        <>
            <View style={runBtnStyles.overOuterContainer}>
                {
                    props.currentOverRunsView && props.currentOverRunsView.map((run, index) => (
                        <View
                            key={`${run.id}_${index}`}
                            style={runBtnStyles.overViewborder}
                        >
                            <Text
                                style={runBtnStyles.overViewText}
                            >{run.visual}</Text>
                        </View>
                    ))
                }
            </View>
        </>
    );
}

export default OverViewComponet;