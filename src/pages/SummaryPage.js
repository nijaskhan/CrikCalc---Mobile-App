import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { headerStyles } from '../styles/headerStyles';
import { appStyles } from '../styles/appStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { bodyStyles } from '../styles/bodyStyles';
import { summaryStyles } from '../styles/summaryPageStyles';

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

            </ScrollView>
        </SafeAreaView>
    )
}