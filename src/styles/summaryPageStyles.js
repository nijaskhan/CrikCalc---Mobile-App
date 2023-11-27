const { StyleSheet } = require("react-native");

export const summaryStyles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        justifyContent: 'space-between',
        margin: 16,
    },
    titleText: {
        fontSize: 32,
        color: '#ffffff',
        fontWeight: 'bold'
    },   
    textTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    teamSection: {
        // marginTop: 20,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    teamText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 28
    },
    scoreText:{
        marginLeft: 9,
        color: '#ffffff',
        fontWeight: '500',
        fontSize: 26
    },
    infoText: {
        color: '#ecf0f1',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1
    },
    infoTextContainer: {
        // flex: 1,
        alignItems: 'center',
        marginBottom: 4,
    }

}); 