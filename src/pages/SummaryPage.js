import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { headerStyles } from '../styles/headerStyles';
import { appStyles } from '../styles/appStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { bodyStyles } from '../styles/bodyStyles';
import { summaryStyles } from '../styles/summaryPageStyles';
import { DataTable } from 'react-native-paper';

export default function SummaryPage() {
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
                            <Text style={summaryStyles.teamText}>Team 1</Text>
                            <Text style={summaryStyles.scoreText}>127-7</Text>
                        </View>
                        <View>
                            <Text style={summaryStyles.teamText}>Team 2</Text>
                            <Text style={summaryStyles.scoreText}>135-3</Text>
                        </View>
                    </View>
                    <View style={summaryStyles.infoTextContainer}>
                        <Text style={summaryStyles.infoText}>Team 2 won by 8 runs</Text>
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
                            <DataTable.Title numeric>M</DataTable.Title>
                            <DataTable.Title numeric>R</DataTable.Title>
                            <DataTable.Title numeric>W</DataTable.Title>
                            <DataTable.Title numeric>Econ</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>Arshad</DataTable.Cell>
                            <DataTable.Cell numeric>3</DataTable.Cell>
                            <DataTable.Cell numeric>0</DataTable.Cell>
                            <DataTable.Cell numeric>32</DataTable.Cell>
                            <DataTable.Cell numeric>2</DataTable.Cell>
                            <DataTable.Cell numeric>2.05</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Rahul</DataTable.Cell>
                            <DataTable.Cell numeric>2</DataTable.Cell>
                            <DataTable.Cell numeric>1</DataTable.Cell>
                            <DataTable.Cell numeric>23</DataTable.Cell>
                            <DataTable.Cell numeric>3</DataTable.Cell>
                            <DataTable.Cell numeric>1.70</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Nijas</DataTable.Cell>
                            <DataTable.Cell numeric>2</DataTable.Cell>
                            <DataTable.Cell numeric>0</DataTable.Cell>
                            <DataTable.Cell numeric>22</DataTable.Cell>
                            <DataTable.Cell numeric>1</DataTable.Cell>
                            <DataTable.Cell numeric>2.22</DataTable.Cell>
                        </DataTable.Row>

                        <Text
                            style={summaryStyles.tableFooterText}
                        >
                            Team 1 Total Runs: 127  ( 7 wkts, 20 overs )
                        </Text>

                    </DataTable>
                </View>

                <View style={summaryStyles.DatatableContainer}>
                    <Text style={summaryStyles.tableTitle}>Team 2 bowling stats</Text>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Bowler</DataTable.Title>
                            <DataTable.Title numeric>O</DataTable.Title>
                            <DataTable.Title numeric>M</DataTable.Title>
                            <DataTable.Title numeric>R</DataTable.Title>
                            <DataTable.Title numeric>W</DataTable.Title>
                            <DataTable.Title numeric>Econ</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>Arshad</DataTable.Cell>
                            <DataTable.Cell numeric>3</DataTable.Cell>
                            <DataTable.Cell numeric>0</DataTable.Cell>
                            <DataTable.Cell numeric>32</DataTable.Cell>
                            <DataTable.Cell numeric>2</DataTable.Cell>
                            <DataTable.Cell numeric>2.05</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Rahul</DataTable.Cell>
                            <DataTable.Cell numeric>2</DataTable.Cell>
                            <DataTable.Cell numeric>1</DataTable.Cell>
                            <DataTable.Cell numeric>23</DataTable.Cell>
                            <DataTable.Cell numeric>3</DataTable.Cell>
                            <DataTable.Cell numeric>1.70</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>Nijas</DataTable.Cell>
                            <DataTable.Cell numeric>2</DataTable.Cell>
                            <DataTable.Cell numeric>0</DataTable.Cell>
                            <DataTable.Cell numeric>22</DataTable.Cell>
                            <DataTable.Cell numeric>1</DataTable.Cell>
                            <DataTable.Cell numeric>2.22</DataTable.Cell>
                        </DataTable.Row>
                        <Text
                            style={summaryStyles.tableFooterText2}
                        >
                            Team 2 Total Runs: 135  ( 3 wkts, 20 overs )
                        </Text>

                    </DataTable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}