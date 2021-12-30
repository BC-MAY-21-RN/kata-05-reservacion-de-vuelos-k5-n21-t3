import React from 'react';
import {View} from 'react-native';
import {OriginScreen} from '../../components/Booking/Origin';

export const Origin = ({navigation}) => {
  return (
    <View>
      <OriginScreen navegacion={navigation} />
    </View>
  );
};
