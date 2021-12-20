import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export const Passenger = ({navigation}) => {
  return (
    <View>
      <Text>Passenger Screen</Text>
      <Button
        onPress={() => navigation.navigate('Confirmation')}
        title="To Confirmation"
      />
      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
};
