import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export const Origin = ({navigation}) => {
  return (
    <View>
      <Text>Origin Screen</Text>
      <Button
        onPress={() => navigation.navigate('Destiny')}
        title="To Destiny"
      />
      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
};
