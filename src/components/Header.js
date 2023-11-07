import { Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { headerStyles } from '../styles/headerStyles';
import {AppContext} from '../store/AppContext';

const Header = () => {
    const {
        currentOver,
        changeOver,
        currentBall,
        changeBall
    } = useContext(AppContext);

    const handleOver = () => {
        if (currentBall < 6) {
            changeBall(currentBall + 1);
        } else {
            changeOver(currentOver + 1);
        }
    }

    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.innerContainer}>
                <View style={headerStyles.textTitleContainer}>
                    <Text style={headerStyles.textTitle}>Total runs</Text>
                    <Text style={headerStyles.textRuns}>0 - 0</Text>
                </View>
                <View style={headerStyles.overTextContainer}>
                    <Text
                        style={headerStyles.overTextTitle}
                    >
                        overs: <Text style={headerStyles.overText}>
                            {currentOver}.{currentBall}
                        </Text>
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('triggered reset');
                        }}
                    >
                        <Text style={headerStyles.resetText}>
                            RESET
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Header;