import React from 'react';

import {TitleScreen, NextButton, NextText, ViewMain} from './styled';
import {OriginToDestiny} from '../OriginToDestiny';

export const ConfirmationScreen = ({route, navegacion}) => {
  const {origin, destiny, date, passengers} = route.params;
  return (
    <ViewMain>
      <OriginToDestiny
        origin={origin}
        destiny={destiny}
        date={date}
        passengers={passengers}
      />
      <TitleScreen>Your Request{'\n'}was recieved.</TitleScreen>

      <NextButton onPress={() => navegacion.navigate('Flights')}>
        <NextText>Finish</NextText>
      </NextButton>
    </ViewMain>
  );
};
