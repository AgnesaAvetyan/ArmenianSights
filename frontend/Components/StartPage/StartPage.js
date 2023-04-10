import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { startPageStyles } from './startPageStyle'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const StartPage = ({ navigation }) => {
  const route = useRoute();
  const { data } = route.params;

  return (
    <View style={startPageStyles.container}>
      <Header />
      <View style={startPageStyles.content}>
        <Text style={startPageStyles.contentTitle}>Hiiii!</Text>
        <Text style={startPageStyles.contentText}>This is an Armenian application for sightseeing.
          You can choose the topic that interests you and
        </Text>
        <TouchableOpacity style={startPageStyles.button} onPress={() => navigation.navigate('Topics', {data})}>
          <Text style={startPageStyles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} data={data}/>
    </View>
  );
};

export default StartPage;
