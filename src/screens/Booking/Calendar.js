import React from 'react';
import {Text, View, Button} from 'react-native';

export const Calendar = ({navigation}) => {
  return (
    <View>
      <Text>Calendar Screen</Text>
      <Button
        onPress={() => navigation.navigate('Passenger')}
        title="To Passengers"
      />
      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
};
