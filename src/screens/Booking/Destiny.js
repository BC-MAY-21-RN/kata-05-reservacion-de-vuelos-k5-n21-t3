import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export const Destiny = ({navigation}) => {
  return (
    <View>
      <Text>Destiny Screen</Text>
      <Button
        onPress={() => navigation.navigate('Calendar')}
        title="To Calendar"
      />
      <Button onPress={() => navigation.navigate('Home')} title="HOME" />
      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
};
