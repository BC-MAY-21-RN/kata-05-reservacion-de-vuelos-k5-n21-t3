import React from 'react';
import {View} from 'react-native';
import {LoginScreen} from '../navigation/components/Login';

export const Login = ({navigation}) => {
  return (
    <View>
      <LoginScreen navegacion={navigation} />
    </View>
  );
};
