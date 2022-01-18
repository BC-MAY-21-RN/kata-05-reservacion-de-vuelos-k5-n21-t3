import React from 'react';
import firestore from '@react-native-firebase/firestore';

import {TitleScreen, NextButton, NextText, ViewMain} from './styled';
import {OriginToDestiny} from '../OriginToDestiny';
import auth from '@react-native-firebase/auth';
//import getArrayFligths from '../../MyFlights/getVuelos';

export const ConfirmationScreen = ({route, navegacion}) => {
  const {origin, destiny, date, passengers} = route.params;
  //const [rtData, setRtData] = useState([]);

  const updateDataInFirebase = () => {
    //para agregar a la coleccion Flights de firebase nuevos vuelos

    firestore()
      .collection('Flights')
      .add({
        IdUser: auth().currentUser.uid,
        date: date,
        destiny: destiny,
        origin: origin,
        passengers: passengers,
      })
      .then(() => {
        console.log('Flight added!'), navegacion.navigate('Flights');
      });
  };

  /* async function loadRTData(){

    const subscriber = firestore().collection('Flights').onSnapshot(querySnapshot => {
      const vuelos = []

      querySnapshot.forEach(documentSnapshot => {
        vuelos.push({
          ...documentSnapshot,
          key: documentSnapshot.id
        })
      })

        setRTData(vuelos)

    })
    return () => subscriber ()

  } */

  return (
    <ViewMain>
      <OriginToDestiny
        origin={origin}
        destiny={destiny}
        date={date}
        passengers={passengers}
      />
      <TitleScreen>Your Request{'\n'}was recieved.</TitleScreen>
      <NextButton
        onPress={() => {
          updateDataInFirebase(),
            {
              /*getArrayFligths(auth().currentUser.uid)*/
            };
        }}>
        <NextText>Finish</NextText>
      </NextButton>
    </ViewMain>
  );
};
