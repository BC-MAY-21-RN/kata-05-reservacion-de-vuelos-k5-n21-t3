/*import firestore from '@react-native-firebase/firestore';

export const getArrayFligths = (uid, setFligths) => {
  firestore()
    .collection('Flights')
    // Filter results
    .where('IdUser', '==', uid)
    .get()
    .then(async response => {
      setFligths(response._docs);
    });
};

*/
