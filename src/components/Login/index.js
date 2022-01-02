import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {
  Container,
  CustomInput,
  TittleLogin,
  TextCustom,
  TextMini,
  LoginButton,
  LoginText,
  TextQuestion,
} from './styled';
import {Link} from '@react-navigation/native';
import {AuthenticationMethod} from '../AutthenticationMethod';
import {LoginUser} from '../AutthenticationMethod/LogInUser';
import {LogOff} from '../AutthenticationMethod/LogOff';

export const LoginScreen = ({navegacion}) => {
  return (
    <View>
      <TittleLogin>Login</TittleLogin>
      <Container>
        <TextCustom>Email *</TextCustom>
        <CustomInput
          placeholder="Put your email. ej: @gmail.com, @outlook.com"
          onChangeText={text1 => LoginUser(text1)}
        />
        <TextCustom>Password *</TextCustom>
        <CustomInput
          placeholder="Top secret password"
          onChangeText={text2 => LoginUser(text2)}
        />
        <TextMini>
          Use 8 or more characters with a mix of letters, numbers and symbols
        </TextMini>
      </Container>

      <LoginButton onPress={() => navegacion.navigate('Flights')}>
        <LoginText>Login</LoginText>
      </LoginButton>

      <TextQuestion>
        You dont have an account?{' '}
        <Link
          style={styles.underline}
          to={{screen: 'SignUp', params: {navegacion: navegacion}}}>
          {' '}
          Sign Up{' '}
        </Link>
      </TextQuestion>
      <AuthenticationMethod />
      <Button title="Log in" onPress={LoginUser} />
      <Button title="Logoff" onPress={LogOff} />
    </View>
  );
};

const styles = StyleSheet.create({
  underline: {textDecorationLine: 'underline'},
});
