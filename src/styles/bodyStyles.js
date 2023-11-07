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
        flex: 1,
        alignItems: 'center',
        marginTop: 20
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
        marginHorizontal: 5,
        marginTop: 12
    },
    overViewText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    overOuterContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
    }
});