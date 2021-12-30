import React from 'react';
import {View} from 'react-native';
import {FlightScreen} from '../components/MyFlights';

export const Flights = ({navigation}) => {
  return (
    <View>
      <FlightScreen navegacion={navigation} />
    </View>
  );
};
