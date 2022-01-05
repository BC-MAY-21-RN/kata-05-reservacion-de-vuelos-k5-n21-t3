import React from 'react';
import {View} from 'react-native';
import {ConfirmationScreen} from '../../components/Booking/Confirmation';

export const Confirmation = ({navigation}) => {
  return (
    <View>
      <ConfirmationScreen navegacion={navigation} />
    </View>
  );
};
