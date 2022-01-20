import React, {useState} from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import {
  Container,
  CustomInput,
  TittleLogin,
  TextCustom,
  TextMini,
  LoginButton,
  LoginText,
  TextQuestionLogin,
  Eye,
  TextSeparator,
  ImageGoogle,
} from './styled';
import {Link} from '@react-navigation/native';
//import {AuthenticationMethod} from '../AutthenticationMethod';
//import {LoadingAnimation} from '../Animation/Loading';
import {LoginUser} from '../AutthenticationMethod/LogInUser';
import Icon from 'react-native-vector-icons/FontAwesome5';
/* import {GoogleSignin} from '@react-native-google-signin/google-signin'; */
import auth from '@react-native-firebase/auth';
import {GoogleButton} from '../AutthenticationMethod/GoogleButton';
import {ShowUnshowEye} from '../ShowUnshowEye';

/* GoogleSignin.configure({
  webClientId:
    '371992773976-3e25baika1uqn078iup4kfaujso12ko6.apps.googleusercontent.com',
}); */

export const LoginScreen = ({navegacion}) => {
  const [emailFullInput, setEmailFullInput] = useState(false);
  const [passwordFullInput, setPasswordFullInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  /*   async function onGoogleButtonPress() {
    // GoogleSignin.signOut();
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    await auth().signInWithCredential(googleCredential),
      navegacion.navigate('Flights');
  } */

  return (
    <View>
      <TittleLogin>Login</TittleLogin>
      {/*<LogedUser>
        <AuthenticationMethod />
      </LogedUser> Esto sirve para ver que usuario está logeado*/}
      <Container>
        <TextCustom>
          Email *{' '}
          {error ? <Text style={styles.errorText}> {error} </Text> : null}
        </TextCustom>
        <CustomInput
          placeholder="Put your email. ej: @gmail.com, @outlook.com"
          onChangeText={email => {
            setEmail(email);
            setEmailFullInput(true);
          }}
        />
        <TextCustom>
          Password * {}
          {error ? <Text style={styles.errorText}> {error} </Text> : null}
        </TextCustom>

        <CustomInput
          placeholder="Top secret password"
          password={true}
          onChangeText={password => {
            setPassword(password);
            setPasswordFullInput(true);
          }}
          secureTextEntry={!showPassword}
        />

        <ShowUnshowEye
          setShowPassword={setShowPassword}
          showPassword={showPassword}
        />
        {/*       <Eye>
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
        </Eye> */}

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
          setLoading(LoginUser(email, password, navegacion, setError));
          console.log(loading);
        }}>
        <LoginText>Login</LoginText>
      </LoginButton>

      <TextSeparator>Or</TextSeparator>

      <GoogleButton navegacion={navegacion} />
      {/*     <LoginButton
        onPress={() =>
          onGoogleButtonPress()
            .then(() => console.log('Login in with Google!'))
            .catch(error => console.log(error))
        }>
        <ImageGoogle source={require('../../library/Image/google.png')} />

        <LoginText>Login with Google</LoginText>
      </LoginButton> */}

      <TextQuestionLogin>
        You dont have an account?{' '}
        <Link $ to={{screen: 'SignUp', params: {navegacion: navegacion}}}>
          {' '}
          Sign Up{' '}
        </Link>
      </TextQuestionLogin>
      {/*  {loading == undefined ? <LoadingAnimation /> : null}*/}
    </View>
  );
};

const styles = StyleSheet.create({
  underline: {textDecorationLine: 'underline', color: '#5c6ef8'},
  icon: {color: '#c1c1c1'},
  loginEnabled: {backgroundColor: '#5c6ef8'},
  loginDisabled: {backgroundColor: '#c1c1c1'},
  errorText: {color: 'red', fontSize: 10},
});
