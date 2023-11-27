import React, { useContext } from 'react';
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
        handleReset
    } = useContext(AppContext);

    return (
        <>
            <SafeAreaView style={appStyles.container}>
                {
                    isMatchFinished && (
                        <Modal
                            animationType = "slide"
                            transparent={true}
                            visible={isMatchFinished}
                            onRequestClose={() => {
                                // Alert.alert('Modal has been closed.');
                                changeIsMatchFinished(!isMatchFinished);
                                handleReset();
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text
                                        style={styles.modalText}
                                    >
                                        Over is Finished, {currentTeam} scored {runs} runs
                                    </Text>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => {
                                            changeIsMatchFinished(!isMatchFinished);
                                            navigation.navigate('SummaryPage');
                                            handleReset();
                                        }}>
                                        <Text
                                            style={styles.textStyle}
                                        >
                                            Go To Match Summary
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
