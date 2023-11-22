import { Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { headerStyles } from '../styles/headerStyles';
import { AppContext } from '../store/AppContext';

const Header = () => {
    const {
        currentOver,
        currentBall,
        changeBall,
        changeOver,
        runs,
        changeRuns,
        changeWicket,
        wickets,
        changeCurrentOversView,
        changeCurrentOverRunsView,
        changeCurrentBowler
    } = useContext(AppContext);

    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.innerContainer}>
                <View style={headerStyles.textTitleContainer}>
                    <Text style={headerStyles.textTitle}>Total runs</Text>
                    <Text style={headerStyles.textRuns}>{runs} - {wickets}</Text>
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
                            changeBall(0);
                            changeOver(0);
                            changeRuns(0);
                            changeWicket(0);
                            changeCurrentOverRunsView([]);
                            changeCurrentOversView([]);
                            changeCurrentBowler('');
                        }}
                    >
                        <Text style={headerStyles.resetText} >
                            RESET
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Header;