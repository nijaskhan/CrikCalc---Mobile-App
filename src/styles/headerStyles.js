const { StyleSheet } = require("react-native");

export const headerStyles = StyleSheet.create({
    container: {
        height: '30%',
        backgroundColor: '#591FFF',
    },
    innerContainer: {
        display: 'flex',
    },
    textTitleContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        color: '#D1D1D1',
        fontSize: 15,
        letterSpacing: 2
    },
    textRuns: {
        fontWeight: 'bold',
        fontSize: 60,
        color: '#ffffff',
    }
});