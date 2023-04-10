import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { eachTopicStyles } from './eachTopicStyle';
import { circleStyles } from '../Images/circleStyles';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const EachTopicPage = ({ navigation }) => {
    const route = useRoute();
    const { name, data } = route.params;

    const circleCount = 70; // Replace with the actual count of circles
    const maxCirclesPerRow = 3;
    const rowCount = Math.ceil(circleCount / maxCirclesPerRow);

    const circleRows = [];
    let startIndex = 0;
    for (let i = 0; i < rowCount; i++) {
        const endIndex = Math.min(startIndex + maxCirclesPerRow, circleCount);
        const circleRow = [...Array(endIndex - startIndex)].map((_, index) => (
            <TouchableOpacity
                key={startIndex + index}
                style={circleStyles.circleButton}
                onPress={() => navigation.navigate('Compare', {data})}
            >
                <View key={startIndex + index} style={circleStyles.circleContainer}>
                    <View style={circleStyles.circle} />
                    <Text style={circleStyles.circleText}>Circle {startIndex + index + 1}</Text>
                </View>
            </TouchableOpacity>
        ));
        circleRows.push(circleRow);
        startIndex = endIndex;
    }
    return (
        <View style={eachTopicStyles.container}>
            <Header />
            <View style={eachTopicStyles.content} >
                <Text style={eachTopicStyles.text}>{name}</Text>
            </View>
            <TextInput
                style={eachTopicStyles.input}
                placeholder="Search"
                placeholderTextColor="#092C1A"
                size={20} />

            <ScrollView style={{ flex: 1 }}>
                <View style={circleStyles.circleContainer}>
                    {circleRows.map((circleRow, index) => (
                        <View key={index} style={circleStyles.circleRow}>
                            {circleRow}
                        </View>
                    ))}
                </View>
            </ScrollView>
            <Footer navigation={navigation} data={data} />

        </View>
    );
};

export default EachTopicPage;
