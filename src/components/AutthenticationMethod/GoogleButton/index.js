import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ButtonGoogle, ImageGoogle, TextGoogleButton} from './styled';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '371992773976-3e25baika1uqn078iup4kfaujso12ko6.apps.googleusercontent.com',
});

async function onGoogleButtonPress({navegacion}) {
  // GoogleSignin.signOut();
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();
  console.log(idToken);

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  await auth().signInWithCredential(googleCredential),
    navegacion.navigate('Flights');
}

export const GoogleButton = ({navegacion}) => {
  return (
    <ButtonGoogle
      onPress={() =>
        onGoogleButtonPress({navegacion})
          .then(() => console.log('Signed in with Google!'))
          .catch(error => console.log(error))
      }>
      <ImageGoogle source={require('../../../library/Image/google.png')} />

      <TextGoogleButton>Sign Up with Google</TextGoogleButton>
    </ButtonGoogle>
  );
};
