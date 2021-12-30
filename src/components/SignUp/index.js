import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Container,
  CustomInput,
  TittleLogin,
  TextCustom,
  TextMini,
  LoginButton,
  LoginText,
  TextQuestion,
  TextSeparator,
  ImageGoogle,
  CheckBoxView,
} from './styled';
import {CustomCheckBox} from './checkBoxTemplate';
import {Link} from '@react-navigation/native';

export const SignUpScreen = ({navegacion}) => {
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
      <CheckBoxView>
        <CustomCheckBox Title={'I agree to the Terms and Privacy Policy.'} />
        <CustomCheckBox Title={'Subscribe for select product updates.'} />
      </CheckBoxView>

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
  underline: {textDecorationLine: 'underline'},
});
