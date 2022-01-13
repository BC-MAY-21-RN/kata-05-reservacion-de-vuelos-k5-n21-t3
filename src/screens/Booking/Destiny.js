import React from 'react';
import {View} from 'react-native';
import {DestinyScreen} from '../../components/Booking/Destiny';

export const Destiny = ({route, navigation}) => {
  return (
    <View>
      <DestinyScreen navegacion={navigation} route={route} />
    </View>
  );
};
