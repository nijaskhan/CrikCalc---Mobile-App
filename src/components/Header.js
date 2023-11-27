import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { headerStyles } from '../styles/headerStyles';
import { AppContext } from '../store/AppContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ navigation }) => {
    const {
        currentOver,
        currentBall,
        runs,
        wickets,
        handleReset
    } = useContext(AppContext);

    const showAlert = () => {
        Alert.alert(
            'Do you want to reset the game ?',
            'If you reset the game the saved match history will lost',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('cancel pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: handleReset,
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
                    // onPress={handleReset}
                    onPress={showAlert}
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