import React from 'react';
import {View} from 'react-native';
import {DestinyScreen} from '../../components/Booking/Destiny';

export const Destiny = ({navigation}) => {
  return (
    <View>
      <DestinyScreen navegacion={navigation} />
    </View>
  );
};
