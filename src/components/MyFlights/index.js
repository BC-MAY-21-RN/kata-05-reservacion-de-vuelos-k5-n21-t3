import React from 'react';
import {Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const FlightScreen = ({navegacion}) => {
  return (
    <View>
      <Text>Flights screen</Text>

      <Button onPress={() => navegacion.navigate('Origin')} title="+" />
      <Button onPress={() => navegacion.goBack()} title="Back" />
      <Icon name="plus-circle" size={40} color="#5c6ef8" />
    </View>
  );
};
