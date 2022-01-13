import React from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export const PickerData = ({selectedCountry, setSelectedCountry}) => {
  return (
    <View>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue, itemIndex) => setSelectedCountry(itemValue)}>
        <Picker.Item label="MEX" value="MEX" />
        <Picker.Item label="ARG" value="ARG" />
        <Picker.Item label="EUA" value="EUA" />
        <Picker.Item label="CAN" value="CAN" />
        <Picker.Item label="ALA" value="ALA" />
        <Picker.Item label="CHIL" value="CHIL" />
        <Picker.Item label="BR" value="BR" />
        <Picker.Item label="GUA" value="GUA" />
        <Picker.Item label="COL" value="COL" />
        <Picker.Item label="VZL" value="VZL" />
      </Picker>
    </View>
  );
};
