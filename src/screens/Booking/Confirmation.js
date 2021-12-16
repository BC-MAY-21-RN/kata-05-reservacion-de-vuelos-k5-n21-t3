import React from 'react';
import {Text, View, Button} from 'react-native';

export const Confirmation = ({navigation}) => {
  return (
    <View>
      <Text>Confirmation Screen</Text>

      <Button onPress={() => navigation.navigate('Flights')} title="Flights" />
      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
};
