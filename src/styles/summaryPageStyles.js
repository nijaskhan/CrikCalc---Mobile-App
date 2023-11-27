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
    },
    DatatableContainer: {
        marginHorizontal: 16,
        marginTop: 14
    },
    tableTitle: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 18,
        margin: 4
    },
    tableFooterText: {
        fontWeight: '500',
        color: '#000000',
        fontSize: 14,
        margin: 4,
        marginTop: 10
    },
    tableFooterText2: {
        fontWeight: '500',
        color: '#000000',
        fontSize: 14,
        margin: 4,
        marginVertical: 10
    }
}); 