import React from 'react';
import {View} from 'react-native';
import {CalendarScreen} from '../../components/Booking/Calendar';

export const Calendar = ({navigation, route}) => {
  return (
    <View>
      <CalendarScreen navegacion={navigation} route={route} />
    </View>
  );
};
