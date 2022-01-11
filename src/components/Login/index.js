import React, {useState} from 'react';
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
  LogedUser,
} from './styled';
import {Link} from '@react-navigation/native';
//import {AuthenticationMethod} from '../AutthenticationMethod';
//import {LoadingAnimation} from '../Animation/Loading';
import {LoginUser} from '../AutthenticationMethod/LogInUser';

export const LoginScreen = ({navegacion}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <View>
      <TittleLogin>Login</TittleLogin>
      {/*<LogedUser>
        <AuthenticationMethod />
      </LogedUser> Esto sirve para ver que usuario está logeado*/}
      <Container>
        <TextCustom>Email *</TextCustom>
        <CustomInput
          placeholder="Put your email. ej: @gmail.com, @outlook.com"
          onChangeText={email => setEmail(email)}
        />
        <TextCustom>Password *</TextCustom>
        <CustomInput
          placeholder="Top secret password"
          onChangeText={password => setPassword(password)}
        />
        <TextMini>
          Use 8 or more characters with a mix of letters, numbers and symbols
        </TextMini>
      </Container>
      <LoginButton
        onPress={() => {
          setLoading(true);
          setLoading(LoginUser(email, password, navegacion));
          console.log(loading);
        }}>
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
      {/*  {loading == undefined ? <LoadingAnimation /> : null}*/}
    </View>
  );
};

const styles = StyleSheet.create({
  underline: {textDecorationLine: 'underline'},
});
