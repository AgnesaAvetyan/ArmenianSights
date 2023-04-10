import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image } from 'react-native';
import { footerStyles } from './footerStyle';

const Footer = ({ navigation }) => {
    const route = useRoute();
    const { data } = route.params;
    return (
        <View style={footerStyles.footer}>
            <View style={footerStyles.iconContainer}>
                <TouchableOpacity style={footerStyles.iconButton} onPress={() => navigation.navigate('Account', { data })}>
                    <Image source={require("../../assets/icons/profile.png")} style={footerStyles.iconSize} />
                </TouchableOpacity>
                <TouchableOpacity style={footerStyles.iconButton} onPress={() => navigation.navigate('Search', { data })}>
                    <Image source={require("../../assets/icons/search.png")} style={footerStyles.iconSize} />
                </TouchableOpacity>
                <TouchableOpacity style={footerStyles.iconButton} onPress={() => navigation.navigate('Rating', { data })}>
                    <Image source={require("../../assets/icons/rating.png")} style={footerStyles.iconSize} />
                </TouchableOpacity>
                <TouchableOpacity style={footerStyles.iconButton} onPress={() => navigation.navigate('Topics', { data })}>
                    <Image source={require("../../assets/icons/camera.png")} style={footerStyles.iconSize} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Footer;
