import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { changePasswordStyles } from './changePasswordStyle';
import { useRoute } from '@react-navigation/native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ChangePasswordPage = ({ navigation }) => {
    
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const route = useRoute();
    const { data } = route.params;
    const handleSave = async () => {
        if (currentPassword === data.password) {
            if (newPassword === confirmPassword) {
                
                try {
                    const response = await fetch('http://localhost:3000/update-password', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: data.id,
                            password: newPassword
                        })
                    });

                    const result = await response.json();
                    if (result.success) {
                        console.log('Password updated successfully!', result);
                        const updatedData = { ...data, password: newPassword };
                        navigation.navigate('Account', { data: updatedData });
                    }
                }
                catch (error){ console.error('Error while updating password:', error); }
            } else { console.log('New passwords do not match!'); }
        } else { console.log('Incorrect current password!'); }
    };
    return (
        <View style={changePasswordStyles.container}>
            <Header />

            <View style={changePasswordStyles.field}>
                <TextInput
                    style={changePasswordStyles.fieldInput}
                    placeholder="Current Password"
                    placeholderTextColor="#092C1A"
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                />
            </View>
            <View style={changePasswordStyles.field}>
                <TextInput
                    style={changePasswordStyles.fieldInput}
                    placeholder="New Password"
                    placeholderTextColor="#092C1A"
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
            </View>
            <View style={changePasswordStyles.field}>
                <TextInput
                    style={changePasswordStyles.fieldInput}
                    placeholder="Re-type new"
                    placeholderTextColor="#092C1A"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>
            <TouchableOpacity style={changePasswordStyles.button} onPress={handleSave}>
                <Text style={changePasswordStyles.buttonText}>Save</Text>
            </TouchableOpacity>
            <Footer navigation={navigation} data={data} />
        </View>
    );
};

export default ChangePasswordPage;
