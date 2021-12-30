import React from 'react';
import {View} from 'react-native';
import {LoginScreen} from '../components/Login';

export const Login = ({navigation}) => {
  return (
    <View>
      <LoginScreen navegacion={navigation} />
    </View>
  );
};
