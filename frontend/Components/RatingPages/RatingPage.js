import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ratingPageStyles } from './ratingPageStyle';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const RatingPage = ({ navigation }) => {
    const route = useRoute();
    const { data } = route.params;
    return (
        <View style={ratingPageStyles.container}>
            <Header />
            <Text style={ratingPageStyles.contentText}>
                Churches: {'\n'}
                Bridges: {'\n'}
                Universities: {'\n'}
                Republic Square: {'\n'}
                Museums:
            </Text>
            <Footer navigation={navigation} data={data} />
        </View>
    );
};

export default RatingPage;
