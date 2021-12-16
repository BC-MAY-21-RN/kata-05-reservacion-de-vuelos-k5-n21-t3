import React from 'react';
import {Text, View, Button} from 'react-native';

export const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home test screen</Text>
      <Button onPress={() => navigation.navigate('Login')} title="Login" />
      {/*disabled*/}
      <Button onPress={() => navigation.navigate('SignUp')} title="Signup" />
    </View>
  );
};
