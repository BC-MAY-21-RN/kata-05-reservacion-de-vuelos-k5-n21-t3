import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {TitleScreen, NextButton, NextText, ArrowBack} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {OriginToDestiny} from '../OriginToDestiny';
import {CalendarPicker} from './CalendarPicker';

export const CalendarScreen = ({navegacion}) => {
  return (
    <View>
      <ArrowBack>
        <TouchableHighlight onPress={() => navegacion.goBack()}>
          <Icon name="angle-left" size={40} color="#5c6ef8" />
        </TouchableHighlight>
      </ArrowBack>
      <OriginToDestiny
        CountryOrigin="MEX"
        StateOrigin="Colima"
        CountryDestiny="JAP"
        StateDestiny="Tokyo"
      />
      <TitleScreen>Select Date</TitleScreen>

      <CalendarPicker />

      <NextButton onPress={() => navegacion.navigate('Passengers')}>
        <NextText>Next</NextText>
      </NextButton>
    </View>
  );
};
