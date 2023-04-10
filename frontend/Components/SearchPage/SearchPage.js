import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { searchPageStyles } from './searchPageStyle'
import { circleStyles } from '../Images/circleStyles';
import { useRoute } from '@react-navigation/native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const StartPage = ({ navigation }) => {
  const route = useRoute();
  const { data } = route.params;
  const maxCirclesPerRow = 3;
  const circleCount = 70;
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
    <View style={searchPageStyles.container}>
      <Header />
      <TextInput
        style={searchPageStyles.input}
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

export default StartPage;
