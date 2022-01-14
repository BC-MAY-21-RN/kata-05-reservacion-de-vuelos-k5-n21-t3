import React, {useState} from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import {
  Container,
  CustomInput,
  TittleLogin,
  TextCustom,
  TextMini,
  LoginButton,
  LoginText,
  TextQuestion,
  Eye,
} from './styled';
import {Link} from '@react-navigation/native';
//import {AuthenticationMethod} from '../AutthenticationMethod';
//import {LoadingAnimation} from '../Animation/Loading';
import {LoginUser} from '../AutthenticationMethod/LogInUser';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const LoginScreen = ({navegacion}) => {
  const [emailFullInput, setEmailFullInput] = useState(false);
  const [passwordFullInput, setPasswordFullInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
          onChangeText={email => {
            setEmail(email);
            setEmailFullInput(true);
          }}
        />
        <TextCustom>Password *</TextCustom>

        <CustomInput
          placeholder="Top secret password"
          password={true}
          onChangeText={password => {
            setPassword(password);
            setPasswordFullInput(true);
          }}
          secureTextEntry={!showPassword}
        />

        <Eye>
          <TouchableHighlight
            onPress={() => {
              setShowPassword(!showPassword);
              console.log(showPassword);
            }}>
            <Icon
              name={showPassword ? 'eye-slash' : 'eye'}
              size={20}
              color="#C1C1C1"
            />
          </TouchableHighlight>
        </Eye>

        <TextMini>
          Use 8 or more characters with a mix of letters, numbers and symbols
        </TextMini>
      </Container>
      <LoginButton
        disabled={emailFullInput && passwordFullInput ? false : true}
        style={
          emailFullInput && passwordFullInput
            ? styles.loginEnabled
            : styles.loginDisabled
        }
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
  icon: {color: '#c1c1c1'},
  loginEnabled: {backgroundColor: '#5c6ef8'},
  loginDisabled: {backgroundColor: '#c1c1c1'},
});
