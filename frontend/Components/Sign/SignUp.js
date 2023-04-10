import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { signInStyles } from './signInStyles'

export default function SignIn({ navigation }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/save-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          password: password
        })
      });
      const data = await response.json();
      if (data.success) {
        navigation.navigate('Start', {data});
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={signInStyles.container}>
      <Text style={signInStyles.title}>Sign Up</Text>
      <TextInput
        style={signInStyles.input}
        placeholder="Name"
        placeholderTextColor="#CAE9CC"
        value={name}
        onChangeText= {(text) => setName(text)}
      />
      <TextInput
        style={signInStyles.input}
        placeholder="Surname"
        placeholderTextColor="#CAE9CC"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={signInStyles.input}
        placeholder="Email address"
        placeholderTextColor="#CAE9CC"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={signInStyles.input}
        placeholder="Password"
        placeholderTextColor="#CAE9CC"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={signInStyles.button}
        onPress={handleRegister}
      >
        <Text style={signInStyles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
