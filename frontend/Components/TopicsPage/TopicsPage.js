import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { topicPageStyles } from './topicsPageStyle';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ovalStyles } from '../Images/ovalStyles';

const TopicsPage = ({ navigation }) => {
    const route = useRoute();
    const { data } = route.params;
    
    const ovalCount = 10; // Replace with the actual count of ovals
    const maxOvalsPerRow = 1;
    const rowCount = Math.ceil(ovalCount / maxOvalsPerRow);

    const ovalRows = [];
    let startIndex = 0;
    let name = "Churches";

    for (let i = 0; i < rowCount; i++) {
        const endIndex = Math.min(startIndex + maxOvalsPerRow, ovalCount);
        const ovalRow = [...Array(endIndex - startIndex)].map((_, index) => (
            <TouchableOpacity
                key={startIndex + index}
                style={ovalStyles.ovalButton}
                onPress={() => navigation.navigate('EachTopic', {name,data})}
            >
                <View key={startIndex + index} style={ovalStyles.ovalContainer}>
                    <View style={ovalStyles.oval} />
                    <Text style={ovalStyles.ovalText}>Button Text
                    </Text>
                </View>
            </TouchableOpacity>
        ));
        ovalRows.push(ovalRow);
        startIndex = endIndex;
    }
    return (
        <View style={topicPageStyles.topicContainer}>
            <Header />
            <ScrollView style={{ flex: 1 }}>
                <View style={ovalStyles.ovalContainer}>
                    {ovalRows.map((ovalRow, index) => (
                        <View key={index} style={ovalStyles.ovalRow}>
                            {ovalRow}
                        </View>
                    ))}
                </View>
            </ScrollView>

            <Footer navigation={navigation} data={data} />
        </View>
    );
};
export default TopicsPage;
