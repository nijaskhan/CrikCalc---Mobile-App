import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { runBtnStyles } from '../../styles/bodyStyles';

const OverViewComponet = (props) => {
    return (
        <>
            <View style={runBtnStyles.overOuterContainer}>
                {
                    props.currentOverRunsView && props?.currentOverRunsView.map((run, index) => (
                        <View
                            key={`${run.id}_${index}`}
                            style={runBtnStyles.overViewborder}
                        >
                            {
                                run.isNoBallExtras ? (
                                    <View>
                                        <Text style={runBtnStyles.noBallViewText}>
                                            NB`{run.visual}
                                        </Text>
                                    </View>
                                ) : (
                                    <Text
                                        style={runBtnStyles.overViewText}
                                    >{run.visual}</Text>
                                )
                            }
                        </View>
                    ))
                }
            </View>
        </>
    );
}

export default OverViewComponet;