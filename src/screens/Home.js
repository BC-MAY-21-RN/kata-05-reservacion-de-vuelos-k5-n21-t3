import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View, Button, TouchableOpacity} from 'react-native'
import { Link } from '@react-navigation/native';

export const Home = ({navigation}) => {

  return (
    <View>
      <Text>Home test screen</Text>
      <Button onPress={() => navigation.navigate('Login')} title='Hey' />
    </View>
  )
}

