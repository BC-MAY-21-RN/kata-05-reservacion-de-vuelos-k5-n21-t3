import React from 'react';
import {View} from 'react-native';
import {SignUpScreen} from '../components/SignUp';

export const SignUp = ({navigation}) => {
  return (
    <View>
      <SignUpScreen navegacion={navigation} />
    </View>
  );
};
