import React, {useState} from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
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

export const DestinyScreen = ({route, navegacion}) => {
  const [selectedCountry, setSelectedCountry] = useState();
  const {origin} = route.params;

  return (
    <View>
      <ButtonLogOff navegacion={navegacion} />
      <ArrowBack>
        <TouchableHighlight onPress={() => navegacion.goBack()}>
          <Icon name="angle-left" size={40} color="#5c6ef8" />
        </TouchableHighlight>
      </ArrowBack>

      <OriginToDestiny origin={origin} destiny={selectedCountry} />

      <TitleScreen>Where will you be {'\n'}flying to?</TitleScreen>

      <Container>
        <PickerData
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </Container>

      <NextButton
        disabled={selectedCountry ? false : true}
        style={selectedCountry ? styles.loginEnabled : styles.loginDisabled}
        onPress={() =>
          navegacion.navigate('Calendar', {
            destiny: selectedCountry,
            origin: origin,
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
