import React from 'react';
import firestore from '@react-native-firebase/firestore';

import {TitleScreen, NextButton, NextText, ViewMain} from './styled';
import {OriginToDestiny} from '../OriginToDestiny';
import auth from '@react-native-firebase/auth';

//import getArrayFligths from '../../MyFlights/getVuelos';

export const ConfirmationScreen = ({route, navegacion}) => {
  const {origin, stateOrigin, destiny, stateDestiny, date, passengers} =
    route.params;

  const updateDataInFirebase = () => {
    //para agregar a la coleccion Flights de firebase nuevos vuelos
    firestore()
      .collection('Flights')
      .add({
        IdUser: auth().currentUser.uid,
        origin: origin,
        stateOrigin: stateOrigin,
        destiny: destiny,
        stateDestiny: stateDestiny,
        date: date,
        passengers: passengers,
      })
      .then(() => {
        console.log('Flight added!'), navegacion.navigate('Flights');
      });
  };

  return (
    <ViewMain>
      <OriginToDestiny
        origin={origin}
        stateOrigin={stateOrigin}
        destiny={destiny}
        stateDestiny={stateDestiny}
        date={date}
        passengers={passengers}
      />
      <TitleScreen>Your Request{'\n'}was recieved.</TitleScreen>
      <NextButton onPress={() => updateDataInFirebase()}>
        <NextText>Finish</NextText>
      </NextButton>
    </ViewMain>
  );
};
