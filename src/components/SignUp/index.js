import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
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
import {AuthenticationMethod} from '../AutthenticationMethod';
import {CreateUser} from '../AutthenticationMethod/CreateUser';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '371992773976-3e25baika1uqn078iup4kfaujso12ko6.apps.googleusercontent.com',
});

export const SignUpScreen = ({navegacion}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <ScrollView>
      <TittleLogin>Sign Up</TittleLogin>
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
      <CheckBoxView>
        <CustomCheckBox Title={'I agree to the Terms and Privacy Policy.'} />
        <CustomCheckBox Title={'Subscribe for select product updates.'} />
      </CheckBoxView>

      <LoginButton
        onPress={() => {
          setLoading(true);
          setLoading(CreateUser(email, password, navegacion));
          console.log(loading);
        }}>
        <LoginText>Sign up</LoginText>
      </LoginButton>

      <TextSeparator>Or</TextSeparator>

      <LoginButton
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }>
        <ImageGoogle source={require('../../library/Image/google.png')} />

        <LoginText>Sign Up with Google</LoginText>
      </LoginButton>

      <TextQuestion>
        {'Already have an account? '}
        <Link
          style={styles.underline}
          to={{screen: 'Login', params: {navegacion: navegacion}}}>
          {' '}
          Login{' '}
        </Link>
      </TextQuestion>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  underline: {textDecorationLine: 'underline'},
});
