import React, {useState} from 'react';
import {View, TouchableHighlight} from 'react-native';
import {TitleScreen, NextButton, NextText, ArrowBack} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {OriginToDestiny} from '../OriginToDestiny';
import {CalendarPicker} from './CalendarPicker';
import {ButtonLogOff} from '../../AutthenticationMethod/ButtonLogOff';

export const CalendarScreen = ({navegacion, route}) => {
  const [day, setDay] = useState();
  const {origin, destiny} = route.params;

  return (
    <View>
      <ButtonLogOff navegacion={navegacion} />

      <ArrowBack>
        <TouchableHighlight onPress={() => navegacion.goBack()}>
          <Icon name="angle-left" size={40} color="#5c6ef8" />
        </TouchableHighlight>
      </ArrowBack>

      <OriginToDestiny origin={origin} destiny={destiny} date={day} />

      <TitleScreen>Select Date</TitleScreen>

      <CalendarPicker setDay={setDay} />

      <NextButton
        onPress={() =>
          navegacion.navigate('Passengers', {
            origin: origin,
            destiny: destiny,
            date: day,
          })
        }>
        <NextText>Next</NextText>
      </NextButton>
    </View>
  );
};
