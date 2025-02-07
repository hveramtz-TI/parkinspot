import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text style={styles.navItem}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.navItem}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f4511e',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
  navbar: {
    flexDirection: 'row',
    marginTop: 10,
  },
  navItem: {
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default Header;