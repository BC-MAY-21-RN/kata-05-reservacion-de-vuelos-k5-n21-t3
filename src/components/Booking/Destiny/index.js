import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, TitleScreen, NextButton, NextText} from './styled';

import {OriginToDestiny} from '../OriginToDestiny';
import {PickerData} from '../../Picker';
import {ButtonLogOff} from '../../AutthenticationMethod/ButtonLogOff';
import {BackArrow} from '../ArrowBack';

export const DestinyScreen = ({route, navegacion}) => {
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const {origin, stateOrigin} = route.params;

  return (
    <View>
      <ButtonLogOff navegacion={navegacion} />
      <BackArrow navegacion={navegacion} />

      {/*   <ArrowBack>
        <TouchableHighlight onPress={() => navegacion.goBack()}>
          <Icon name="angle-left" size={40} color="#5c6ef8" />
        </TouchableHighlight>
      </ArrowBack> */}

      <OriginToDestiny
        origin={origin}
        stateOrigin={stateOrigin}
        destiny={selectedCountry}
        stateDestiny={selectedState}
      />

      <TitleScreen>Where will you be {'\n'}flying to?</TitleScreen>

      <Container>
        <PickerData
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          setSelectedState={setSelectedState}
        />
      </Container>

      <NextButton
        disabled={selectedCountry ? false : true}
        style={selectedCountry ? styles.loginEnabled : styles.loginDisabled}
        onPress={() =>
          navegacion.navigate('Calendar', {
            destiny: selectedCountry,
            origin: origin,
            stateOrigin: stateOrigin,
            stateDestiny: selectedState,
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
