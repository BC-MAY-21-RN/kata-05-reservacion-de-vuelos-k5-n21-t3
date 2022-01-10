import React, {useState} from 'react';
import {View} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export const PickerData = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Mexico" value="MX" />
        <Picker.Item label="Argentina" value="ARG" />
        <Picker.Item label="Estados Unidos" value="EUA" />
        <Picker.Item label="Canada" value="CNA" />
        <Picker.Item label="Alaska" value="ALA" />
        <Picker.Item label="Chile" value="CHIL" />
        <Picker.Item label="Brasil" value="BR" />
        <Picker.Item label="Guatemala" value="GUA" />
        <Picker.Item label="Colombia" value="COL" />
        <Picker.Item label="Venezuela" value="VZL" />
      </Picker>
    </View>
  );
};
