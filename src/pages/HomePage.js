import React, { useContext, useEffect } from 'react';
import { Modal, Pressable, SafeAreaView, Text, View } from 'react-native';
import { appStyles } from '../styles/appStyles';
import Body from '../components/Body';
import Header from '../components/Header';
import { homePageStyles as styles } from '../styles/bodyStyles';
import { AppContext } from '../store/AppContext';

const HomePage = ({ navigation }) => {
    const {
        isMatchFinished,
        changeIsMatchFinished,
        currentTeam,
        runs,
        secondmatchReset,
        teams,
        changeCurrentTeam,
        saveMatch,
        isSecondBatting,
        fullMatchFinished,
        wonTeam,
        firstMatchScore,
        runsDifference,
        setRunsDifference,
        setWonTeam,
        setFullMatchFinished,
        saveLastOver
    } = useContext(AppContext);

    const changeTeam = () => {
        //const activeTeam = teams.filter(team => team !== currentTeam);
        if (!isSecondBatting) {
            const activeTeam = teams.find(team => team !== currentTeam);
            changeIsMatchFinished(false);
            changeCurrentTeam(activeTeam);

            secondmatchReset();
        } else {
            // setExitSign(true);
            // changeIsMatchFinished(true);
            navigation.navigate('SummaryPage');
        }
    }

    useEffect(() => {
        if (isSecondBatting && isMatchFinished) {
            setFullMatchFinished(true);

            setRunsDifference(Math.abs(parseInt(firstMatchScore.totalRuns) - parseInt(runs)));

            if (firstMatchScore.totalRuns > runs) {
                setWonTeam(firstMatchScore.teamName);
            } else {
                setWonTeam(currentTeam);
            }
        }
    }, [isMatchFinished]);

    useEffect(() => {
        if (firstMatchScore.teamName && isSecondBatting) {
            // console.log('match is goin on...');
            if (firstMatchScore.totalRuns < runs) {
                // console.log('second team won !!!');
                saveLastOver();
                changeIsMatchFinished(true);
                setFullMatchFinished(true);
                setRunsDifference(Math.abs(parseInt(firstMatchScore.totalRuns) - parseInt(runs)));
                setWonTeam(currentTeam);
            }
        }
    }, [runs]);

    return (
        <>
            <SafeAreaView style={appStyles.container}>
                {
                    isMatchFinished && (
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={isMatchFinished}
                            onRequestClose={() => {
                                if (isSecondBatting) {
                                    changeTeam();
                                    saveMatch();
                                    // secondmatchReset();
                                } else {
                                    changeIsMatchFinished(!isMatchFinished);
                                }
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text
                                        style={styles.modalText}
                                    >
                                        {
                                            fullMatchFinished ? `${wonTeam} won match by ${runsDifference} runs`
                                                : `Over is Finished, ${currentTeam} scored ${runs} runs, Go to Summary Page for more info`
                                        }
                                    </Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => {
                                            saveMatch();
                                            // navigation.navigate('SummaryPage');
                                            // secondmatchReset();
                                            changeTeam();
                                        }}>
                                        <Text
                                            style={styles.textStyle}
                                        >
                                            {
                                                isSecondBatting ?
                                                    'Go to Summary' :
                                                    'Continue to Match'
                                            }
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    )
                }
                <Header navigation={navigation} />
                <Body />
            </SafeAreaView>
        </>
    )
}

export default HomePage;
