import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Container,
  CustomButton,
  CustomInput,
  TittleLogin,
  TextCustom,
  TextMini,
  LoginButton,
  LoginText,
  TextQuestion,
  TextSeparator,
  ImageGoogle,
} from './styled';
import {CustomCheckBox} from './checkBoxTemplate';
import {Link} from '@react-navigation/native';
import {CheckBox, Icon, SocialIcon} from 'react-native-elements';
import {google} from '../../library/Image/google.png';

export const SignUpScreen = ({navegacion, Title}) => {
  return (
    <View>
      <TittleLogin>Sign Up</TittleLogin>
      <Container>
        <TextCustom>First Name</TextCustom>
        <CustomInput placeholder="Put your name here" />
        <TextCustom>Email *</TextCustom>
        <CustomInput placeholder="Put your email. ej: @gmail.com, @outlook.com" />
        <TextCustom>Password *</TextCustom>
        <CustomInput placeholder="Top secret password O~O" />
        <TextMini>
          Use 8 or more characters with a mix of letters, numbers and symbols
        </TextMini>
      </Container>
      <CustomCheckBox Title={'I agree to the Terms and Privacy Policy.'} />
      <CustomCheckBox Title={'Subscribe for select product updates.'} />

      <LoginButton onPress={() => navegacion.navigate('Flights')}>
        <LoginText>Sign Up</LoginText>
      </LoginButton>
      <TextSeparator>Or</TextSeparator>
      <LoginButton onPress={() => navegacion.navigate('Flights')}>
        <ImageGoogle source={require('../../library/Image/google.png')} />
        <LoginText>Sign Up with Google</LoginText>
      </LoginButton>
      <TextQuestion>
        {'Already have an account? '} {/*espacio={''}*/}
        <Link
          style={styles.underline}
          to={{screen: 'Login', params: {navegacion: navegacion}}}>
          {' '}
          Login{' '}
        </Link>
      </TextQuestion>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
});
