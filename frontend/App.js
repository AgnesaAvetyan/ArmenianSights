import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import WelcomePage from './Components/WelcomePage/WelcomePage'
import SignIn from './Components/Sign/SignIn'
import SignUp from './Components/Sign/SignUp'
import StartPage from './Components/StartPage/StartPage';
import AccountPage from './Components/AccountPage/AccountPage';
import SearchPage from './Components/SearchPage/SearchPage';
import ComparePage from './Components/ComparePage/ComparePage';
import TopicsPage from './Components/TopicsPage/TopicsPage';
import EachTopicPage from './Components/EachTopic/EachTopic';
import RatingPage from './Components/RatingPages/RatingPage';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Account" component={AccountPage} />
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="Compare" component={ComparePage} />
        <Stack.Screen name="Topics" component={TopicsPage} />
        <Stack.Screen name="EachTopic" component={EachTopicPage} />
        <Stack.Screen name="Rating" component={RatingPage} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
