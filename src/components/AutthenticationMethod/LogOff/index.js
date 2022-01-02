import auth from '@react-native-firebase/auth';

export const LogOff = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};
