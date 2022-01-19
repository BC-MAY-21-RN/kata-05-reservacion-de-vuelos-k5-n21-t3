import React, {useState} from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import {TitleScreen, NextButton, NextText, ArrowBack} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {OriginToDestiny} from '../OriginToDestiny';
import {CalendarPicker} from './CalendarPicker';
import {ButtonLogOff} from '../../AutthenticationMethod/ButtonLogOff';
import {BackArrow} from '../ArrowBack';

export const CalendarScreen = ({navegacion, route}) => {
  const [day, setDay] = useState();
  const {origin, stateOrigin, destiny, stateDestiny} = route.params;

  return (
    <View>
      <BackArrow navegacion={navegacion} />
      {/*    <ArrowBack>
        <TouchableHighlight onPress={() => navegacion.goBack()}>
          <Icon name="angle-left" size={40} color="#5c6ef8" />
        </TouchableHighlight>
      </ArrowBack> */}

      <ButtonLogOff navegacion={navegacion} />
      <OriginToDestiny
        origin={origin}
        destiny={destiny}
        stateOrigin={stateOrigin}
        stateDestiny={stateDestiny}
        date={day}
      />

      <TitleScreen>Select Date</TitleScreen>

      <CalendarPicker setDay={setDay} />

      <NextButton
        disabled={day ? false : true}
        style={day ? styles.loginEnabled : styles.loginDisabled}
        onPress={() =>
          navegacion.navigate('Passengers', {
            origin: origin,
            stateOrigin: stateOrigin,
            destiny: destiny,
            stateDestiny: stateDestiny,
            date: day,
          })
        }>
        <NextText>Next</NextText>
      </NextButton>
    </View>
  );
};
const styles = StyleSheet.create({
  loginEnabled: {backgroundColor: '#5c6ef8'},
  loginDisabled: {backgroundColor: '#c1c1c1'},
});
