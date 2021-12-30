import React from 'react';
import {View} from 'react-native';
import {PassengersScreen} from '../../components/Booking/Passengers';

export const Passengers = ({navigation}) => {
  return (
    <View>
      <PassengersScreen navegacion={navigation} />
    </View>
  );
};
