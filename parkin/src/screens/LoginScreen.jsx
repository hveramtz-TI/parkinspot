import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Platform, Alert, Animated } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    if (username === 'admin' && password === 'password') {
      if (Platform.OS === 'web') {
        alert('Login Successful: Welcome back!');
      } else {
        Alert.alert('Login Successful', 'Welcome back!');
      }
      navigation.navigate('Home');
    } else {
      if (Platform.OS === 'web') {
        alert('Login Failed: Invalid username or password');
      } else {
        Alert.alert('Login Failed', 'Invalid username or password');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.animatedContainer, opacity: fadeAnim }}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  animatedContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
});