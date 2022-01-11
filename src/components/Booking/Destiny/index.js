import React from 'react';
import {View, TouchableHighlight} from 'react-native';
import {
  Container,
  CustomInput,
  TitleScreen,
  NextButton,
  NextText,
  ArrowBack,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {OriginToDestiny} from '../OriginToDestiny';
import {PickerData} from '../../Picker';
import {ButtonLogOff} from '../../AutthenticationMethod/ButtonLogOff';

export const DestinyScreen = ({navegacion}) => {
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

      <TitleScreen>Where will you be {'\n'}flying to?</TitleScreen>

      <Container>
        <PickerData />
      </Container>

      <NextButton onPress={() => navegacion.navigate('Calendar')}>
        <NextText>Next</NextText>
      </NextButton>
    </View>
  );
};
