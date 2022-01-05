import React from 'react';

import {TitleScreen, NextButton, NextText, ViewMain} from './styled';
import {OriginToDestiny} from '../OriginToDestiny';

export const ConfirmationScreen = ({navegacion}) => {
  return (
    <ViewMain>
      <OriginToDestiny
        CountryOrigin="MEX"
        StateOrigin="Colima"
        CountryDestiny="JAP"
        StateDestiny="Tokyo"
      />
      <TitleScreen>Your Request{'\n'}was recieved.</TitleScreen>

      <NextButton onPress={() => navegacion.navigate('Flights')}>
        <NextText>Finish</NextText>
      </NextButton>
    </ViewMain>
  );
};
