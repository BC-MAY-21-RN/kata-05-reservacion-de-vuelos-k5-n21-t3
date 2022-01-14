import React, {useState} from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
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

export const PassengersScreen = ({route, navegacion}) => {
  const [selectedPassenger, setSelectedPassenger] = useState();
  const {origin, destiny, date} = route.params;
  return (
    <View>
      <ButtonLogOff navegacion={navegacion} />

      <ArrowBack>
        <TouchableHighlight onPress={() => navegacion.goBack()}>
          <Icon name="angle-left" size={40} color="#5c6ef8" />
        </TouchableHighlight>
      </ArrowBack>
      <OriginToDestiny
        origin={origin}
        destiny={destiny}
        date={date}
        passengers={selectedPassenger}
      />
      <TitleScreen>How many{'\n'}passengers?</TitleScreen>
      <Container>
        <PassengersPicker
          selectedPassenger={selectedPassenger}
          setSelectedPassenger={setSelectedPassenger}
        />
      </Container>
      <NextButton
        disabled={selectedPassenger ? false : true}
        style={selectedPassenger ? styles.loginEnabled : styles.loginDisabled}
        onPress={() =>
          navegacion.navigate('Confirmation', {
            destiny: destiny,
            origin: origin,
            date: date,
            passengers: selectedPassenger,
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
