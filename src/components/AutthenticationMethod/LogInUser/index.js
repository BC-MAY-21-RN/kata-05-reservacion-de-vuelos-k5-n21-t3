import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const LoginUser = (email, password, navegacion, setError) => {
  if (email && password) {
    //  setTimeout(()=>{
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navegacion.navigate('Flights');
        Alert.alert('Great', 'Login successfully, welcome!', [{text: 'Okey'}]);
        return false;
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('OOPS', 'This email or password are invalid.', [
            {text: 'Okey'},
          ]);
          setError('This email or password are invalid.');
          return false;
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('OOPS', 'Invalid email. ', [{text: 'Okey'}]);
          setError('You are not using a valid email.');
          return false;
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert('OOPS', 'No user was found matching this email.', [
            {text: 'Okey'},
          ]);
          setError('No user was found matching this email.');
          return false;
        }
        if (error.code === 'auth/wrong-password') {
          Alert.alert('OOPS', setError('The email or password are invalid.'), [
            {text: 'Okey'},
          ]);
          return false;
        }
        console.error(error);
      });
  } //,5000)}
};
