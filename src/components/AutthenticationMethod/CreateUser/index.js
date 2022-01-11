import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const CreateUser = (email, password, navegacion) => {
  if (email && password) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        navegacion.navigate('Flights');
        Alert.alert('Great', 'Sign up successfully, welcome!', [
          {text: 'Okey'},
        ]);
        return false;
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Great', 'This email is already in use', [
            {text: 'Okey'},
          ]);
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert(
            'Great',
            'This email is invalid, please use a valid email',
            [{text: 'Okey'}],
          );
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
    return null;
  }
};
