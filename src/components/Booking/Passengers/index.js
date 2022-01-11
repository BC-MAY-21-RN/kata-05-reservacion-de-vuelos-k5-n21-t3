import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {
  TitleScreen,
  NextButton,
  NextText,
  ArrowBack,
  Container,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {OriginToDestiny} from '../OriginToDestiny';
import {PassengersPicker} from './PassengersPicker';
import {ButtonLogOff} from '../../AutthenticationMethod/ButtonLogOff';

export const PassengersScreen = ({navegacion}) => {
  return (
    <View>
      <ButtonLogOff navegacion={navegacion} />

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
      <TitleScreen>How many{'\n'}passengers?</TitleScreen>
      <Container>
        <PassengersPicker />
      </Container>

      <NextButton onPress={() => navegacion.navigate('Confirmation')}>
        <NextText>Next</NextText>
      </NextButton>
    </View>
  );
};
