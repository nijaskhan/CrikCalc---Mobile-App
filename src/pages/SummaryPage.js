import { Alert, ScrollView, Text, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { headerStyles } from '../styles/headerStyles';
import { appStyles } from '../styles/appStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { bodyStyles } from '../styles/bodyStyles';
import { summaryStyles } from '../styles/summaryPageStyles';
import { DataTable } from 'react-native-paper';
import { retrieveData } from '../asyncStorage/apiCalls';
import { AppContext } from '../store/AppContext';

export default function SummaryPage({ navigation }) {
    const {
        matchId,
        matchData,
        setMatchData,
        getbowlerStatistics,
        setTeam1BowlerStats,
        team1BowlerStats,
        setTeam2BowlerStats,
        team2BowlerStats,
        wonTeam,
        runsDifference,
    } = useContext(AppContext);

    async function getData(matchId) {
        const data = await retrieveData(matchId);
        // console.log(data, 'rawDta');

        if (data) {
            setMatchData(data);

            const stats = getbowlerStatistics(data.team1.totalOverView);
            setTeam1BowlerStats(stats);

            if (data?.team2) {
                const stats2 = getbowlerStatistics(data.team2?.totalOverView);
                setTeam2BowlerStats(stats2);
            }

        } else {
            Alert.alert(
                'what are you looking ?...Nothing to see here',
                'you have to finish atleast one match to see the Match Summary !!'
            );
            navigation.navigate('HomePage');
        }
    }

    useEffect(() => {
        getData(matchId);
    }, []);

    return (
        <SafeAreaView style={appStyles.container}>
            {/* header_Section */}
            <View style={headerStyles.container}>
                <View style={summaryStyles.innerContainer}>
                    <View style={summaryStyles.textTitleContainer}>
                        <Text style={summaryStyles.titleText}>Match Summary</Text>
                    </View>
                    <View style={summaryStyles.teamSection}>
                        <View>
                            <Text
                                style={summaryStyles.teamText}
                            >{
                                matchData?.team1?.teamName?.length > 9 
                                ? matchData?.team1?.teamName?.substring(0, 10) + '...' || 'not played'
                                : matchData?.team1?.teamName || 'not played'
                            }</Text>
                            <Text
                                style={summaryStyles.scoreText}
                            >{matchData?.team1?.totalRuns || 0} - {matchData?.team1?.wickets || 0}
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={summaryStyles.teamText}
                            >
                            {
                                matchData?.team2?.teamName?.length > 9 
                                ? matchData?.team2?.teamName?.substring(0, 10) + '...' || 'not played'
                                : matchData?.team2?.teamName || 'not played'
                            }</Text>
                            <Text
                                style={summaryStyles.scoreText}
                            >
                                {matchData?.team2?.totalRuns || 0} - {matchData?.team2?.wickets || 0}
                            </Text>
                        </View>
                    </View>
                    <View style={summaryStyles.infoTextContainer}>
                        {
                            wonTeam && <Text style={summaryStyles.infoText}>{wonTeam} won match by {runsDifference} runs</Text>
                        }
                    </View>

                </View>
            </View>

            {/* Body_Section */}

            <ScrollView style={bodyStyles.mainContainer}>
                <View style={summaryStyles.DatatableContainer}>
                    <Text style={summaryStyles.tableTitle}>Team 1 bowling stats</Text>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Bowler</DataTable.Title>
                            <DataTable.Title numeric>O</DataTable.Title>
                            {/*<DataTable.Title numeric>M</DataTable.Title> */}
                            <DataTable.Title numeric>R</DataTable.Title>
                            <DataTable.Title numeric>W</DataTable.Title>
                            <DataTable.Title numeric>Econ</DataTable.Title>
                        </DataTable.Header>

                        {
                            team1BowlerStats && team1BowlerStats.map((bowler) => (
                                <DataTable.Row key={bowler.bowlerName}>
                                    <DataTable.Cell>{bowler.bowlerName}</DataTable.Cell>
                                    <DataTable.Cell numeric>{bowler.oversCount}</DataTable.Cell>
                                    <DataTable.Cell numeric>{bowler.totalScore}</DataTable.Cell>
                                    <DataTable.Cell numeric>{bowler.wickets}</DataTable.Cell>
                                    <DataTable.Cell numeric>2.05</DataTable.Cell>
                                </DataTable.Row>
                            ))
                        }

                        <Text
                            style={summaryStyles.tableFooterText}
                        >
                            {
                                matchData?.team1?.teamName} Total Runs: {matchData?.team1?.totalRuns || 0}  ( {matchData?.team1?.wickets || 0} wkts, {matchData?.team1?.overs || 0} overs )
                        </Text>

                    </DataTable>
                </View>

                <View style={summaryStyles.DatatableContainer}>
                    <Text
                        style={summaryStyles.tableTitle}
                    >
                        {team2BowlerStats.length != 0 ? `Team 2 bowling stats` : `Team 2 STILL PLAYING`}
                    </Text>
                    {
                        team2BowlerStats.length != 0 ?
                            (<DataTable>
                                <DataTable.Header>
                                    <DataTable.Title>Bowler</DataTable.Title>
                                    <DataTable.Title numeric>O</DataTable.Title>
                                    <DataTable.Title numeric>R</DataTable.Title>
                                    <DataTable.Title numeric>W</DataTable.Title>
                                    <DataTable.Title numeric>Econ</DataTable.Title>
                                </DataTable.Header>

                                {
                                    team2BowlerStats.map((bowler) => (
                                        <DataTable.Row key={bowler.bowlerName}>
                                            <DataTable.Cell>{bowler.bowlerName}</DataTable.Cell>
                                            <DataTable.Cell numeric>{bowler.oversCount}</DataTable.Cell>
                                            <DataTable.Cell numeric>{bowler.totalScore}</DataTable.Cell>
                                            <DataTable.Cell numeric>{bowler.wickets}</DataTable.Cell>
                                            <DataTable.Cell numeric>2.05</DataTable.Cell>
                                        </DataTable.Row>
                                    ))
                                }

                                <Text
                                    style={summaryStyles.tableFooterText2}
                                >
                                    {matchData?.team2?.teamName} Total Runs: {matchData?.team2?.totalRuns || 0}  ( {matchData?.team2?.wickets || 0} wkts, {matchData?.team2?.overs || 0} overs )
                                </Text>

                            </DataTable>) : (
                                <></>
                            )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}