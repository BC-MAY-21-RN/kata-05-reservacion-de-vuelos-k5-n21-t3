import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const LoginUser = (email, password, navegacion) => {
  if (email && password) {
    //  setTimeout(()=>{
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account logged in');
        navegacion.navigate('Flights');
        Alert.alert('Great', 'Login successfully, welcome!', [{text: 'Okey'}]);
        return false;
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert(
            'OOPS',
            'This email or password are invalid. Please try again',
            [{text: 'Okey'}],
          );
          console.log('That email address is already in use!');
          return false;
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert(
            'OOPS',
            'You are not using a valid email. Check your email and try again',
            [{text: 'Okey'}],
          );
          return false;
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert(
            'OOPS',
            'No user was found matching this email. Check your email and try again',
            [{text: 'Okey'}],
          );
          return false;
        }
        if (error.code === 'auth/wrong-password') {
          Alert.alert(
            'OOPS',
            'The email or password are invalid. Please try again',
            [{text: 'Okey'}],
          );
          return false;
        }
        console.error(error);
      });
  } //,5000)}
};
