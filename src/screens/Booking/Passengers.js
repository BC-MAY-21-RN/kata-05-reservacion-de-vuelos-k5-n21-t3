import React from 'react';
import {View} from 'react-native';
import {PassengersScreen} from '../../components/Booking/Passengers';

export const Passengers = ({route, navigation}) => {
  return (
    <View>
      <PassengersScreen navegacion={navigation} route={route} />
    </View>
  );
};
