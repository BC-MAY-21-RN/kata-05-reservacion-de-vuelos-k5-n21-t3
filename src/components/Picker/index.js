import React from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export const PickerData = ({
  selectedCountry,
  setSelectedCountry,
  setSelectedState,
}) => {
  return (
    <View>
      <Picker
        selectedValue={selectedCountry}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedState(itemValue.substring(4)),
            setSelectedCountry(itemValue.substring(0, 3));
        }}>
        <Picker.Item label="-SELECT AIRPORT-" />
        <Picker.Item label="MEX-Colima" value="MEX-Colima" />
        <Picker.Item label="ARG-Buenos Aires" value="ARG-Buenos Aires" />
        <Picker.Item label="EUA-Los Angeles" value="EUA-Los Angeles" />
        <Picker.Item label="CAN-Toronto" value="CAN-Toronto" />
        <Picker.Item label="ALA-Ancorage" value="ALA-Ancorage" />
        <Picker.Item label="CHI-Viña del Mar" value="CHI-Viña del Mar" />
        <Picker.Item label="BRA-Río de Janeiro" value="BRA-Río de Janeiro" />
        <Picker.Item label="GUA-Chiquimula" value="GUA-Chiquimula" />
        <Picker.Item label="COL-Bogota" value="COL-Bogota" />
        <Picker.Item label="VZL-Caracas" value="VZL-Caracas" />
      </Picker>
    </View>
  );
};
