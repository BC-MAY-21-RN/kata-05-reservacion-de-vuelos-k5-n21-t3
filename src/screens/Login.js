import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Link} from '@react-navigation/native';

export const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login screen</Text>
      <Button onPress={() => navigation.navigate('Flights')} title="Flights" />
      <Button onPress={() => navigation.navigate('Home')} title="HOME" />
      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
};
