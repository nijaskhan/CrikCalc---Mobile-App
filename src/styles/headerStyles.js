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
    drawerBtnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingTop: 5,
        paddingRight: 5
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
        color: '#ecf0f1',
        fontWeight: 'normal',
        fontSize: 16,
        letterSpacing: 1,
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
        color: '#ecf0f1',
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: 2,
        marginTop: 10
    },
    textRuns: {
        fontWeight: 'bold',
        fontSize: 60,
        color: '#ffffff',
    }
});