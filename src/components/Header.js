import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { headerStyles } from '../styles/headerStyles';
import { AppContext } from '../store/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ navigation }) => {
    const {
        currentOver,
        currentBall,
        totalOvers,
        runs,
        wickets,
        handleReset,
        currentTeam,
        isSecondBatting,
        firstMatchScore,
        wonTeam,
        runsDifference
    } = useContext(AppContext);

    const showAlert = () => {
        Alert.alert(
            'Do you want to end the game ?',
            'If you end the game the match will be saved to match history!',
            [
                {
                    text: 'Cancel',
                    onPress: undefined,
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => {
                        handleReset();
                        navigation.navigate('landingPage');
                    },
                },
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={headerStyles.container}>
            <View style={headerStyles.drawerBtnContainer}>
                <Icon.Button
                    name="bars"
                    backgroundColor="#591FFF"
                    onPress={() => navigation.navigate('SummaryPage')}
                    size={25}
                    iconStyle={{
                        marginRight: 0,
                        padding: 2,
                    }}
                >
                </Icon.Button>
            </View>
            <View style={headerStyles.innerContainer}>
                <View style={headerStyles.textTitleContainer}>
                    <Text style={headerStyles.textTitle}>Total runs ({currentTeam})</Text>
                    <Text style={headerStyles.textRuns}>{runs} - {wickets}</Text>
                    {
                        isSecondBatting && <Text style={{
                            color: '#ffffff',
                            paddingTop: 8,
                            fontSize: 14,
                            fontWeight: 500,
                            paddingBottom: 15,
                            letterSpacing: 0.5
                        }}>{!wonTeam && !runsDifference
                            ? `${currentTeam} needs ${(firstMatchScore?.totalRuns + 1) - runs} runs to win in ${(totalOvers * 6) - ((currentOver * 6) + currentBall)} balls`
                            : `${wonTeam} won match by ${runsDifference} runs`}</Text>
                    }
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
                        onPress={showAlert}
                    >
                        <Text style={headerStyles.resetText} >
                            END MATCH
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Header;