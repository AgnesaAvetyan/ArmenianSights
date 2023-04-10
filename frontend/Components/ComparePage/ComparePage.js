import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { comparePageStyles } from './comparePageStyle';
import { useRoute } from '@react-navigation/native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ComparePage = ({ navigation }) => {
  const route = useRoute();
  const { data } = route.params;
  return (
    <View style={comparePageStyles.container}>
      <Header />
      <Text style={comparePageStyles.contentText}></Text>
      <Footer navigation={navigation} data={data}/>
    </View>
  );
};

export default ComparePage;
