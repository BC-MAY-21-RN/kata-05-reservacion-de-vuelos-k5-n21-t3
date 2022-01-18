import React from 'react';
import firestore from '@react-native-firebase/firestore';

import {TitleScreen, NextButton, NextText, ViewMain} from './styled';
import {OriginToDestiny} from '../OriginToDestiny';

export const ConfirmationScreen = ({route, navegacion}) => {
  const {origin, destiny, date, passengers} = route.params;

  const updateDataInFirebase = () => {
    //para agregar a la coleccion Flights de firebase nuevos vuelos
    firestore()
      .collection('Flights')
      .add({
        IdUser: 'RJX9PanCADfUB5cwB6bUjkQUsLI2',
        date: date,
        destiny: destiny,
        origin: origin,
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
        destiny={destiny}
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
