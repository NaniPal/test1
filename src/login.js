import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

    function handleLoginPress() {
    // Add authentication code here
    navigation.navigate('Home');
  }

  function handleRegisterPress() {
    navigation.navigate('Register');
  }

  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Icon name="user-circle-o" type="font-awesome" size={80} color="#4F8EF7" />
          <Text style={styles.logoText}>My Login Screen</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
       <TouchableOpacity style={styles.buttonContainer} onPress={handleLoginPress}>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer} onPress={handleRegisterPress}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#4F8EF7',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 20,
    width: '80%',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    height: 50,
    color: '#333',
  },
  buttonContainer: {
    backgroundColor: '#4F8EF7',
    padding: 10,
    borderRadius: 20,
    width: '80%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
