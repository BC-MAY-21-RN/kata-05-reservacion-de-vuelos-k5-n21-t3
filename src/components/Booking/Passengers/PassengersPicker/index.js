import ScrollPicker from 'react-native-wheel-scrollview-picker';
import React from 'react';
import {View} from 'react-native';

export const PassengersPicker = () => {
  return (
    <View>
      <ScrollPicker
        dataSource={['1', '2', '3', '4', '5', '6']}
        selectedIndex={1}
        renderItem={(data, index) => {
          //
        }}
        onValueChange={(data, selectedIndex) => {
          //
        }}
        wrapperHeight={180}
        wrapperWidth={150}
        wrapperBackground="#FFFFFF"
        itemHeight={60}
        highlightColor="#d8d8d8"
        highlightBorderWidth={2}
      />
    </View>
  );
};
