import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { welcomeStyles } from './welcomeStyles';

const WelcomePage = ({ navigation }) => {

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={welcomeStyles.container}>
      <Text style={welcomeStyles.title}>Welcome!</Text>
      <Text style={welcomeStyles.welcomeText}>This is an Armenian sightseeing app.</Text>
      <TouchableOpacity style={welcomeStyles.button} onPress={handleSignInPress}>
        <Text style={welcomeStyles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={welcomeStyles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={welcomeStyles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={welcomeStyles.flagsContainer}>
        <TouchableOpacity style={welcomeStyles.flagButton}>
          <Image source={require('../../assets/images/russia-flag.png')} style={welcomeStyles.flagImage} />
        </TouchableOpacity>
        <TouchableOpacity style={welcomeStyles.flagButton}>
          <Image source={require('../../assets/images/usa-flag.png')} style={welcomeStyles.flagImage} />
        </TouchableOpacity>
        <TouchableOpacity style={welcomeStyles.flagButton}>
          <Image source={require('../../assets/images/armenia-flag.png')} style={welcomeStyles.flagImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;