import auth from '@react-native-firebase/auth';

export const LogOff = navegacion => {
  auth()
    .signOut()
    .then(() => {
      console.log('User account Loged Out');
      alert('Log Out successfull', [{text: 'Okey'}]);
      navegacion.navigate('Login');

      return false;
    })
    .catch(error => {
      console.log(navegacion);
    });
};
