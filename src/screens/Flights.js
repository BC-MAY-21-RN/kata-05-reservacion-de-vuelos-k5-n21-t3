import React from 'react';
import {Text, View, Button} from 'react-native';

export const Flights = ({navigation}) => {
  return (
    <View>
      <Text>Flights screen</Text>
      <Button onPress={() => navigation.navigate('Origin')} title="To Origin" />
      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
};
