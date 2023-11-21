import { StyleSheet } from "react-native";

export const bodyStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 5,
        marginTop: 30,
        alignItems: 'center',
    },
    textInputContainer: {
        // width: '80%', 
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8
        // justifyContent: 'space-between'
    },
    flexColoumn: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        height: 50,
        width: 70,
        margin: 0,
        padding: 10,
        borderWidth: 1,
        borderColor: '#591FFF',
        borderRadius: 9,
        fontSize: 19,
        fontWeight: 'bold'
    },
    overViewContainer: {
        marginTop: 30,
        marginHorizontal: 20,
        marginBottom: 10
    },
    bottomLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#95a5a6',
        borderStyle: 'solid',
        padding: 5
    },
    undoBtn: {
        borderWidth: .5,
        alignItems: 'center',
        marginLeft: 16,
        // backgroundColor: '#bdc3c7',
        borderRadius: 8
    },
    undoText: {
        fontWeight: "500",
        fontSize: 16,
        padding: 8,
        color: '#2c3e50',
    }
})

export const runBtnStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 25,
    },
    border: {
        height: 80,
        width: 80,
        backgroundColor: '#e74c3c',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    redBorder: {
        height: 80,
        width: 80,
        backgroundColor: '#FF0000',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    noBallBorder: {
        height: 80,
        width: 80,
        backgroundColor: '#95a5a6',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    greenBorder: {
        height: 80,
        width: 80,
        backgroundColor: '#27AE60',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    yellowBorder: {
        height: 80,
        width: 80,
        backgroundColor: '#e67e22',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    wideText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    sendBtn: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overViewborder: {
        height: 50,
        width: 50,
        backgroundColor: '#b2bec3',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 3,
        marginTop: 12
    },
    overViewText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        padding: 2
    },
    noBallViewText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2c3e50',
        padding: 2
    },
    overOuterContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'center',
    }
});