import { StyleSheet, Modal, ActivityIndicator, View } from 'react-native';
import React from 'react';
// import Colors from '../../constants/Colors'

const Loader = ({ isLoading }) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={isLoading}
            onRequestClose={() => { }}
        >
            <View style={styles.modalBackground}>
                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        animating={isLoading}
                        color='#a29bfe'
                        size="large"
                    />
                </View>
            </View>
        </Modal>
    )
};

export default Loader;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicatorWrapper: {
        backgroundColor: '#b2bec3',
        borderRadius: 10,
        padding: 20,
    },
});