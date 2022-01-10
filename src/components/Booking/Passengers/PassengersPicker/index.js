import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export const PassengersPicker = () => {
  const [selectedPassenger, setSelectedPassenger] = useState();
  return (
    <Picker
      selectedValue={selectedPassenger}
      onValueChange={(itemValue, itemIndex) => setSelectedPassenger(itemValue)}
      style={styles.PassengerNumber}>
      <Picker.Item label="1" value="1" />
      <Picker.Item label="2" value="2" />
      <Picker.Item label="3" value="3" />
      <Picker.Item label="4" value="4" />
      <Picker.Item label="5" value="5" />
      <Picker.Item label="6" value="6" />
      <Picker.Item label="7" value="7" />
      <Picker.Item label="8" value="8" />
      <Picker.Item label="9" value="9" />
      <Picker.Item label="10" value="10" />
    </Picker>
  );
};

const styles = StyleSheet.create({
  PassengerNumber: {
    width: 100,
  },
});
