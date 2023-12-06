import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GridView({matchId, team1, team2, wonTeam, runsDifference}) {
    return (
        <View style={styles.GridView}>
            <View style={{
                margin: 10,
                height: 120,
                borderRadius: 20,
                padding: 15,
                backgroundColor: '#bdc3c7',
                color: '#2c3e50'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginVertical: 3,
                    color: '#2c3e50'
                }} >
                    Match Id : {matchId || 'No Match Id'}
                </Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginVertical: 3,
                    color: '#000000'
                }} >
                    { `${team1} vs ${team2}`  ||'No Team Found'}
                </Text>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginVertical: 3,
                    color: '#000000'
                }} >
                    Iron Man won by 8 runs
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    GridView: {
        flex: 1,
        marginTop: 5
    }
})