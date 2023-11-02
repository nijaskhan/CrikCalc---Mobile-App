const { StyleSheet } = require("react-native");

export const headerStyles = StyleSheet.create({
    container: {
        height: '30%',
        backgroundColor: '#591FFF',
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitleContainer: {
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overTextContainer: {
        width: '80%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    overTextTitle: {
        color: '#D1D1D1',
        fontWeight: 'normal',
        fontSize: 16,
        letterSpacing: 1,
        // justifyContent: 'flex-start'
    },
    resetText: {
        fontWeight: '500',
        color: '#ffffff',
        fontSize: 15,
        letterSpacing: 1
    },
    overText: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 15
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