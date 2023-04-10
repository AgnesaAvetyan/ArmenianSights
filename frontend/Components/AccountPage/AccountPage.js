import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { accountPageStyles } from './accountPageStyle';
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const AccountPage = ({ navigation }) => {
    const route = useRoute();
    const { data } = route.params;

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { setShowPassword(!showPassword); }
    return (
        <View style={accountPageStyles.container}>
            <Header />
            <View style={accountPageStyles.content}>
                <View style={accountPageStyles.userSection}>
                    <View style={accountPageStyles.userImageContainer}>
                        <Image
                            source={require('../../assets/images/account_image.png')}
                            style={accountPageStyles.userImage}
                        />
                        <TouchableOpacity style={accountPageStyles.editButton}>
                            <MaterialIcons name="edit" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                    <View style={accountPageStyles.userInfoCuontainer}>
                        <Text style={accountPageStyles.userName}>
                            {data.name} {data.surname}
                        </Text>
                    </View>
                    <TouchableOpacity style={accountPageStyles.editButton}>
                        <MaterialIcons name="edit" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
                <View style={accountPageStyles.userRating}>
                    <Text style={accountPageStyles.ratingText}>Ratings:</Text>
                    <Image source={require("../../assets/images/stars.png")} style={accountPageStyles.ratingImage} />
                </View>
            </View>
            <View style={{ height: 250 }}>
                <View style={accountPageStyles.settingsSection}>
                    <Text style={accountPageStyles.settingsTitle}>Settings</Text>
                    <View style={accountPageStyles.settingsFields}>
                        <View style={accountPageStyles.field}>
                            <Text style={accountPageStyles.fieldLabel}>Email:</Text>
                            <TextInput
                                style={accountPageStyles.fieldInput}
                                value={data.email}
                            />
                        </View>
                        <View style={accountPageStyles.field}>
                            <Text style={accountPageStyles.fieldLabel}>Password:</Text>
                            <View style={accountPageStyles.fieldInput}>
                                <TextInput style={accountPageStyles.textinput}
                                    value={showPassword ? data.password : data.password.replace(/./g, '*')}
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity onPress={toggleShowPassword} style={accountPageStyles.showPasswordButton}>
                                    <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="#000" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={accountPageStyles.buttonContainer}>
                        <TouchableOpacity onPress={() =>{
                             navigation.navigate('ChangePassword', {data})}} style={accountPageStyles.button}>
                            <Text style={accountPageStyles.buttonText}>Change Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Footer navigation={navigation} data={data} />
        </View >
    );
};

export default AccountPage;
