import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export const SignUp = ({navigation}) => {
  return (
    <View>
      <Text>SignUp screen</Text>
      <Button
        onPress={() => navigation.navigate('Flights')}
        title="To Flights"
      />
      <Button onPress={() => navigation.navigate('Home')} title="HOME" />
    </View>
  );
};
